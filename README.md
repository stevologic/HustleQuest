# HustleQuest (Production V3 Scaffold)

HustleQuest is a local-first services listing marketplace designed as a **discovery/listing platform** in V1.

## V1 boundary

- Users pay HustleQuest for listing and optional boost fees.
- HustleQuest does **not** process buyer-to-provider service payments in V1.
- No escrow, no wallet custody, no internal user balances.

## Tech stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS
- Prisma + PostgreSQL 16
- Stripe Checkout + webhook route scaffold
- Zod validation
- Vitest + Playwright scaffolding
- Docker Compose

## Local setup

1. Copy `.env.example` to `.env` and fill secrets.
2. Install dependencies.
3. Run prisma migrations and seed.
4. Start the app.

```bash
npm install
npm run prisma:generate
npm run prisma:migrate
npm run prisma:seed
npm run dev
```

## Docker

```bash
docker compose up --build
```

## Core routes included

- Public: `/`, `/browse`, `/post`, `/pricing`, `/safety`, `/listing/[slug]`, `/category/[slug]`, `/browse/[city]`, `/u/[handle]`
- Auth: `/sign-in`, `/sign-up`, `/claim-listing`, `/magic/[token]`
- Dashboard: `/dashboard/*`
- Checkout: `/checkout/start`, `/checkout/success`, `/checkout/cancel`
- Admin: `/admin/*`
- Legal: `/legal/*` pages requested in the spec

## API scaffolds included

- `POST /api/listings`
- `POST /api/stripe/webhook`
- `POST /api/crypto/webhook/:provider` (feature-flag aware)
- `POST /api/moderation/recheck`
- `POST /api/reports`
- `POST /api/reviews`
- `POST /api/contact-view`
- `POST /api/privacy/export`
- `POST /api/privacy/delete`
- `GET /api/search`
- `GET /api/categories`

## Compliance notes

- Legal pages are templates and must be attorney-reviewed before launch.
- Posting/payment is 18+ in V1 requirements.
- Under-13 accounts are prohibited in V1 requirements.
- Crypto is disabled by default via `CRYPTO_PAYMENTS_ENABLED=false`.

## Directory highlights

- `agents/` manual compliance agent prompts
- `prisma/schema.prisma` broad schema coverage from V3 prompt
- `lib/` pricing, moderation, policies, and shared config
- `tests/` unit and e2e starter tests
- `docs/sprite-art-direction.md` sprite-inspired visual mapping and compliance guardrails

## Next steps to reach full production

This repository now contains a production-oriented scaffold. The next implementation phase should wire the placeholder routes to live persistence, auth providers, Stripe products/webhooks, moderation providers, full RBAC, and complete UI workflows.



## GPT Image visual pipeline

Generate polished hero/background/icon/sprite assets using the OpenAI Images API:

```bash
export OPENAI_API_KEY=your_key
npm run assets:generate:gpt-image
```

Generated files are placed in `public/world-class/` and are served directly by Next.js.

## Troubleshooting

- If Docker/Next fails with `Cannot find module 'autoprefixer'`, ensure dependencies are reinstalled after pulling latest changes:

```bash
docker compose build --no-cache
docker compose up
```

(or run `npm install` locally before `npm run dev`).
