import { resumeData } from "./index.ts";

const bullets = resumeData.roles.reduce((count, role) => count + role.bullets.length, 0);
console.log(
  `Resume data OK: ${resumeData.roles.length} Roles, ${bullets} Bullets, ${resumeData.tagVocabulary.length} Tags`,
);
