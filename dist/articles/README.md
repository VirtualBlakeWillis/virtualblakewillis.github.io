# Article Images Directory

This directory contains images for article content. Each article has its own subdirectory named after the article slug.

## Directory Structure

```
/public/articles/
  /learncraft-spanish-landing-refresh/
    - hero-screenshot.jpg
    - mobile-view.png
  /learner-progress-api/
    - architecture-diagram.png
    - monitoring-dashboard.png
  /articles-filtering-by-category/
    - (add images as needed)
```

## Image Usage in Markdown

Images are referenced in markdown files using absolute paths starting with `/`:

```markdown
![Alt text description](/articles/article-slug/image-name.jpg)
```

This ensures images work correctly in both development and production environments, as Vite serves the `/public` directory at the root URL.

## Image Guidelines

- Use descriptive filenames (e.g., `hero-screenshot.jpg` instead of `image1.jpg`)
- Optimize images for web (consider using WebP format for better compression)
- Recommended max width: 1200px for full-width images
- Alt text should be descriptive and meaningful
