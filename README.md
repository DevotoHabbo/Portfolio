# Portfolio

A React (Vite) single-page resume with a **View on Indeed** button and a **Download PDF** button (print-optimized styles).

Interactive features:
- Sticky navigation that highlights the section you're reading, plus a light/dark theme toggle (remembered per visitor).
- Work experience filters (All / Tech & Engineering / Other), sort (most relevant / most recent), and expandable job cards.
- Click any skill (or a tag on a job) to show only the roles where it was used.
- One-click copy for email and phone, and a contact form that opens a pre-filled email.

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
```

## Customize

All content lives in [`src/data/resume.js`](src/data/resume.js): name, headline, contact info, `indeedUrl`, links, summary, experience, education, skills, certifications and languages. Empty sections are hidden automatically.

Each job has a `category` (`'tech'` or `'other'`) for the filter, and `tags`; a tag that matches a skill name links that skill to the job.

The `dist/` output uses relative paths, so it can be hosted on GitHub Pages, Netlify, Vercel, or any static host.

## Deploy (GitHub Pages)

`.github/workflows/deploy.yml` builds and publishes the site on every push to `main`.
One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
The site is then served at `https://devotohabbo.github.io/Portfolio/`.
