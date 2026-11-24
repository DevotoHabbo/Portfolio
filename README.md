# Portfolio

A React (Vite) single-page resume, styled after a job-board profile, with a **View on Indeed** button that links to your Indeed resume and a **Download PDF** button (print-optimized styles).

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
```

## Customize

All content lives in [`src/data/resume.js`](src/data/resume.js): name, headline, contact info, `indeedUrl`, links, summary, experience, education, skills and certifications. Empty sections are hidden automatically.

The `dist/` output uses relative paths, so it can be hosted on GitHub Pages, Netlify, Vercel, or any static host.

## Deploy (GitHub Pages)

`.github/workflows/deploy.yml` builds and publishes the site on every push to `main`.
One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
The site is then served at `https://devotohabbo.github.io/portfolio/`.
