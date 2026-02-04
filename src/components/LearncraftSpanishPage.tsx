import { useMemo, useState } from "react";
import { Link } from "react-router";
import { learncraftProjects } from "../data/articles";
import { slugify } from "../utils/slugify";
import LearncraftLogo from "../assets/Learncraft-Logo.png";

const categories = ["All", "Front-End", "Back-End", "CMS & Builders", "CI/CD",];

export function LearncraftSpanishPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return learncraftProjects;
    }
    return learncraftProjects.filter((project) => project.categories.includes(activeCategory));
  }, [activeCategory]);

  return (
    <div className="learncraft-page">
      <section className="hero-section py-16 px-6 pt-24">
        <div className="max-w-6xl mx-auto flex flex-col gap-12 md:flex-row md:items-center">
          <div className="space-y-6 md:flex-1">
            {/* <p className="text-sm uppercase tracking-[0.4em] text-slate-500">Project Spotlight</p> */}
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Learncraft Spanish</h1>
            <p className="text-lg text-slate-600">
              Crafted intentional digital experiences for Learncraft Spanish, highlighting their language curriculum
              through a clean, confident interface and clearer educational messaging.
            </p>
            <div className="rounded-lg bg-slate-100 px-5 py-4 shadow-inner">
              <p className="text-sm text-slate-700">
                Focused on modular components so that new lesson modules, stories, and community highlights can be
                introduced without a full redesign.
              </p>
            </div>
          </div>
          <div className="hero-image md:flex-1">
            <div className="rounded-3xl bg-white p-6 shadow-lg ring-1 ring-slate-200 flex items-center justify-center">
              <img
                src={LearncraftLogo}
                alt="Learncraft Spanish logo placeholder"
                className="h-64 w-64"
              />
           
            </div>
          </div>
        </div>
      </section>

      <section className="work-details py-16 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto space-y-8">
          <div>
            <h2 className="text-3xl font-semibold">What I Delivered</h2>
            <p className="mt-4 text-lg text-slate-600">
              Partnered with the Learncraft team to audit their existing course pages, documenting accessibility gaps,
              performance blockers, and content hierarchy inconsistencies. From there, I prototyped a refreshed visual
              system, then implemented the new experience using a component-driven approach so the marketing team could
              mix and match callouts without engineering involvement.
            </p>
          </div>
          <ul className="grid gap-6 md:grid-cols-2">
            <li className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
              <h3 className="text-xl font-medium">Design system stewardship</h3>
              <p className="mt-2 text-slate-500">
                Unified spacing, typography, and illustration usage to keep the brand bold yet playful across the site.
              </p>
            </li>
            <li className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
              <h3 className="text-xl font-medium">Performance tuning</h3>
              <p className="mt-2 text-slate-500">
                Introduced image optimization strategies, preloading critical assets, and lazy-loaded lesson videos.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="articles-section py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-10">
          <header>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Articles & Categories</p>
            <h2 className="mt-3 text-3xl font-bold">Review work by category</h2>
            <p className="mt-2 text-slate-600">
              Toggle between Front-End, Back-End, CI/CD, and Public Website builds to understand where I focused for each
              milestone.
            </p>
          </header>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  activeCategory === category
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="projects-grid grid gap-8 md:grid-cols-2">
            {filteredProjects.map((project) => {
              const projectSlug = slugify(project.title);
              return (
                <Link
                  key={project.title}
                  to={`/portfolio/${projectSlug}`}
                  data-category={project.categories[0].toLowerCase().replace(/\s+/g, "-")}
                  className="group rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl block"
                >
                  <article>
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="h-60 w-full rounded-t-3xl object-cover"
                    />
                    <div className="p-6 space-y-3">
                      <p className="text-xs uppercase tracking-[0.4em] text-slate-400">{project.categories.join(", ")}</p>
                      <h3 className="text-2xl font-semibold">{project.title}</h3>
                      <p className="text-slate-600">{project.description}</p>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>

          {filteredProjects.length === 0 && (
            <p className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-center text-slate-500">
              Nothing here yet—check back when more Learncraft Spanish stories are ready.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}