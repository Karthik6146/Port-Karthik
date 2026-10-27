# Karthik Shakyawar — Portfolio

Personal portfolio and blog of **Karthik Shakyawar**, a frontend developer who builds thoughtful, easy-to-use websites.

Built with **Next.js 16** (App Router), **React 19**, **Tailwind CSS**, and **MDX**.

![Portfolio homepage](artifacts/portfolio-1440.png)

## Features

- **Selected work** — project cards driven by a single JSON file, with screenshots, tags, live and source links.
- **About & skills** — short bio with grouped skills.
- **Blog** — MDX posts in `src/posts`, statically generated at build time.
- **Light and dark themes** — follows the system preference on first visit, remembers an explicit choice, and applies it before paint (no theme flash).
- **Accessible** — skip link, visible focus styles, 44px touch targets, `prefers-reduced-motion` support.
- **Responsive** — tested from 320px phones to 1440px desktops.
- **SEO ready** — page metadata, Open Graph and Twitter cards.

## Tech stack

| Area | Tools |
| --- | --- |
| Framework | Next.js 16, React 19 |
| Styling | Tailwind CSS 3, `@tailwindcss/typography`, CSS custom properties |
| Content | MDX via `next-mdx-remote` |
| Quality | ESLint 9, Prettier, Node test runner |

## Getting started

Requires **Node.js 20.9 or newer**.

```bash
git clone https://github.com/Karthik6146/<repo-name>.git
cd <repo-name>
npm ci
npm run dev
```

Open http://localhost:3000.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm test` | Run unit tests (`tests/*.test.mjs`) |

## Project structure

```
src/
  app/              Routes: home, /blog, /blog/[slug], layout and global styles
  components/       Hero, Projects, Skills, ThemeToggle, MDX renderers
    layout/         Header and Footer
  lib/
    projects.json   Project data shown on the homepage
    posts.js        MDX loading and frontmatter parsing
  posts/            Blog posts (.mdx)
public/             Portrait, project screenshots, favicon
tests/              Unit tests for projects, posts and theme script
```

## Editing content

- **Projects:** edit `src/lib/projects.json`. Put screenshots in `public/projects/`. `live` and `code` links are optional.
- **Bio and skills:** edit `src/components/Hero.jsx` and `src/components/Skills.jsx`.
- **Blog posts:** add `src/posts/my-post.mdx`:

  ```mdx
  ---
  title: My Post
  date: 2026-10-27
  excerpt: One-line summary shown on the blog index.
  ---

  Post content in Markdown / MDX.
  ```

  MDX runs as code at build time. Only add posts you wrote yourself.

## Deployment

Deploys to [Vercel](https://vercel.com) with no extra configuration; the production URL is detected automatically.

On other hosts, set `SITE_URL` to the public URL (used for Open Graph links):

```bash
SITE_URL=https://your-domain.com npm run build
```

## License

[MIT](LICENSE)
