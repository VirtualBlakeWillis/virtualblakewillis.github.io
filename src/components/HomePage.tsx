import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Link } from "react-router";
import { learncraftProjects } from "../data/articles";
import { slugify } from "../utils/slugify";
import HeroSection from "./units/HeroSection";

export function HomePage() {
  const featuredProjects = learncraftProjects
    .filter((project) => project.featured)
    .slice(0, 2);

  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "'Open Sans', sans-serif", backgroundColor: "#fafafa" }}
    >
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Work Preview */}
      <section
        className="py-32 px-6"
        style={{ backgroundColor: "#f7f7f7" }}
      >
        <div className="max-w-7xl mx-auto">
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
              Selected Work
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
              Featured{" "}
              <span style={{ fontFamily: "'Bungee', cursive", fontWeight: 400 }}>
                Projects
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Link
                key={project.title}
                to={`/portfolio/${slugify(project.title)}`}
                style={{ textDecoration: "none" }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
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
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    {/* Subtle dark overlay at bottom for readability */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 60%)",
                      }}
                    />
                  </div>

                  <div className="p-6">
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
                        marginBottom: "1.25rem",
                      }}
                    >
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
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
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Link
              to="/portfolio"
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
              View All Projects
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick About Preview */}
      <section className="py-32 px-6" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
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
              <h2
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "clamp(2rem, 4vw, 3.25rem)",
                  fontWeight: 700,
                  color: "#0a0a0a",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  marginBottom: "1.5rem",
                }}
              >
                Building with{" "}
                <span style={{ fontFamily: "'Bungee', cursive", fontWeight: 400 }}>
                  purpose.
                </span>
              </h2>
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
                I'm a passionate full-stack developer with expertise in building
                scalable web applications. I love turning complex problems into
                elegant solutions through clean, efficient code.
              </p>
              <Link
                to="/about"
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
              Learn More
                <ArrowRight size={14} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div
                style={{
                  position: "relative",
                  borderRadius: "14px",
                  overflow: "hidden",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzY4MjM4NzIxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Developer workspace"
                  className="w-full h-96 object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-32 px-6"
        style={{ backgroundColor: "#0a0a0a" }}
      >
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
              <span style={{ fontFamily: "'Bungee', cursive", fontWeight: 400, color: "#e5e5e5" }}>
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
