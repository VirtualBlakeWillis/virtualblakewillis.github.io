/* eslint-disable @typescript-eslint/no-unused-vars */
import { useParams, Link } from "react-router";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { learncraftProjects, getArticleForProject, loadArticleContent } from "../data/articles";
import { slugify } from "../utils/slugify";

export function LearncraftArticleDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [markdownContent, setMarkdownContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  // Find the project by slug
  const project = learncraftProjects.find((p) => slugify(p.title) === slug);
  
  // Get the corresponding article metadata
  const article = project ? getArticleForProject(project.title) : undefined;

  // Load markdown content when article is found
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

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-900 text-white">
        <section className="py-16 px-6 pt-24">
          <div className="max-w-5xl mx-auto space-y-6">
            <Link
              to="/learncraftspanish"
              className="flex items-center gap-2 text-sm font-semibold text-pink-200 transition hover:text-white"
            >
              ← Back to Learncraft Spanish
            </Link>
            <div className="text-center py-12">
              <h2 className="text-3xl font-bold">Project not found</h2>
              <p className="mt-4 text-slate-300">The project you're looking for doesn't exist.</p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section with Project Info */}
      <section className="py-16 px-6 pt-24">
        <div className="max-w-5xl mx-auto space-y-6">
          <Link
            to="/portfolio"
            className="flex items-center gap-2 text-sm font-semibold text-pink-200 transition hover:text-white"
          >
            ← Back to Articles
          </Link>

          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.4em] text-pink-300">{project.categories.join(", ")}</span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">{project.title}</h1>
            {/* <p className="text-xl text-slate-200">{project.description}</p> */}
          </div>

          {project.image && (
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="w-full h-auto"
              />
            </div>
          )}
        </div>
      </section>

      {/* Article Content Section */}
      {article && (
        <section className="py-8 pb-16 px-6 bg-slate-800/50">
          <div className="max-w-5xl mx-auto space-y-6">
            {isLoading && (
              <div className="text-center py-12">
                <p className="text-slate-400">Loading article content...</p>
              </div>
            )}
            {loadError && (
              <div className="rounded-lg border border-red-500/50 bg-red-500/10 p-4">
                <p className="text-red-300">Error loading article: {loadError}</p>
              </div>
            )}
            {!isLoading && !loadError && markdownContent && (
              <div className="prose prose-invert prose-lg max-w-none text-slate-100">
                <ReactMarkdown
                  components={{
                    img: ({ node, ...props }) => (
                      <figure className="my-8">
                        <img
                          {...props}
                          alt={props.alt || ""}
                          className="w-full h-auto rounded-xl border border-white/10 shadow-lg"
                          loading="lazy"
                        />
                        {props.alt && (
                          <figcaption className="mt-3 text-sm text-center text-slate-400 italic">
                            {props.alt}
                          </figcaption>
                        )}
                      </figure>
                    ),
                    h1: ({ node, ...props }) => (
                      <h1 className="text-4xl font-bold mt-8 mb-4 text-white" {...props} />
                    ),
                    h2: ({ node, ...props }) => (
                      <h2 className="text-3xl font-semibold mt-8 mb-4 text-white" {...props} />
                    ),
                    h3: ({ node, ...props }) => (
                      <h3 className="text-2xl font-semibold mt-6 mb-3 text-white" {...props} />
                    ),
                    p: ({ node, children, ...props }) => {
                      // Don't wrap in <p> if the only child is an image
                      if (Array.isArray(children) && children.length === 1 && children[0].type === 'img') {
                        return <>{children}</>;
                      }
                      return <p className="mb-4 leading-7 text-slate-200" {...props}>{children}</p>;
                    },
                    ul: ({ node, ...props }) => (
                      <ul className="list-disc mb-4 space-y-2 text-slate-200" {...props} />
                    ),
                    ol: ({ node, ...props }) => (
                      <ol className="list-decimal list-inside mb-4 space-y-2 text-slate-200" {...props} />
                    ),
                    li: ({ node, ...props }) => (
                      <li className="ml-4" {...props} />
                    ),
                    a: ({ node, ...props }) => (
                      <a
                        className="text-pink-300 hover:text-pink-200 underline transition"
                        target="_blank"
                        {...props}
                      />
                    ),
                    code: ({ node, ...props }) =>
                     (
                        <code
                          className="block bg-slate-900 p-4 rounded-lg overflow-x-auto text-sm font-mono"
                          {...props}
                        />
                      )
                  }}
                >
                  {markdownContent}
                </ReactMarkdown>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
