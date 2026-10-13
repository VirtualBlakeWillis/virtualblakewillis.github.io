# Dedicated Node backend on DigitalOcean App Platform

The site is static on GitHub Pages, so AI calls need a server to hold the DigitalOcean model access key. We chose a single-instance Node/TypeScript API on App Platform over serverless functions (DigitalOcean Functions or a Cloudflare Worker) because a long-lived single instance makes in-memory per-IP rate limits, a global daily cap, and a Job Input cache reliable without a database, and because Resume PDFs are rendered server-side.

## Consequences

Rate limits and cache are only correct while the API runs as one instance. Scaling out requires moving them to a shared store (e.g. managed Redis/Valkey).
