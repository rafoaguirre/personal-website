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

2. Commit and push to `main`.

If the article is meant for production, run the manual production deploy workflow after the push. If it is a staging-only change, use the staging deploy path instead.

**Draft articles** (`draft: true`) are excluded from builds and the RSS feed.

## Deployment

Deployed to **Cloudflare Workers** (static assets mode).

Production and staging are handled through Wrangler plus GitHub Actions:

- `staging.rafaeloaguirre.com` deploys from the `staging` environment
- `rafaeloaguirre.com` and `www.rafaeloaguirre.com` are attached as production custom domains
- production deploys are manual through the `Deploy Production` GitHub Actions workflow
- staging can still be deployed from the CLI when needed

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

### Production release

The default Wrangler config targets these production domains:

- `rafaeloaguirre.com`
- `www.rafaeloaguirre.com`

Recommended release path:

1. Push the release commit to `main`.
2. Open GitHub Actions and run `Deploy Production`.
3. Leave the `ref` input as `main` unless you are deploying a tagged release.
4. Verify both production URLs after the workflow finishes.

### Mail-safe DNS cutover

If email is still handled by an existing mail provider, do not rely on the apex website record for mail delivery once the site moves to Workers.

Before cutting the website over:

- create an explicit mail host record for the provider
- add an explicit `MX` record pointing to that mail host
- keep mail-related `TXT` records such as SPF, DKIM, and DMARC in place
- leave any provider-specific records such as `autodiscover` untouched if they are already in use

Then point the website hostnames (`@` and optionally `www`) to Cloudflare Workers through the attached custom domains.

Keep these rules in mind:

- Do not proxy mail records through Cloudflare.
- Only remove the old website `A`/`CNAME` records once the new Worker custom domains are active.

## GitHub Actions deployment

Workflows included:

- `.github/workflows/deploy-staging.yml`
  - runs on push to `main`
  - also supports manual trigger
  - deploys with `pnpm run deploy:staging`
- `.github/workflows/deploy-production.yml`
  - manual trigger only (`workflow_dispatch`)
  - accepts an optional `ref` input
  - deploys with `pnpm run deploy:prod`

Required GitHub secrets (repo or environment level):

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

Recommended setup:

- Use GitHub environment `staging` for staging deploys.
- Use GitHub environment `production` with required reviewers for manual production deploy approvals.

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
