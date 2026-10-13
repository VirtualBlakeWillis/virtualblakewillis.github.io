export type TagKind = "technology" | "skill";

export interface Tag {
  name: string;
  kind: TagKind;
}

/** A month written as "YYYY-MM". */
export type YearMonth = string;

export interface Bullet {
  id: string;
  text: string;
  /** Names of Tags from the Tag Vocabulary. */
  tags: string[];
  /** Shown on the Standard Resume. */
  standard: boolean;
}

export interface JobRole {
  kind: "job";
  id: string;
  title: string;
  employer: string;
  location: string;
  start: YearMonth;
  end: YearMonth | "present";
  bullets: Bullet[];
}

export interface ProjectRole {
  kind: "project";
  id: string;
  name: string;
  title: string;
  start?: YearMonth;
  end: YearMonth | "present";
  /** The one Project shown on the Standard Resume. */
  standard: boolean;
  bullets: Bullet[];
}

export type Role = JobRole | ProjectRole;

export interface Link {
  text: string;
  url: string;
}

export interface Header {
  name: string;
  headline: string;
  email: string;
  location: string;
  links: Link[];
}

export interface Summary {
  id: string;
  text: string;
  /** The summary used when a selection doesn't name one. */
  standard: boolean;
}

export interface Education {
  school: string;
  credential: string;
  field: string;
  end: YearMonth;
}

export interface ResumeData {
  header: Header;
  summaries: Summary[];
  education: Education[];
  tagVocabulary: Tag[];
  roles: Role[];
}

export interface RoleSelection {
  roleId: string;
  /** In display order. */
  bulletIds: string[];
}

export interface ResumeSelection {
  /** Defaults to the standard summary. */
  summaryId?: string;
  /** Every job Role, exactly once. */
  roles: RoleSelection[];
  project?: RoleSelection;
}

export interface RoleSection<R extends Role> {
  role: R;
  bullets: Bullet[];
}

export interface Resume {
  header: Header;
  summary: Summary;
  /** Reverse chronological. */
  roles: RoleSection<JobRole>[];
  project?: RoleSection<ProjectRole>;
  coreSkills: Tag[];
  education: Education[];
}
