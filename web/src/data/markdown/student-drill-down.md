## Project Highlights

- Led the project end-to-end as a solo Full Stack Web Developer, from requirements gathering through production rollout.
- Replaced a slow, multi-screen legacy workflow with a single React interface aggregating data from eight related database tables.
- Implemented role-based access control to surface sensitive billing data only to authorized admin users.

---

## Description

Coaches and administrators needed a fast, reliable way to understand a student’s full history at a glance. In our existing system, this information lived across multiple tables inside QuickBase, requiring users to manually search, filter, and click through several screens just to answer simple questions.

The goal of this project was to replace that workflow with a single, easy-to-use interface that consolidates all student-related data into one place, while still respecting role-based access rules for sensitive information.

The resulting tool supports our entire student base of over 6,000 students with no practical limitations on scale.

---

## Data Aggregation & Architecture

The interface is built in **React** and powered by an **Express API** backend that aggregates student data from QuickBase behind the scenes. Rather than forcing users to navigate database relationships manually, the backend assembles everything into a single, structured response.

At a high level, the API:
- Fetches a base student record
- Conditionally includes billing details for admin users
- Attaches call credits, memberships, and historical enrollment data
- Nests weeks within memberships, and lessons, assignments, and calls within each week

This approach transforms eight related database tables into one cohesive object that the frontend can render cleanly and predictably.

For users, this means faster load times, fewer clicks, and dramatically less cognitive overhead.

---

## Role-Based Access & Permissions

Not all users need access to the same information. Coaches need visibility into student progress and lesson history, while billing staff require additional financial context.

Access control is enforced both on the backend and the frontend:
- **Admins** can view billing email, billing notes, subscription start dates, and create call credit add-ons.
- **Coaches** see all instructional data but are restricted to call credit balances only.
- Sensitive billing fields are never returned by the API for unauthorized users.

This ensures data security while keeping the interface focused and relevant for each role.

---

## User Experience & Workflow Improvements

On load, users can search for students by name or email, with quick-access links to a coach’s current students for faster navigation. Once selected, the interface presents:

- A clear student overview section
- A memberships list with both active and inactive enrollments
- Expandable membership entries revealing weekly lessons, assignments, private calls, and group calls

Inactive memberships are clearly labeled with start and end dates and visual styling to indicate historical status, making it easy to distinguish past and present engagement.

Compared to the old workflow, which required navigating 5–6 separate screens with loading delays in between, this interface delivers everything in one place.

---

## Outcome

- Coaches can quickly assess whether a student is keeping pace in the program.
- Substitute coaches can review past lessons and identify skill gaps before a session begins.
- Admins gain easier visibility into student retention and billing history.
- Reliance on QuickBase for daily operations was significantly reduced, moving the team closer to a fully custom PostgreSQL-backed system.

This tool is used daily by coaches and administrators and has become a core part of our internal workflow, saving time while improving clarity and continuity across lessons.

---

## Demo & Screenshots

[Demo Video](https://youtu.be/xjJKDNb5-GE)
![student membership data at a glance](/articles/student-drill-down/student-membership-data-at-a-glance.png)
![Detailed membership and progress history](/articles/student-drill-down/detailed-membership-and-progress-history.png)
