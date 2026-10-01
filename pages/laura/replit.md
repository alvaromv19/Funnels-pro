# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### `artifacts/laura-sofia` — Laura Sofia Castillo Portfolio (preview path: `/`)
International dancer portfolio site. Single-page React + Vite app with:
- Intro animation (full-screen name reveal)
- Red ticker bar, fixed nav with active section highlighting
- Hero section with SVG dancer illustration and spinning rings
- About section with quote, bio, language tags, photo placeholders
- Genres grid (6 dance styles)
- International experience section with country cards, photo gallery, timeline
- Services grid + animated skill bars
- Contact section with WhatsApp / email links + contact card
- Social section (Instagram + TikTok)
- Footer
- Custom cursor (blend-mode difference, enlarges on hover)
- Mouse trail canvas effect
- Background particle animation
- Scroll-reveal animations

Design system: `#111010` background, crimson red `#C42535`, gold `#C8A84B`, Anton + Marcellus + DM Sans fonts.

### `artifacts/api-server` — API Server (preview path: `/api`)
Express 5 backend. Currently minimal (health check only).

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
