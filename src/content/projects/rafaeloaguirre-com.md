---
title: 'rafaeloaguirre.com'
summary: 'Personal website and technical blog built with Astro 6, MDX, Tailwind 4, and deployed to Cloudflare Workers.'
stack: ['Astro', 'TypeScript', 'Tailwind CSS', 'MDX', 'Cloudflare Workers']
year: 2026
repoUrl: 'https://github.com/rafoaguirre/website'
liveUrl: 'https://rafaeloaguirre.com'
featured: true
---

## Overview

This site — the one you're reading — is a personal portfolio and technical blog. The goal was a fast, well-structured site that could grow to support regular technical writing without getting in the way.

## Decisions

**Astro over Next.js** — The site is mostly static content: project pages, articles, and a few simple pages. Astro's "zero JS by default" model is the right fit. Next.js would add complexity without adding value here.

**MDX for articles** — I wanted to be able to embed custom components, callouts, and code blocks with full control over the rendering. MDX gives me a clean authoring experience while staying in the Astro ecosystem.

**Content Layer API** — Astro 6 uses the Content Layer API for typed content collections. Articles and projects both have defined schemas with Zod, which means TypeScript catches missing frontmatter fields at build time.

**Tailwind 4 via Vite plugin** — The old `@astrojs/tailwind` integration is deprecated. Tailwind 4 integrates directly through the Vite plugin, with all configuration in CSS rather than a separate JS config file.

**Cloudflare Workers** — Deployed to Cloudflare Workers Static Assets for global CDN distribution, zero cold starts, and tight integration with the rest of Cloudflare's ecosystem.

## Publishing workflow

Articles live in `src/content/articles/` as `.mdx` files. Publishing is: write, commit, push. Cloudflare's GitHub integration deploys on every push to `main`.
