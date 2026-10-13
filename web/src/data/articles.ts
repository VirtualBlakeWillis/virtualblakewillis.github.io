import articlesData from "./articles.json";
import { slugify } from "../utils/slugify";

export type Article = {
  slug: string;              // URL-friendly identifier
  title: string;             // Display title
  categories: string[];      // For filtering (one or more)
  description: string;       // Short description for cards
  markdownPath: string;      // Path to markdown file
  heroImage?: string;        // Optional hero image path
};

export const articles: Article[] = articlesData as Article[];

// Pre-load all markdown files at build time using Vite's glob import
const markdownModules = import.meta.glob('/src/data/markdown/*.md', { 
  eager: true, 
  as: 'raw' 
}) as Record<string, string>;

/**
 * Loads markdown content for an article by its slug
 * @param slug - The article slug
 * @returns Promise resolving to the markdown content string
 */
export async function loadArticleContent(slug: string): Promise<string> {
  try {
    const article = articles.find(a => a.slug === slug);
    if (!article) {
      throw new Error(`Article with slug "${slug}" not found`);
    }
    
    // Extract filename from markdownPath
    const filename = article.markdownPath.split('/').pop() || `${slug}.md`;
    const markdownPath = `/src/data/markdown/${filename}`;
    
    const content = markdownModules[markdownPath];
    if (!content) {
      throw new Error(`Markdown file not found: ${markdownPath}`);
    }
    
    return content;
  } catch (error) {
    console.error(`Error loading article content for slug "${slug}":`, error);
    throw error;
  }
}

// Learncraft Projects that map to article pages
export type LearncraftProject = {
  title: string;
  description: string;
  image: string;
  categories: string[];
  featured: boolean;
};

// Used for card display on the Learncraft Spanish page
export const learncraftProjects: LearncraftProject[] = [
  {
    title: "Articles Filtering by Category",
    description:
      "Implemented custom Article filtering component using FinSweet CMS Filter",
    image: "/articles/articles-filtering-by-category/project-screenshot.png",
    categories: ["CMS & Builders"],
    featured: true,
  },
  {
    title: "Student Drill Down",
    description:
      "Created an interface for coaching employees and management to see all records relating to a student from one interface. Combines 8 database table relationships into a single, easy to use interface.",
    image: "/articles/student-drill-down/project-screenshot.png",
    categories: ["Front-End", "Back-End"],
    featured: false,
  },
  {
    title: "Admin Dashboard",
    description:
      "Created an admin dashboard for admins and team leads to easily access buisiness critical information.",
    image: "/articles/admin-dashboard/admin-dashboard.png",
    categories: ["Front-End", "Back-End"],
    featured: true,
  }
];

// Map projects to their corresponding articles by matching slugs
export function getArticleForProject(projectTitle: string): Article | undefined {
  const projectSlug = slugify(projectTitle);
  return articles.find(a => a.slug === projectSlug);
}
