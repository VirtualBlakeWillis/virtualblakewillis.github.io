import { resumeData } from "./data.ts";
import type {
  Bullet,
  JobRole,
  ProjectRole,
  Resume,
  ResumeData,
  ResumeSelection,
  Role,
  RoleSection,
  RoleSelection,
  Summary,
} from "./types.ts";

export class InvalidSelectionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalidSelectionError";
  }
}

/** The Standard Resume's choices: every job Role and the standard Project, each with its standard Bullets. */
export function standardSelection(data: ResumeData = resumeData): ResumeSelection {
  const standardBullets = (role: Role): RoleSelection => ({
    roleId: role.id,
    bulletIds: role.bullets.filter((bullet) => bullet.standard).map((bullet) => bullet.id),
  });
  const project = data.roles.find((role) => role.kind === "project" && role.standard);
  return {
    summaryId: standardSummary(data).id,
    roles: data.roles.filter((role) => role.kind === "job").map(standardBullets),
    ...(project ? { project: standardBullets(project) } : {}),
  };
}

export function buildStandardResume(data: ResumeData = resumeData): Resume {
  return buildResume(standardSelection(data), data);
}

/** Resolves a selection of IDs into a Resume, throwing `InvalidSelectionError` on any ID that doesn't fit. */
export function buildResume(selection: ResumeSelection, data: ResumeData = resumeData): Resume {
  const roles = selection.roles.map((pick) => {
    const role = findRole(data, pick.roleId);
    if (role.kind !== "job") throw new InvalidSelectionError(`"${pick.roleId}" is a Project, not a job Role`);
    return section(data, role, pick.bulletIds);
  });

  for (const role of data.roles) {
    if (role.kind !== "job") continue;
    const count = roles.filter((selected) => selected.role.id === role.id).length;
    if (count !== 1) throw new InvalidSelectionError(`Role "${role.id}" must be selected exactly once, found ${count}`);
  }

  let project: RoleSection<ProjectRole> | undefined;
  if (selection.project) {
    const role = findRole(data, selection.project.roleId);
    if (role.kind !== "project") throw new InvalidSelectionError(`"${role.id}" is a job Role, not a Project`);
    project = section(data, role, selection.project.bulletIds);
  }

  return {
    header: data.header,
    summary: selection.summaryId === undefined ? standardSummary(data) : findSummary(data, selection.summaryId),
    roles: [...roles].sort(reverseChronological),
    ...(project ? { project } : {}),
    coreSkills: [...data.tagVocabulary],
    education: data.education,
  };
}

function section<R extends Role>(data: ResumeData, role: R, bulletIds: string[]): RoleSection<R> {
  const bullets: Bullet[] = [];
  for (const id of bulletIds) {
    const bullet = role.bullets.find((candidate) => candidate.id === id);
    if (!bullet) {
      const owner = data.roles.find((other) => other.bullets.some((candidate) => candidate.id === id));
      throw new InvalidSelectionError(
        owner ? `Bullet "${id}" belongs to "${owner.id}", not "${role.id}"` : `Unknown Bullet "${id}"`,
      );
    }
    if (bullets.includes(bullet)) throw new InvalidSelectionError(`Bullet "${id}" selected twice`);
    bullets.push(bullet);
  }
  return { role, bullets };
}

function findRole(data: ResumeData, id: string): Role {
  const role = data.roles.find((candidate) => candidate.id === id);
  if (!role) throw new InvalidSelectionError(`Unknown Role "${id}"`);
  return role;
}

function findSummary(data: ResumeData, id: string): Summary {
  const summary = data.summaries.find((candidate) => candidate.id === id);
  if (!summary) throw new InvalidSelectionError(`Unknown summary "${id}"`);
  return summary;
}

function standardSummary(data: ResumeData): Summary {
  const summary = data.summaries.find((candidate) => candidate.standard);
  if (!summary) throw new InvalidSelectionError("No standard summary");
  return summary;
}

function reverseChronological(a: RoleSection<JobRole>, b: RoleSection<JobRole>): number {
  const endKey = (role: JobRole) => (role.end === "present" ? "9999-12" : role.end);
  return compare(endKey(b.role), endKey(a.role)) || compare(b.role.start, a.role.start);
}

function compare(a: string, b: string): number {
  return a < b ? -1 : a > b ? 1 : 0;
}
