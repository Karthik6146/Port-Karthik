# Portfolio refresh implementation plan

**Goal:** Refresh Karthik's portfolio with a simple, modern interface and verified public GitHub projects.
**Architecture:** Reuse the existing Next.js pages and components. Keep project content static so rendering needs no GitHub token or network request.
**Tech stack:** Next.js 16, React 19, Tailwind CSS, plain CSS. Updated the unsupported framework and migrated MDX to server rendering after verification exposed incompatibility.

## Design and scope

Warm off-white background, charcoal type, forest green accent, thin borders, modest corners. Introduce Karthik, show selected work, describe skills, and link to LinkedIn. No elaborate animation or new UI dependencies. Keep the blog accessible and repair its existing double serialization error.

References: https://paco.me/, https://leerob.com/, https://github.com/leerob/next-mdx-blog, https://github.com/suyalcinkaya/onur.dev. Use hierarchy and simplicity as inspiration; copy no source or branding.

Review findings: wrong developer credit and LinkedIn CTA, dead source links, missing social image, incorrect canonical domain, mobile navigation lacking a visible close control, blog serializing an already serialized object.

GitHub checked October 9, 2026: Karthik6146/Restaurant-Website is original; Karthik6146/aiwebsite is a fork and must be labelled. KarthikShakayawar_SD is empty. Karthik6146AC returns 404; do not invent projects. Existing client work remains separately identified.

## Tasks

- [x] Refresh Hero, Header, Footer, Skills, Projects, homepage order, global styles, and metadata. Put data in src/lib/projects.json; render source buttons only for real URLs.
- [x] Fix blog double serialization, preserving 404 behavior; update shared blog link color.
- [x] Add a small Node test validating project URLs, fork labelling, and thumbnail paths. Run tests, lint, production build, and browser checks at 320/768/1024/1440px. Verify images, anchors, headings, console, and blog/404 routes.
- [x] Document research, development commands, and manual project updates in README. Leave deployment to the owner.

Live verification found the AI demo returns 404 and DS Polypack fails DNS resolution. Those demo links are omitted; the cards remain as work samples. Production audit reports zero advisories; development-tool advisories remain documented in README.
