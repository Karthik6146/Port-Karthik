# Karthik Shakyawar — portfolio

A simple portfolio built with Next.js 16, React 19, Tailwind CSS, and server-rendered MDX. The homepage presents selected work, skills, and a LinkedIn contact link.

## Run locally

Use Node.js 20.9 or newer.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Production: `npm run build`, then `npm start`.

Checks: `npm test` and `npm run lint`.

Production dependency audit: `npm audit --omit=dev`. The remaining full-audit advisories involve development tooling (Tailwind and ESLint dependencies); no forced major tool upgrades were applied.

## Content

- Edit `src/lib/projects.json` to add or update projects. Include only verified source and live URLs. Source links are optional.
- Update biography and skills in `src/components/Hero.jsx` and `src/components/Skills.jsx`.
- Add trusted, locally authored MDX posts in `src/posts`. Do not accept MDX from untrusted users.
- Set `SITE_URL` to the public portfolio URL when deploying outside Vercel; Vercel's production domain is detected automatically. The local fallback is http://localhost:3000. The old client domain was removed from portfolio metadata.

## Review and research — October 9, 2026

The refresh fixes the old developer credit, another person's LinkedIn CTA, empty source links, a missing social preview image, and broken blog rendering. The responsive navigation now stays visible without a mobile drawer.

Design references: [Paco Coursey](https://paco.me/), [Lee Robinson](https://leerob.com/), [next-mdx-blog](https://github.com/leerob/next-mdx-blog), and [onur.dev](https://github.com/suyalcinkaya/onur.dev). Their clear hierarchy and restrained presentation informed the design. No template code or branding was copied.

GitHub's public API verified [Restaurant-Website](https://github.com/Karthik6146/Restaurant-Website) and [aiwebsite](https://github.com/Karthik6146/aiwebsite). The latter is explicitly labelled a fork. Karthik6146AC returned 404; the SD assignment repository is empty. Existing client work remains from the previous portfolio. The two new project previews are labelled interface concepts, not screenshots. Project data is a reviewed snapshot, not a live API feed.

Live checks: the restaurant, Arevei, and Japanese Learning sites returned HTTP 200. The AI demo returned 404 and DS Polypack's domain failed DNS resolution; their demo links are omitted and marked unavailable.

## License

MIT; see LICENSE.
