# Resume Tailor

An interactive tool on Blake's portfolio site that turns a job input into a tailored resume by selecting from Blake's pre-written bullets. The AI selects; it never writes resume text.

## Resume content

**Role**:
One position held at one employer over a date range, e.g. "Junior JavaScript Engineer at LearnCraft Spanish". Two titles at the same employer are two Roles.
_Avoid_: Category, job, experience, position

**Project**:
A self-directed or side piece of work shown in its own smaller section below the Roles. A Tailored Resume shows at most one; the section is absent if no Projects exist.
_Avoid_: Portfolio item

**Bullet**:
A single pre-written accomplishment statement belonging to exactly one Role or Project, tagged with the Tags it demonstrates. Bullets are never reworded by the tool.
_Avoid_: Bullet point, line item, achievement

**Bullet Library**:
The full set of Bullets across all Roles and Projects, larger than any single resume would show.
_Avoid_: Bullet bank, pool

**Core Skills**:
The resume section listing Tags from the Tag Vocabulary. On a Tailored Resume, Matched Tags are listed first; Tags outside the Tag Vocabulary never appear here.
_Avoid_: Skills list, skills section

## Tags

**Tag**:
A named Technology or Skill. Tags on Bullets always come from the Tag Vocabulary; Tags in a Job Analysis usually do.
_Avoid_: Keyword, label

**Technology**:
A Tag naming a concrete tool, language, platform, or service, e.g. React, Firebase, Webflow.
_Avoid_: Tech stack item, tool

**Skill**:
A Tag naming a capability independent of any specific tool, e.g. frontend design, CMS management, stakeholder communication.
_Avoid_: Competency, ability

**Tag Vocabulary**:
The single closed list of every Tag Blake can claim. Every Bullet's Tags come from it.
_Avoid_: Taxonomy, tag list

## Tailoring

**Job Input**:
Whatever the visitor provides to tailor against: a job title, a project description, or a pasted job description.
_Avoid_: Query, prompt, job posting

**Job Analysis**:
A one-paragraph reading of a Job Input describing the skills it calls for, plus a required list of Tags it calls for. The list should draw from the Tag Vocabulary but may include Tags outside it.
_Avoid_: Sentiment analysis, Skill Profile, job summary

**Matched Tag**:
A Tag listed in a Job Analysis, whether or not it is in the Tag Vocabulary. Matched Tags are the only part of the Job Analysis a visitor sees.
_Avoid_: Detected skill, job tag

**Selection Round**:
One pass in which the classifier picks the single best-matching remaining Bullet for a Role. Each Role gets three Selection Rounds; the winner of each round is removed from the options for the next, so the order of picks is the ranking.
_Avoid_: Tournament, pass, iteration

**Tailored Resume**:
The result of tailoring: every Role (with title and dates) and up to one Project, each showing its best-matching Bullets in ranked order.
_Avoid_: Custom resume, generated resume

**Standard Resume**:
The untailored resume shown before any Job Input is given, and in place of a Tailored Resume when tailoring fails or finds no usable overlap. It has the same shape as a Tailored Resume, built from Bullets Blake marks as standard.
_Avoid_: Default resume, base resume, generic resume

**Resume PDF**:
The single downloadable form of a Tailored Resume, laid out to be both readable by people and parseable by applicant tracking systems.
_Avoid_: Human copy, machine copy, ATS version
