# Telegram MiniApps Framework (Marketing + Studio MVP)

Stack: Next.js 14 (App Router) + TypeScript + Tailwind + minimal shadcn-compatible UI.

## Getting started
```bash
npm i
npm run dev
```

Open http://localhost:3000

## Scripts
- `dev` – run local dev server
- `build` – production build
- `start` – run production server
- `typecheck` – strict TS

## i18n
Language toggle via `?lang=en|ru`. EN by default.

## Studio
Two-pane editor with JSON ↔ preview, command bar, blocks gallery, URL sharing (`?s=...` with LZ compression).

## SEO
- `app/sitemap.ts`, `app/robots.ts`
- OpenGraph in `app/layout.tsx`
- JSON-LD (Organization, Product, FAQ) on landing; HowTo on Methodology; ItemList on Templates

## Analytics
Set one or both env vars:
- Plausible: `NEXT_PUBLIC_PLAUSIBLE_DOMAIN=your-domain.com`
- GA4: `NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX`

Events: `sign_up`, `template_view`, `template_clone`, `contact_submit`.

## Legal
Legal-first approach only (guidelines/filters). No legal advice. See /legal-first, /privacy, /terms.

## CI/CD (Vercel)
Use Vercel GitHub integration or an action. For actions, set secrets:
- `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`

Generated on 2025-08-15T15:51:01.010588Z
