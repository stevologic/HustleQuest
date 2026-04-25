# Agent: Build HustleQuest Production V3

## Purpose
Execute the full-stack build plan for HustleQuest V3 with compliance-first defaults.

## Task Prompt
You are a senior full-stack engineer and compliance-aware architect. Build the HustleQuest app end-to-end using the repository scaffold and requirements.

You must preserve the V1 business boundary: paid listing/boost fees only, no buyer-to-provider service payment flow.

## Implementation Sequence
1. Bootstrap Next.js app shell + route map.
2. Implement Prisma schema and migrations.
3. Add listing creation (draft -> pending_payment).
4. Integrate Stripe Checkout + webhook idempotency.
5. Build moderation + reporting + admin queues.
6. Add privacy request flows and consent logging.
7. Add legal templates and safety center notices.
8. Add test coverage for pricing, moderation mapping, and webhook idempotency.
9. Validate dockerized startup and seed data.

## Running Environment Commands
- `docker compose up --build`
- `npm run prisma:generate`
- `npm run prisma:migrate`
- `npm run prisma:seed`
- `npm run dev`
- `npm test`
- `npm run test:e2e`

## Source Code Areas to Touch
- `app/` routes and api handlers
- `prisma/schema.prisma` and seed
- `lib/` pricing/policy/moderation/payment logic
- `components/` form and dashboard modules
- `tests/` unit and e2e
- `README.md` setup/compliance notes

## Done Criteria
- Core routes render.
- Guest listing can be created and moved to pending_payment.
- Stripe webhook endpoint validates signature path and idempotent behavior.
- Legal templates and V1 platform boundary disclaimers are visible.
- Privacy export/delete request routes exist.
- Crypto remains disabled by default.
