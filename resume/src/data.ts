import profile from "../data/profile.json" with { type: "json" };
import roles from "../data/roles.json" with { type: "json" };
import tags from "../data/tags.json" with { type: "json" };
import type { ResumeData } from "./types.ts";
import { parseResumeData } from "./validate.ts";

/** The validated Bullet Library, Tag Vocabulary, and fixed sections. Importing this throws if the data is invalid. */
export const resumeData: ResumeData = parseResumeData({ profile, tags, roles });
