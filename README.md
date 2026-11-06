# ZSUR Digital Lab

The central digital home for ZSUR: an evolving catalog of products, applications and experiments.

## Local development

Requires Node.js 22 or newer.

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`. Quality checks:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

## Adding a project

Add one typed entry to `lib/projects.ts`. The project index, filters, home cards, static detail route, metadata and sitemap are generated from that catalog. Fields without verified information should remain empty instead of being inferred.

## Deployment to Vercel

1. Import this GitHub repository into Vercel and keep the detected Next.js settings.
2. Deploy a preview and verify all routes and outbound project links.
3. Add `zsur.ar` under **Project → Settings → Domains**.
4. Apply only the DNS records Vercel provides for the apex domain. Do not alter the existing `sweetdelfina` or `electroclima` subdomain records.
5. After DNS verification and automatic SSL issuance, set `zsur.ar` as canonical and redirect `www.zsur.ar` to it if the `www` host is added.

No environment variables or database are required for this version. Production publication and DNS changes require explicit approval.
