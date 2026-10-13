import { useMemo, useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { learncraftProjects } from "../data/articles";
import { slugify } from "../utils/slugify";
import LearncraftLogo from "../assets/Learncraft-Logo.png";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const categories = ["All", "Front-End", "Back-End", "CMS & Builders", "CI/CD"];

export function LearncraftSpanishPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return learncraftProjects;
    return learncraftProjects.filter((p) => p.categories.includes(activeCategory));
  }, [activeCategory]);

  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "'Open Sans', sans-serif", backgroundColor: "#fafafa" }}
    >
      {/* ── Hero Section ── */}
      <section className="py-32 px-6" style={{ backgroundColor: "#fafafa" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Text — left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "11px",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "#aaaaaa",
                  marginBottom: "1.25rem",
                }}
              >
                Project Spotlight
              </p>
              <h1
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "clamp(3rem, 5vw, 5.25rem)",
                  fontWeight: 700,
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                  color: "#0a0a0a",
                  marginBottom: "1.5rem",
                }}
              >
                Learncraft{" "}
                <span style={{ fontFamily: "'Bungee', cursive", fontWeight: 400 }}>
                  Spanish.
                </span>
              </h1>
              <p
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  color: "#555555",
                  marginBottom: "1.5rem",
                  maxWidth: "32rem",
                }}
              >
                Crafted intentional digital experiences for Learncraft Spanish,
                highlighting their language curriculum through a clean, confident
                interface and clearer educational messaging.
              </p>

              {/* Callout note */}
              <div
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "14px",
                  border: "1px solid #ebebeb",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.05), 0 1px 4px rgba(0,0,0,0.04)",
                  padding: "1.25rem 1.5rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "0.875rem",
                    color: "#666666",
                    lineHeight: 1.65,
                  }}
                >
                  Focused on modular components so that new lesson modules,
                  stories, and community highlights can be introduced without a
                  full redesign.
                </p>
              </div>
            </motion.div>

            {/* Logo — right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "14px",
                  border: "1px solid #ebebeb",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
                  padding: "3rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={LearncraftLogo}
                  alt="Learncraft Spanish logo"
                  style={{ width: "16rem", height: "16rem", objectFit: "contain" }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── What I Delivered ── */}
      <section className="py-32 px-6" style={{ backgroundColor: "#f7f7f7" }}>
        <div className="max-w-7xl mx-auto">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
            style={{ borderBottom: "1px solid #e5e5e5", paddingBottom: "2rem" }}
          >
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#aaaaaa",
                marginBottom: "1rem",
              }}
            >
              Scope of Work
            </p>
            <h2
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 700,
                color: "#0a0a0a",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              What I{" "}
              <span style={{ fontFamily: "'Bungee', cursive", fontWeight: 400 }}>
                Delivered.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "1rem",
              lineHeight: 1.75,
              color: "#555555",
              marginBottom: "2.5rem",
              maxWidth: "48rem",
            }}
          >
            Partnered with the Learncraft team to audit their existing course
            pages, documenting accessibility gaps, performance blockers, and
            content hierarchy inconsistencies. From there, I prototyped a
            refreshed visual system, then implemented the new experience using a
            component-driven approach so the marketing team could mix and match
            callouts without engineering involvement.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Design system stewardship",
                body: "Unified spacing, typography, and illustration usage to keep the brand bold yet playful across the site.",
              },
              {
                title: "Performance tuning",
                body: "Introduced image optimization strategies, preloading critical assets, and lazy-loaded lesson videos.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -6 }}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "14px",
                  border: "1px solid #ebebeb",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.05), 0 1px 4px rgba(0,0,0,0.04)",
                  padding: "1.5rem",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "#0a0a0a",
                    letterSpacing: "-0.01em",
                    marginBottom: "0.75rem",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "0.875rem",
                    color: "#666666",
                    lineHeight: 1.65,
                  }}
                >
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Articles / Project Grid ── */}
      <section className="py-32 px-6" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
            style={{ borderBottom: "1px solid #e5e5e5", paddingBottom: "2rem" }}
          >
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#aaaaaa",
                marginBottom: "1rem",
              }}
            >
              Articles & Categories
            </p>
            <h2
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 700,
                color: "#0a0a0a",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                marginBottom: "1rem",
              }}
            >
              Review work by{" "}
              <span style={{ fontFamily: "'Bungee', cursive", fontWeight: 400 }}>
                category.
              </span>
            </h2>
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "0.9rem",
                color: "#666666",
                lineHeight: 1.65,
              }}
            >
              Toggle between Front-End, Back-End, CI/CD, and Public Website
              builds to understand where I focused for each milestone.
            </p>
          </motion.div>

          {/* Category filter pills */}
          <div className="flex flex-wrap gap-3" style={{ marginBottom: "3rem" }}>
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "11px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  padding: "8px 18px",
                  borderRadius: "9999px",
                  border: activeCategory === category
                    ? "1px solid #111111"
                    : "1px solid #e5e5e5",
                  backgroundColor: activeCategory === category ? "#111111" : "#ffffff",
                  color: activeCategory === category ? "#ffffff" : "#666666",
                  cursor: "pointer",
                  transition: "all 0.18s ease",
                }}
                onMouseEnter={(e) => {
                  if (activeCategory !== category) {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "#aaaaaa";
                    (e.currentTarget as HTMLButtonElement).style.color = "#333333";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeCategory !== category) {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "#e5e5e5";
                    (e.currentTarget as HTMLButtonElement).style.color = "#666666";
                  }
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Project cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => {
              const projectSlug = slugify(project.title);
              return (
                <Link
                  key={project.title}
                  to={`/portfolio/${projectSlug}`}
                  style={{ textDecoration: "none" }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -6 }}
                    className="group"
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: "14px",
                      backgroundColor: "#ffffff",
                      border: "1px solid #ebebeb",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.05), 0 1px 4px rgba(0,0,0,0.04)",
                      cursor: "pointer",
                    }}
                  >
                    <div style={{ position: "relative", height: "260px", overflow: "hidden" }}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                        style={{ height: "100%" }}
                      >
                        <ImageWithFallback
                          src={project.image}
                          alt={`${project.title} preview`}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 60%)",
                        }}
                      />
                    </div>

                    <div className="p-6">
                      <div className="flex flex-wrap gap-2" style={{ marginBottom: "0.75rem" }}>
                        {project.categories.map((category) => (
                          <span
                            key={category}
                            style={{
                              fontFamily: "'Open Sans', sans-serif",
                              fontSize: "10px",
                              letterSpacing: "0.12em",
                              textTransform: "uppercase",
                              fontWeight: 600,
                              padding: "4px 12px",
                              backgroundColor: "#f0f0f0",
                              color: "#555555",
                              borderRadius: "9999px",
                            }}
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                      <h3
                        style={{
                          fontFamily: "'Open Sans', sans-serif",
                          fontSize: "1.25rem",
                          fontWeight: 700,
                          color: "#0a0a0a",
                          marginBottom: "0.5rem",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {project.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "'Open Sans', sans-serif",
                          fontSize: "0.875rem",
                          color: "#666666",
                          lineHeight: 1.65,
                        }}
                      >
                        {project.description}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "14px",
                border: "1px solid #ebebeb",
                padding: "2rem",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "0.875rem",
                  color: "#888888",
                }}
              >
                Nothing here yet — check back when more Learncraft Spanish
                stories are ready.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
