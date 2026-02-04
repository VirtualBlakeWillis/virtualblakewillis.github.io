## Project Highlights

- Led the end-to-end development of an internal admin dashboard as a solo Full Stack Web Developer, collaborating closely with admin stakeholders.
- Consolidated 10 frequently used operational reports into a single, easy-to-navigate interface.
- Significantly improved performance and reduced reliance on QuickBase through backend data aggregation and optimized loading strategies.

---

## Description

Admins and team leads rely on operational data to track coach performance, student load, and overall program health. Previously, this information lived across multiple reports and tables in QuickBase, requiring frequent context switching, manual searching, and long load times.

The goal of this project was to centralize the most commonly used reports into a single internal dashboard, giving admins and team leads fast access to the metrics they rely on daily and weekly, without needing to navigate QuickBase at all.

---

## Data Aggregation & Architecture

The dashboard is built with **React** and powered by an **Express API** backed by QuickBase. While the frontend focuses purely on display and interaction, all heavy data processing happens on the backend.

I created new API endpoints that pre-aggregate data from multiple tables into report-ready responses. In total, the dashboard replaces 10 separate QuickBase reports that were previously scattered across different database tables and interfaces.

To optimize performance:
- Four high-traffic reports are fetched before initial render
- Six additional reports load in the background after page load

Even with this approach, the full dashboard loads faster than rendering a single report in QuickBase, resulting in a major usability improvement.

---

## Report Design & Interaction

Reports are presented as a grid of collapsed panels, each labeled by title for quick scanning. Clicking a panel expands the report inline, keeping the interface clean while allowing users to focus on the data they need.

Several reports also support drill-down views:
- **Calls by coach** → clicking a coach reveals all calls from the past month
- **Salaried students by coach** → clicking a coach shows associated students, membership types, and enrollment dates

All reports are read-only, with interactions focused on exploration rather than editing.

---

## Key Reports & Use Cases

The dashboard includes the following consolidated reports:
- **Weekly Coach Summary (current & previous week):**
  Displays total records required and completion percentages per coach, allowing admins and team leads to quickly verify whether record keeping is up to date.
- Group & Private Calls by Coach
  Shows call counts over the past month, enabling the billing team to reconcile timesheets with actual call records.

- **Current Students by Salaried Coach (now & two weeks out):**
  Provides visibility into upcoming weekly call hours, making it easy to spot coaches at risk of losing students and rebalance workloads.

- **Active Memberships:**
  A snapshot of current paid memberships, serving as a quick health check of overall student load.

- **Dropouts by Membership:**
  Tracks recent membership endings by category, helping identify trends or sudden increases in churn.

- **Assignments Completed by Week:**
  Shows average assignment completion rates by membership level, making it easy to assess student engagement.

- **Recent Lesson 200 Students:**
  Identifies students who have reached or passed lesson 200, supporting targeted outreach for video testimonials.

---

## Outcome

- Admins and team leads now have a single source of truth for operational metrics.
- Daily and weekly decision-making is faster and more informed.
- Reliance on QuickBase for day-to-day reporting has been significantly reduced, with only edge-case tasks remaining.
- The dashboard supports staffing adjustments, billing validation, and program health monitoring with minimal friction.

This project is part of a broader initiative to migrate away from QuickBase and toward a fully custom, PostgreSQL-backed system, while immediately improving visibility and performance for internal teams.

---

## Screenshots

![Recent lesson 200 students for testimonial outread](/articles/admin-dashboard/standalone-report.png)
![Expanded report with report drilldown](/articles/admin-dashboard/report-with-drilldown-table.png)
