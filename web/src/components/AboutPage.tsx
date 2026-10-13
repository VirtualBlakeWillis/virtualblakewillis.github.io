import { motion } from "motion/react";
import {
  Database,
  Globe,
  Terminal,
  Workflow,
  ArrowRight,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import BlakePortfolioPic from "../assets/Blake-Portfolio-Pic.jpeg";
import { Link } from "react-router";

export function AboutPage() {
  const skills = [
    {
      category: "Frontend",
      icon: Globe,
      items: ["React", "TypeScript", "Vite", "Tailwind CSS", "SCSS", "TanStack"],
    },
    {
      category: "Backend",
      icon: Terminal,
      items: ["Node.js", "Express", "Rest APIs", "Zod", "Auth0"],
    },
    {
      category: "Database",
      icon: Database,
      items: ["PostgreSQL", "MongoDB", "QuickBase", "MySQL", "Firebase"],
    },
    {
      category: "Tools & More",
      icon: Workflow,
      items: ["Git", "CI/CD", "Testing", "Sentry", "Netlify"],
    },
  ];

  const timeline = [
    {
      year: "2025",
      title: "Full Stack Web Developer",
      company: "LearnCraft Spanish",
      description:
        "With a split focus on delivering features for customers and optimizing internal processes, I've been able to contribute to the growth of LearnCraft Spanish.",
    },
    {
      year: "2024",
      title: "Junior Javascript Engineer",
      company: "LearnCraft Spanish",
      description:
        "Started my professional journey as a Javascript Engineer, learning the ropes and building LearnCraft Spanish into a sustainable tech product.",
    },
  ];

  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "'Open Sans', sans-serif", backgroundColor: "#fafafa" }}
    >
      {/* ── Intro Section ── */}
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
                About
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
                Hey, I'm{" "}
                <span style={{ fontFamily: "'Bungee', cursive", fontWeight: 400 }}>
                  Blake.
                </span>
              </h1>
              <p
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  color: "#555555",
                  marginBottom: "1.25rem",
                  maxWidth: "32rem",
                }}
              >
                I'm a full stack developer based in Tulsa, OK. I've had the
                opportunity to work on a diverse range of projects, from startup
                environments to local non-profits. I'm a quick learner and a
                high-impact contributor.
              </p>
              <p
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  color: "#555555",
                  marginBottom: "2rem",
                  maxWidth: "32rem",
                }}
              >
                I specialize in translating business needs into elegant,
                functional, and user-friendly web applications. If you can dream
                it, I can build it.
              </p>
              <div className="flex items-center gap-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2"
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "11px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    padding: "12px 28px",
                    backgroundColor: "#111111",
                    color: "#ffffff",
                    borderRadius: "9999px",
                    textDecoration: "none",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#333333";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#111111";
                  }}
                >
                  Get In Touch
                  <ArrowRight size={14} />
                </Link>
                <Link
                  to="/portfolio"
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "11px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    color: "#888888",
                    textDecoration: "none",
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#0a0a0a";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#888888";
                  }}
                >
                  View Work
                </Link>
              </div>
            </motion.div>

            {/* Photo — right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                style={{
                  borderRadius: "14px",
                  overflow: "hidden",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithFallback
                  src={BlakePortfolioPic}
                  alt="Professional portrait of Blake Willis"
                  className="w-full h-[500px] object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Skills Section ── */}
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
              Skills & Expertise
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
              Technologies I{" "}
              <span style={{ fontFamily: "'Bungee', cursive", fontWeight: 400 }}>
                work with.
              </span>
            </h2>
          </motion.div>

          {/* Skill cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "14px",
                  border: "1px solid #ebebeb",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.05), 0 1px 4px rgba(0,0,0,0.04)",
                  padding: "1.5rem",
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "48px",
                    height: "48px",
                    backgroundColor: "#f0f0f0",
                    borderRadius: "10px",
                    marginBottom: "1.25rem",
                    color: "#555555",
                  }}
                >
                  <skill.icon size={22} />
                </div>

                <h3
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "#0a0a0a",
                    letterSpacing: "-0.01em",
                    marginBottom: "1rem",
                  }}
                >
                  {skill.category}
                </h3>

                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {skill.items.map((item, itemIndex) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1 + itemIndex * 0.05,
                      }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontFamily: "'Open Sans', sans-serif",
                        fontSize: "0.875rem",
                        color: "#666666",
                        lineHeight: 1.65,
                        paddingBottom: "0.35rem",
                      }}
                    >
                      <span
                        style={{
                          width: "5px",
                          height: "5px",
                          borderRadius: "9999px",
                          backgroundColor: "#cccccc",
                          flexShrink: 0,
                        }}
                      />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Experience Timeline ── */}
      <section className="py-32 px-6" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-4xl mx-auto">

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
              Experience
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
              My professional{" "}
              <span style={{ fontFamily: "'Bungee', cursive", fontWeight: 400 }}>
                journey.
              </span>
            </h2>
          </motion.div>

          {/* Timeline entries */}
          <div style={{ position: "relative" }}>
            {/* Vertical line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              style={{
                position: "absolute",
                left: "1.5rem",
                top: 0,
                bottom: 0,
                width: "1px",
                backgroundColor: "#e5e5e5",
                transformOrigin: "top",
              }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  style={{ position: "relative", paddingLeft: "4.5rem" }}
                >
                  {/* Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.2 }}
                    style={{
                      position: "absolute",
                      left: "calc(1.5rem - 5px)",
                      top: "1.5rem",
                      width: "11px",
                      height: "11px",
                      borderRadius: "9999px",
                      backgroundColor: "#111111",
                      border: "2px solid #ffffff",
                      boxShadow: "0 0 0 1px #e5e5e5",
                    }}
                  />

                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      backgroundColor: "#ffffff",
                      borderRadius: "14px",
                      border: "1px solid #ebebeb",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.05), 0 1px 4px rgba(0,0,0,0.04)",
                      padding: "1.5rem",
                    }}
                  >
                    {/* Year badge */}
                    <span
                      style={{
                        display: "inline-block",
                        fontFamily: "'Open Sans', sans-serif",
                        fontSize: "10px",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        fontWeight: 600,
                        padding: "4px 12px",
                        backgroundColor: "#f0f0f0",
                        color: "#555555",
                        borderRadius: "9999px",
                        marginBottom: "0.75rem",
                      }}
                    >
                      {item.year}
                    </span>
                    <h3
                      style={{
                        fontFamily: "'Open Sans', sans-serif",
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        color: "#0a0a0a",
                        letterSpacing: "-0.01em",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Open Sans', sans-serif",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        color: "#888888",
                        marginBottom: "0.75rem",
                        letterSpacing: "0.01em",
                      }}
                    >
                      {item.company}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Open Sans', sans-serif",
                        fontSize: "0.875rem",
                        color: "#666666",
                        lineHeight: 1.65,
                      }}
                    >
                      {item.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-32 px-6" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#555555",
                marginBottom: "1.5rem",
              }}
            >
              Let's talk
            </p>
            <h2
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                marginBottom: "1.5rem",
              }}
            >
              Let's Work{" "}
              <span
                style={{
                  fontFamily: "'Bungee', cursive",
                  fontWeight: 400,
                  color: "#e5e5e5",
                }}
              >
                Together.
              </span>
            </h2>
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "#888888",
                marginBottom: "2.5rem",
                maxWidth: "32rem",
              }}
            >
              Have a project in mind? I'd love to hear about it and discuss how
              we can bring your ideas to life.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2"
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontWeight: 600,
                padding: "12px 28px",
                backgroundColor: "#ffffff",
                color: "#111111",
                borderRadius: "9999px",
                textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#e5e5e5";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#ffffff";
              }}
            >
              Start a Conversation
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
