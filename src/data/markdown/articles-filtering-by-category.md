
## Project Highlights

- Owned the project end-to-end, from initial concept through production release.
- Designed and implemented a CMS-driven article and category system, including documentation and hands-on training for a non-technical content team.
- Integrated a proven third-party filtering library (Finsweet CMS Filter) to ship a stable, user-friendly solution on a tight timeline.

---

## Description

As our founder expanded the company’s customer acquisition funnel, we began publishing written articles alongside YouTube videos to capture additional traffic and leads. While articles existed in multiple categories, there was no centralized place on the site where users could browse or discover them easily.

The goal was to create a dedicated Articles page that allowed users to quickly filter content by category, while also setting up a publishing workflow that didn’t require ongoing involvement from the engineering team.

---

## CMS Architecture

I designed and built two new Webflow CMS collections: **Articles** and **Categories**. Each article references a single category through a select field, creating a simple but scalable relationship that powers the filtering logic.

These CMS items were used in two ways:
- **Dynamic article pages**, generated automatically from CMS data
- **Article cards** on the Articles page, allowing users to browse and navigate directly to individual articles

This was the first time our site used CMS content both as dynamic pages *and* as reusable, filterable UI components.

![Screenshot of CMS settings for Article and Category collections](/articles/articles-filtering-by-category/cms-config.png)

---

## Filtering Implementation

Filtering is handled entirely on the client side using **Finsweet CMS Filter**, a widely adopted Webflow library. Rather than building and maintaining custom filtering logic, I chose a proven third-party solution to reduce risk and accelerate delivery.

This decision allowed us to:
- Meet a tight deadline
- Avoid unnecessary custom code
- Deliver a stable, predictable user experience
- Keep the system easy to maintain for future updates

---

## Training & Handoff

To ensure the system could be used independently, I created a short tutorial video demonstrating how to create and publish articles using the Webflow CMS. I shared this with the 2–3 person content team and made myself available for follow-up questions and support.

After onboarding, the team was able to fully self-serve article creation and publishing without developer involvement.

---

## Outcome

- A clean, easy-to-use publishing portal for internal teams
- A fast, intuitive article discovery experience for users
- Content publishing fully decoupled from the engineering team, significantly shortening the deployment pipeline for new articles

