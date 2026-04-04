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

### Staging deploy (subdomain)

This repo is configured with a `staging` Wrangler environment targeting:

- `staging.rafaeloaguirre.com`

First-time setup:

```sh
pnpm exec wrangler login
pnpm exec wrangler whoami
```

Deploy to staging:

```sh
pnpm exec wrangler deploy --config wrangler.jsonc --env staging
```

Important:

- `rafaeloaguirre.com` must be in the same Cloudflare account you deploy from.
- DNS for `staging` should be managed by Cloudflare (proxied). If a conflicting DNS record already exists, remove it before deploy.
- SSL provisioning on first custom-domain attach can take a few minutes.
- If Wrangler says it is using redirected config from `dist/server/wrangler.json`, force root config with `--config wrangler.jsonc`.

Useful scripts:

```sh
pnpm run deploy:staging
pnpm run deploy:prod
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
