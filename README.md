# rafaeloaguirre.com

Personal website and technical blog for [Rafael Aguirre](https://rafaeloaguirre.com).

**Stack:** Astro 6 · MDX · Tailwind 4 · Cloudflare Workers

---

## Development

```sh
pnpm install
pnpm dev        # dev server at localhost:4321
pnpm build      # production build → dist/
pnpm preview    # serve dist/ locally
pnpm check      # type-check all .astro/.ts files
```

## Publishing content

Articles live in `src/content/articles/` as `.mdx` files. Projects live in `src/content/projects/`.

**To publish a new article:**

1. Create `src/content/articles/your-slug.mdx` with frontmatter:

```mdx
---
title: 'Your title'
description: 'One-sentence summary.'
publishedAt: 2026-04-03
tags: ['tag-one', 'tag-two']
draft: false
---

Article body here...
```

2. Commit and push to `main` — Cloudflare deploys automatically.

**Draft articles** (`draft: true`) are excluded from builds and the RSS feed.

## Deployment

Deployed to **Cloudflare Workers** (static assets mode) via Git integration.

- Every push to `main` triggers a build + deploy
- Pull requests get preview URLs automatically
- Custom domain: `rafaeloaguirre.com`

Manual deploy (if needed):

```sh
pnpm build
pnpm exec wrangler deploy
```

## Commit conventions

Uses [Conventional Commits](https://www.conventionalcommits.org/) with an added `content` type:

| Type      | When to use                                 |
| --------- | ------------------------------------------- |
| `content` | New article, project entry, or site content |
| `feat`    | New page, feature, or component             |
| `fix`     | Bug fix                                     |
| `style`   | Visual / CSS-only changes                   |
| `chore`   | Dependencies, tooling, config               |
| `ci`      | Cloudflare / GitHub Actions config          |
