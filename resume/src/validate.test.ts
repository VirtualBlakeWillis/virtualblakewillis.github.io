import { describe, expect, it } from "vitest";
import profile from "../data/profile.json" with { type: "json" };
import roles from "../data/roles.json" with { type: "json" };
import tags from "../data/tags.json" with { type: "json" };
import { rawFixture } from "./fixture.test-helper.ts";
import { ResumeDataError, parseResumeData, type RawResumeData } from "./validate.ts";

function problemsFor(raw: RawResumeData): string[] {
  try {
    parseResumeData(raw);
  } catch (error) {
    if (error instanceof ResumeDataError) return error.problems;
    throw error;
  }
  throw new Error("expected parseResumeData to throw");
}

describe("parseResumeData", () => {
  it("accepts the seed data in resume/data", () => {
    expect(() => parseResumeData({ profile, tags, roles })).not.toThrow();
  });

  it("accepts a valid fixture and returns it typed", () => {
    const data = parseResumeData(rawFixture());
    expect(data.roles.map((role) => role.id)).toEqual(["older-job", "current-job", "side-project", "other-project"]);
    expect(data.tagVocabulary).toContainEqual({ name: "React", kind: "technology" });
  });

  it("rejects a Bullet Tag that isn't in the Tag Vocabulary", () => {
    const raw = rawFixture();
    raw.roles[0].bullets[0].tags = ["Debugging", "Reakt"];
    expect(problemsFor(raw)).toEqual([`Bullet "older-1": unknown Tag "Reakt"`]);
  });

  it("matches Tags case-sensitively", () => {
    const raw = rawFixture();
    raw.roles[0].bullets[0].tags = ["react"];
    expect(problemsFor(raw)).toEqual([`Bullet "older-1": unknown Tag "react"`]);
  });

  it("rejects duplicate Bullet IDs across Roles", () => {
    const raw = rawFixture();
    raw.roles[1].bullets[0].id = "older-1";
    expect(problemsFor(raw)).toEqual([`roles: duplicate Bullet ID "older-1"`]);
  });

  it("rejects duplicate Role IDs", () => {
    const raw = rawFixture();
    raw.roles[1].id = "older-job";
    expect(problemsFor(raw)).toEqual([`roles: duplicate Role ID "older-job"`]);
  });

  it("rejects duplicate Tags regardless of case", () => {
    const raw = rawFixture();
    raw.tags.push({ name: "react", kind: "technology" });
    expect(problemsFor(raw)).toEqual([`tags: duplicate Tag "react" (names are compared case-insensitively)`]);
  });

  it("rejects more than three standard Bullets on a Role", () => {
    const raw = rawFixture();
    raw.roles[1].bullets[2].standard = true;
    expect(problemsFor(raw)).toEqual([`Role "current-job": 4 standard Bullets, at most 3 allowed`]);
  });

  it("requires exactly one standard Project when Projects exist", () => {
    const none = rawFixture();
    none.roles[2].standard = false;
    expect(problemsFor(none)).toEqual(["roles: expected exactly one standard Project, found 0"]);

    const two = rawFixture();
    two.roles[3].standard = true;
    expect(problemsFor(two)).toEqual(["roles: expected exactly one standard Project, found 2"]);
  });

  it("allows having no Projects at all", () => {
    const raw = rawFixture();
    raw.roles = raw.roles.filter((role) => role.kind === "job");
    expect(() => parseResumeData(raw)).not.toThrow();
  });

  it("requires exactly one standard summary", () => {
    const raw = rawFixture();
    raw.profile.summaries.push({ id: "other", text: "Another summary.", standard: true });
    expect(problemsFor(raw)).toEqual(["profile.summaries: expected exactly one standard summary, found 2"]);
  });

  it("reports malformed fields with their paths", () => {
    const raw = rawFixture();
    raw.roles[0].start = "2022-13";
    raw.roles[0].standart = true;
    raw.tags[0].kind = "framework";
    expect(problemsFor(raw)).toEqual([
      `tags[0].kind: expected one of "technology", "skill"`,
      `roles[0]: unknown field "standart"`,
      `roles[0].start: "2022-13" is not a "YYYY-MM" month`,
    ]);
  });

  it("rejects a start date after the end date", () => {
    const raw = rawFixture();
    raw.roles[0].start = "2024-01";
    expect(problemsFor(raw)).toEqual([`Role "older-job": start 2024-01 is after end 2023-06`]);
  });

  it("reports every problem at once", () => {
    const raw = rawFixture();
    raw.roles[0].bullets[0].tags = ["Nope"];
    raw.roles[1].bullets[0].id = "older-2";
    const error = (() => {
      try {
        parseResumeData(raw);
      } catch (caught) {
        return caught;
      }
    })();
    expect(error).toBeInstanceOf(ResumeDataError);
    expect((error as ResumeDataError).message).toContain(`unknown Tag "Nope"`);
    expect((error as ResumeDataError).message).toContain(`duplicate Bullet ID "older-2"`);
  });
});
