import { describe, expect, it } from "vitest";
import { rawFixture } from "./fixture.test-helper.ts";
import { InvalidSelectionError, buildResume, buildStandardResume, standardSelection } from "./resume.ts";
import { parseResumeData } from "./validate.ts";

const data = parseResumeData(rawFixture());

describe("standardSelection", () => {
  it("picks every job Role and the standard Project with their standard Bullets", () => {
    expect(standardSelection(data)).toEqual({
      summaryId: "general",
      roles: [
        { roleId: "older-job", bulletIds: ["older-1"] },
        { roleId: "current-job", bulletIds: ["current-1", "current-2", "current-4"] },
      ],
      project: { roleId: "side-project", bulletIds: ["side-1"] },
    });
  });

  it("omits the Project when there are none", () => {
    const raw = rawFixture();
    raw.roles = raw.roles.filter((role) => role.kind === "job");
    expect(standardSelection(parseResumeData(raw))).not.toHaveProperty("project");
  });
});

describe("buildStandardResume", () => {
  it("lists Roles in reverse chronological order with resolved Bullets", () => {
    const resume = buildStandardResume(data);
    expect(resume.roles.map((section) => section.role.id)).toEqual(["current-job", "older-job"]);
    expect(resume.roles[0].bullets.map((bullet) => bullet.text)).toEqual(["Built it.", "Typed it.", "Shipped it."]);
    expect(resume.project?.role.name).toBe("Side Project");
    expect(resume.summary.text).toBe("A summary.");
    expect(resume.coreSkills).toEqual(data.tagVocabulary);
    expect(resume.education).toEqual(data.education);
  });

  it("builds from the real Bullet Library by default", () => {
    const resume = buildStandardResume();
    expect(resume.roles.map((section) => section.role.id)).toEqual([
      "learncraft-full-stack",
      "learncraft-junior-js",
      "vail-snowboard-instructor",
    ]);
    expect(resume.project?.role.id).toBe("techlahoma-check-in");
  });
});

describe("buildResume", () => {
  const roles = [
    { roleId: "older-job", bulletIds: ["older-2", "older-1"] },
    { roleId: "current-job", bulletIds: ["current-3"] },
  ];

  it("keeps the given Bullet order and a chosen summary", () => {
    const resume = buildResume({ roles, project: { roleId: "other-project", bulletIds: ["other-1"] } }, data);
    expect(resume.roles[1].bullets.map((bullet) => bullet.id)).toEqual(["older-2", "older-1"]);
    expect(resume.project?.role.id).toBe("other-project");
    expect(resume.summary.id).toBe("general");
  });

  it.each([
    ["an unknown Role", { roles: [...roles, { roleId: "nope", bulletIds: [] }] }, `Unknown Role "nope"`],
    [
      "an unknown Bullet",
      { roles: [roles[0], { roleId: "current-job", bulletIds: ["nope"] }] },
      `Unknown Bullet "nope"`,
    ],
    [
      "a Bullet from another Role",
      { roles: [roles[0], { roleId: "current-job", bulletIds: ["older-1"] }] },
      `Bullet "older-1" belongs to "older-job", not "current-job"`,
    ],
    [
      "a repeated Bullet",
      { roles: [roles[0], { roleId: "current-job", bulletIds: ["current-1", "current-1"] }] },
      `Bullet "current-1" selected twice`,
    ],
    ["a missing job Role", { roles: [roles[0]] }, `Role "current-job" must be selected exactly once, found 0`],
    ["a repeated job Role", { roles: [...roles, roles[0]] }, `Role "older-job" must be selected exactly once, found 2`],
    [
      "a Project in place of a job Role",
      { roles: [...roles, { roleId: "side-project", bulletIds: [] }] },
      `"side-project" is a Project, not a job Role`,
    ],
    [
      "a job Role in place of the Project",
      { roles, project: { roleId: "older-job", bulletIds: [] } },
      `"older-job" is a job Role, not a Project`,
    ],
    ["an unknown summary", { roles, summaryId: "nope" }, `Unknown summary "nope"`],
  ])("rejects %s", (_name, selection, message) => {
    expect(() => buildResume(selection, data)).toThrow(new InvalidSelectionError(message));
  });
});
