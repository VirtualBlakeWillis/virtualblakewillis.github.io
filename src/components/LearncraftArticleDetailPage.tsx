/* eslint-disable @typescript-eslint/no-unused-vars */
import { useParams, Link } from "react-router";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { learncraftProjects, getArticleForProject, loadArticleContent } from "../data/articles";
import { slugify } from "../utils/slugify";

export function LearncraftArticleDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [markdownContent, setMarkdownContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  const project = learncraftProjects.find((p) => slugify(p.title) === slug);
  const article = project ? getArticleForProject(project.title) : undefined;

  useEffect(() => {
    if (article && slug) {
      setIsLoading(true);
      setLoadError(null);
      loadArticleContent(slug)
        .then((content) => {
          setMarkdownContent(content);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Failed to load article content:", error);
          setLoadError(error instanceof Error ? error.message : "Failed to load article");
          setIsLoading(false);
        });
    } else if (!article) {
      setIsLoading(false);
    }
  }, [article, slug]);

  // ── Not found ──
  if (!project) {
    return (
      <div
        className="min-h-screen"
        style={{ fontFamily: "'Open Sans', sans-serif", backgroundColor: "#fafafa" }}
      >
        <section className="py-32 px-6">
          <div className="max-w-5xl mx-auto">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2"
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontWeight: 600,
                color: "#888888",
                textDecoration: "none",
                marginBottom: "3rem",
                display: "inline-flex",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#0a0a0a";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#888888";
              }}
            >
              <ArrowLeft size={13} />
              Back to Portfolio
            </Link>

            <div style={{ borderBottom: "1px solid #e5e5e5", paddingBottom: "2rem", marginBottom: "2rem" }}>
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
                404
              </p>
              <h1
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  fontWeight: 700,
                  color: "#0a0a0a",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                Project{" "}
                <span style={{ fontFamily: "'Bungee', cursive", fontWeight: 400 }}>
                  not found.
                </span>
              </h1>
            </div>
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "1rem",
                color: "#666666",
                lineHeight: 1.75,
              }}
            >
              The project you're looking for doesn't exist.
            </p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "'Open Sans', sans-serif", backgroundColor: "#fafafa" }}
    >
      {/* ── Hero / Project Header ── */}
      <section className="py-32 px-6" style={{ backgroundColor: "#fafafa" }}>
        <div className="max-w-5xl mx-auto">

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: "3rem" }}
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
              <ArrowLeft size={13} />
              Back to Portfolio
            </Link>
          </motion.div>

          {/* Categories eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
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
              {project.categories.join(" · ")}
            </p>
            <h1
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "clamp(3rem, 5vw, 5.25rem)",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "#0a0a0a",
                marginBottom: "2rem",
              }}
            >
              {project.title}
            </h1>
          </motion.div>

          {/* Hero image */}
          {project.image && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                borderRadius: "14px",
                overflow: "hidden",
                border: "1px solid #ebebeb",
                boxShadow: "0 12px 40px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              <img
                src={project.image}
                alt={`${project.title} preview`}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </motion.div>
          )}
        </div>
      </section>

      {/* ── Article Content ── */}
      {article && (
        <section className="py-16 pb-32 px-6" style={{ backgroundColor: "#f7f7f7" }}>
          <div className="max-w-5xl mx-auto">

            {/* Loading state */}
            {isLoading && (
              <div
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "14px",
                  border: "1px solid #ebebeb",
                  padding: "3rem",
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
                  Loading article content…
                </p>
              </div>
            )}

            {/* Error state */}
            {loadError && (
              <div
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "14px",
                  border: "1px solid #ebebeb",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                  padding: "1.5rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "0.875rem",
                    color: "#666666",
                  }}
                >
                  Error loading article: {loadError}
                </p>
              </div>
            )}

            {/* Markdown content */}
            {!isLoading && !loadError && markdownContent && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "14px",
                  border: "1px solid #ebebeb",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.05), 0 1px 4px rgba(0,0,0,0.04)",
                  padding: "2.5rem",
                }}
              >
                <ReactMarkdown
                  components={{
                    img: ({ node, ...props }) => (
                      <figure style={{ margin: "2rem 0" }}>
                        <img
                          {...props}
                          alt={props.alt || ""}
                          style={{
                            width: "100%",
                            height: "auto",
                            borderRadius: "14px",
                            border: "1px solid #ebebeb",
                            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                            display: "block",
                          }}
                          loading="lazy"
                        />
                        {props.alt && (
                          <figcaption
                            style={{
                              marginTop: "0.75rem",
                              fontFamily: "'Open Sans', sans-serif",
                              fontSize: "0.8rem",
                              textAlign: "center",
                              color: "#888888",
                              fontStyle: "italic",
                            }}
                          >
                            {props.alt}
                          </figcaption>
                        )}
                      </figure>
                    ),
                    h1: ({ node, ...props }) => (
                      <h1
                        style={{
                          fontFamily: "'Open Sans', sans-serif",
                          fontSize: "clamp(2rem, 4vw, 2.75rem)",
                          fontWeight: 700,
                          color: "#0a0a0a",
                          lineHeight: 1.1,
                          letterSpacing: "-0.02em",
                          marginTop: "2.5rem",
                          marginBottom: "1rem",
                          borderBottom: "1px solid #e5e5e5",
                          paddingBottom: "0.75rem",
                        }}
                        {...props}
                      />
                    ),
                    h2: ({ node, ...props }) => (
                      <h2
                        style={{
                          fontFamily: "'Open Sans', sans-serif",
                          fontSize: "clamp(1.5rem, 3vw, 2rem)",
                          fontWeight: 700,
                          color: "#0a0a0a",
                          lineHeight: 1.15,
                          letterSpacing: "-0.01em",
                          marginTop: "2rem",
                          marginBottom: "0.75rem",
                        }}
                        {...props}
                      />
                    ),
                    h3: ({ node, ...props }) => (
                      <h3
                        style={{
                          fontFamily: "'Open Sans', sans-serif",
                          fontSize: "1.25rem",
                          fontWeight: 700,
                          color: "#0a0a0a",
                          letterSpacing: "-0.01em",
                          marginTop: "1.5rem",
                          marginBottom: "0.5rem",
                        }}
                        {...props}
                      />
                    ),
                    p: ({ node, children, ...props }) => {
                      if (
                        Array.isArray(children) &&
                        children.length === 1 &&
                        (children[0] as React.ReactElement)?.type === "img"
                      ) {
                        return <>{children}</>;
                      }
                      return (
                        <p
                          style={{
                            fontFamily: "'Open Sans', sans-serif",
                            fontSize: "0.95rem",
                            color: "#555555",
                            lineHeight: 1.75,
                            marginBottom: "1.25rem",
                          }}
                          {...props}
                        >
                          {children}
                        </p>
                      );
                    },
                    ul: ({ node, ...props }) => (
                      <ul
                        style={{
                          listStyleType: "disc",
                          paddingLeft: "1.5rem",
                          marginBottom: "1.25rem",
                          fontFamily: "'Open Sans', sans-serif",
                          fontSize: "0.95rem",
                          color: "#555555",
                          lineHeight: 1.75,
                        }}
                        {...props}
                      />
                    ),
                    ol: ({ node, ...props }) => (
                      <ol
                        style={{
                          listStyleType: "decimal",
                          paddingLeft: "1.5rem",
                          marginBottom: "1.25rem",
                          fontFamily: "'Open Sans', sans-serif",
                          fontSize: "0.95rem",
                          color: "#555555",
                          lineHeight: 1.75,
                        }}
                        {...props}
                      />
                    ),
                    li: ({ node, ...props }) => (
                      <li style={{ marginBottom: "0.35rem" }} {...props} />
                    ),
                    a: ({ node, ...props }) => (
                      <a
                        style={{
                          color: "#111111",
                          textDecoration: "underline",
                          textUnderlineOffset: "3px",
                          transition: "color 0.15s",
                        }}
                        target="_blank"
                        {...props}
                      />
                    ),
                    code: ({ node, ...props }) => (
                      <code
                        style={{
                          display: "block",
                          backgroundColor: "#f7f7f7",
                          border: "1px solid #e5e5e5",
                          borderRadius: "10px",
                          padding: "1rem 1.25rem",
                          overflowX: "auto",
                          fontSize: "0.85rem",
                          fontFamily: "monospace",
                          color: "#333333",
                          marginBottom: "1.25rem",
                        }}
                        {...props}
                      />
                    ),
                  }}
                >
                  {markdownContent}
                </ReactMarkdown>
              </motion.div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
