import type {
  Bullet,
  Education,
  Header,
  Link,
  ResumeData,
  Role,
  Summary,
  Tag,
  TagKind,
  YearMonth,
} from "./types.ts";

export const MAX_STANDARD_BULLETS = 3;

const ID_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const YEAR_MONTH_PATTERN = /^\d{4}-(?:0[1-9]|1[0-2])$/;
const TAG_KINDS: readonly TagKind[] = ["technology", "skill"];
const ROLE_KINDS: readonly Role["kind"][] = ["job", "project"];

export class ResumeDataError extends Error {
  readonly problems: string[];

  constructor(problems: string[]) {
    super(`Invalid resume data:\n${problems.map((p) => `  - ${p}`).join("\n")}`);
    this.name = "ResumeDataError";
    this.problems = problems;
  }
}

/** The parsed contents of the JSON files in `resume/data`. */
export interface RawResumeData {
  profile: unknown;
  tags: unknown;
  roles: unknown;
}

/** Validates raw resume data, throwing a `ResumeDataError` listing every problem found. */
export function parseResumeData(raw: RawResumeData): ResumeData {
  const read = new Reader();
  const data: ResumeData = {
    ...readProfile(read, raw.profile, "profile"),
    tagVocabulary: read.array(raw.tags, "tags", (value, path) => readTag(read, value, path)),
    roles: read.array(raw.roles, "roles", (value, path) => readRole(read, value, path)),
  };
  checkInvariants(data, read.problems);
  if (read.problems.length > 0) throw new ResumeDataError(read.problems);
  return data;
}

type Fields = Record<string, unknown>;

function isFields(value: unknown): value is Fields {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/** Reads untyped JSON, recording problems instead of throwing so all of them can be reported at once. */
class Reader {
  readonly problems: string[] = [];

  fail(path: string, message: string): void {
    this.problems.push(`${path}: ${message}`);
  }

  record(value: unknown, path: string, keys: readonly string[]): Fields {
    if (!isFields(value)) {
      this.fail(path, "expected an object");
      return {};
    }
    for (const key of Object.keys(value)) {
      if (!keys.includes(key)) this.fail(path, `unknown field "${key}"`);
    }
    return value;
  }

  array<T>(value: unknown, path: string, readItem: (item: unknown, path: string) => T): T[] {
    if (!Array.isArray(value)) {
      this.fail(path, "expected an array");
      return [];
    }
    return value.map((item, i) => readItem(item, `${path}[${i}]`));
  }

  string(value: unknown, path: string): string {
    if (typeof value !== "string" || value.trim() === "") {
      this.fail(path, "expected a non-empty string");
      return "";
    }
    return value;
  }

  boolean(value: unknown, path: string): boolean {
    if (typeof value !== "boolean") {
      this.fail(path, "expected true or false");
      return false;
    }
    return value;
  }

  oneOf<T extends string>(value: unknown, path: string, options: readonly T[]): T {
    const match = options.find((option) => option === value);
    if (match === undefined) {
      this.fail(path, `expected one of ${options.map((o) => `"${o}"`).join(", ")}`);
      return options[0];
    }
    return match;
  }

  id(value: unknown, path: string): string {
    const id = this.string(value, path);
    if (id && !ID_PATTERN.test(id)) this.fail(path, `"${id}" is not a lowercase-kebab-case ID`);
    return id;
  }

  yearMonth(value: unknown, path: string): YearMonth {
    const month = this.string(value, path);
    if (month && !YEAR_MONTH_PATTERN.test(month)) this.fail(path, `"${month}" is not a "YYYY-MM" month`);
    return month;
  }

  end(value: unknown, path: string): YearMonth | "present" {
    return value === "present" ? "present" : this.yearMonth(value, path);
  }

  url(value: unknown, path: string): string {
    const url = this.string(value, path);
    if (url && !url.startsWith("https://")) this.fail(path, `"${url}" must start with https://`);
    return url;
  }
}

function readProfile(read: Reader, value: unknown, path: string): Pick<ResumeData, "header" | "summaries" | "education"> {
  const fields = read.record(value, path, ["header", "summaries", "education"]);
  return {
    header: readHeader(read, fields.header, `${path}.header`),
    summaries: read.array(fields.summaries, `${path}.summaries`, (item, itemPath) => readSummary(read, item, itemPath)),
    education: read.array(fields.education, `${path}.education`, (item, itemPath) => readEducation(read, item, itemPath)),
  };
}

function readHeader(read: Reader, value: unknown, path: string): Header {
  const fields = read.record(value, path, ["name", "headline", "email", "location", "links"]);
  return {
    name: read.string(fields.name, `${path}.name`),
    headline: read.string(fields.headline, `${path}.headline`),
    email: read.string(fields.email, `${path}.email`),
    location: read.string(fields.location, `${path}.location`),
    links: read.array(fields.links, `${path}.links`, (item, itemPath) => readLink(read, item, itemPath)),
  };
}

function readLink(read: Reader, value: unknown, path: string): Link {
  const fields = read.record(value, path, ["text", "url"]);
  return {
    text: read.string(fields.text, `${path}.text`),
    url: read.url(fields.url, `${path}.url`),
  };
}

function readSummary(read: Reader, value: unknown, path: string): Summary {
  const fields = read.record(value, path, ["id", "text", "standard"]);
  return {
    id: read.id(fields.id, `${path}.id`),
    text: read.string(fields.text, `${path}.text`),
    standard: read.boolean(fields.standard, `${path}.standard`),
  };
}

function readEducation(read: Reader, value: unknown, path: string): Education {
  const fields = read.record(value, path, ["school", "credential", "field", "end"]);
  return {
    school: read.string(fields.school, `${path}.school`),
    credential: read.string(fields.credential, `${path}.credential`),
    field: read.string(fields.field, `${path}.field`),
    end: read.yearMonth(fields.end, `${path}.end`),
  };
}

function readTag(read: Reader, value: unknown, path: string): Tag {
  const fields = read.record(value, path, ["name", "kind"]);
  return {
    name: read.string(fields.name, `${path}.name`),
    kind: read.oneOf(fields.kind, `${path}.kind`, TAG_KINDS),
  };
}

function readRole(read: Reader, value: unknown, path: string): Role {
  const kind = read.oneOf(isFields(value) ? value.kind : undefined, `${path}.kind`, ROLE_KINDS);
  if (kind === "job") {
    const fields = read.record(value, path, ["kind", "id", "title", "employer", "location", "start", "end", "bullets"]);
    return {
      kind,
      id: read.id(fields.id, `${path}.id`),
      title: read.string(fields.title, `${path}.title`),
      employer: read.string(fields.employer, `${path}.employer`),
      location: read.string(fields.location, `${path}.location`),
      start: read.yearMonth(fields.start, `${path}.start`),
      end: read.end(fields.end, `${path}.end`),
      bullets: read.array(fields.bullets, `${path}.bullets`, (item, itemPath) => readBullet(read, item, itemPath)),
    };
  }
  const fields = read.record(value, path, ["kind", "id", "name", "title", "start", "end", "standard", "bullets"]);
  return {
    kind,
    id: read.id(fields.id, `${path}.id`),
    name: read.string(fields.name, `${path}.name`),
    title: read.string(fields.title, `${path}.title`),
    ...(fields.start === undefined ? {} : { start: read.yearMonth(fields.start, `${path}.start`) }),
    end: read.end(fields.end, `${path}.end`),
    standard: read.boolean(fields.standard, `${path}.standard`),
    bullets: read.array(fields.bullets, `${path}.bullets`, (item, itemPath) => readBullet(read, item, itemPath)),
  };
}

function readBullet(read: Reader, value: unknown, path: string): Bullet {
  const fields = read.record(value, path, ["id", "text", "tags", "standard"]);
  return {
    id: read.id(fields.id, `${path}.id`),
    text: read.string(fields.text, `${path}.text`),
    tags: read.array(fields.tags, `${path}.tags`, (item, itemPath) => read.string(item, itemPath)),
    standard: read.boolean(fields.standard, `${path}.standard`),
  };
}

function checkInvariants(data: ResumeData, problems: string[]): void {
  for (const name of duplicates(data.tagVocabulary.map((tag) => tag.name.toLowerCase()))) {
    problems.push(`tags: duplicate Tag "${name}" (names are compared case-insensitively)`);
  }

  for (const id of duplicates(data.summaries.map((summary) => summary.id))) {
    problems.push(`profile.summaries: duplicate summary ID "${id}"`);
  }
  const standardSummaries = data.summaries.filter((summary) => summary.standard).length;
  if (standardSummaries !== 1) {
    problems.push(`profile.summaries: expected exactly one standard summary, found ${standardSummaries}`);
  }

  for (const id of duplicates(data.roles.map((role) => role.id))) {
    problems.push(`roles: duplicate Role ID "${id}"`);
  }
  for (const id of duplicates(data.roles.flatMap((role) => role.bullets.map((bullet) => bullet.id)))) {
    problems.push(`roles: duplicate Bullet ID "${id}"`);
  }

  const tagNames = new Set(data.tagVocabulary.map((tag) => tag.name));
  for (const role of data.roles) {
    if (role.start && role.end !== "present" && role.start > role.end) {
      problems.push(`Role "${role.id}": start ${role.start} is after end ${role.end}`);
    }
    const standardBullets = role.bullets.filter((bullet) => bullet.standard).length;
    if (standardBullets > MAX_STANDARD_BULLETS) {
      problems.push(`Role "${role.id}": ${standardBullets} standard Bullets, at most ${MAX_STANDARD_BULLETS} allowed`);
    }
    for (const bullet of role.bullets) {
      for (const tag of bullet.tags) {
        if (tag && !tagNames.has(tag)) problems.push(`Bullet "${bullet.id}": unknown Tag "${tag}"`);
      }
      for (const tag of duplicates(bullet.tags)) {
        problems.push(`Bullet "${bullet.id}": Tag "${tag}" listed twice`);
      }
    }
  }

  const projects = data.roles.filter((role) => role.kind === "project");
  const standardProjects = projects.filter((project) => project.standard).length;
  if (projects.length > 0 && standardProjects !== 1) {
    problems.push(`roles: expected exactly one standard Project, found ${standardProjects}`);
  }
}

function duplicates(values: string[]): string[] {
  const seen = new Set<string>();
  const repeated = new Set<string>();
  for (const value of values) {
    if (!value) continue;
    if (seen.has(value)) repeated.add(value);
    seen.add(value);
  }
  return [...repeated];
}
