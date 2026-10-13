interface FixtureRole {
  kind: string;
  id: string;
  start?: string;
  standard?: boolean;
  bullets: { id: string; text: string; tags: string[]; standard: boolean }[];
  [field: string]: unknown;
}

/** A small valid data set. Each call returns a fresh copy that tests may mutate. */
export function rawFixture() {
  const profile = {
    header: {
      name: "Test Person",
      headline: "Engineer",
      email: "test@example.com",
      phone: "(555) 555-5555",
      location: "Tulsa, OK",
      links: [{ text: "example.com", url: "https://example.com" }],
    },
    summaries: [{ id: "general", text: "A summary.", standard: true }],
    education: [{ school: "A School", credential: "Diploma", field: "Things", end: "2024-04" }],
  };
  const tags: { name: string; kind: string }[] = [
    { name: "React", kind: "technology" },
    { name: "TypeScript", kind: "technology" },
    { name: "Debugging", kind: "skill" },
  ];
  const roles: FixtureRole[] = [
    {
      kind: "job",
      id: "older-job",
      title: "Junior Engineer",
      employer: "Acme",
      location: "Tulsa, OK",
      start: "2022-01",
      end: "2023-06",
      bullets: [
        { id: "older-1", text: "Did a thing.", tags: ["Debugging"], standard: true },
        { id: "older-2", text: "Did another thing.", tags: [], standard: false },
      ],
    },
    {
      kind: "job",
      id: "current-job",
      title: "Engineer",
      employer: "Acme",
      location: "Tulsa, OK",
      start: "2023-07",
      end: "present",
      bullets: [
        { id: "current-1", text: "Built it.", tags: ["React"], standard: true },
        { id: "current-2", text: "Typed it.", tags: ["TypeScript"], standard: true },
        { id: "current-3", text: "Fixed it.", tags: ["Debugging"], standard: false },
        { id: "current-4", text: "Shipped it.", tags: [], standard: true },
      ],
    },
    {
      kind: "project",
      id: "side-project",
      name: "Side Project",
      title: "Developer",
      end: "present",
      standard: true,
      bullets: [
        { id: "side-1", text: "Made it.", tags: ["React"], standard: true },
        { id: "side-2", text: "Tested it.", tags: [], standard: false },
      ],
    },
    {
      kind: "project",
      id: "other-project",
      name: "Other Project",
      title: "Developer",
      start: "2021-01",
      end: "2021-05",
      standard: false,
      bullets: [{ id: "other-1", text: "Tried it.", tags: [], standard: true }],
    },
  ];
  return { profile, tags, roles };
}
