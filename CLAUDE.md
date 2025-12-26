# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website (andydelgado.dev) built as a full-stack TypeScript application with React frontend and Express backend, deployed to a self-hosted Ubuntu server.

## Development Commands

### Running the Application
```bash
npm run dev          # Start development server (tsx + Vite HMR on port 8080)
npm run build        # Build both client (Vite) and server (esbuild)
npm start           # Start production server with PM2
npm run check       # TypeScript type checking only (no compilation)
```

### Database
```bash
npm run db:push     # Push schema changes to database using Drizzle Kit
```

## Architecture

### Stack
- **Frontend**: React 18.3 + TypeScript + Vite + Wouter (routing) + TanStack Query + Tailwind CSS + shadcn/ui
- **Backend**: Express + TypeScript + Drizzle ORM + PostgreSQL (Neon serverless)
- **Build**: Vite (client) + esbuild (server bundling)
- **Deployment**: GitHub Actions → self-hosted runner → PM2

### Directory Structure
```
client/             # Frontend React app
  src/
    components/     # React components
      ui/           # shadcn/ui components (copy/paste, not npm)
    pages/          # Route components (Home, NotFound)
    hooks/          # Custom React hooks
    lib/            # Utilities (queryClient, cn helper)
server/             # Express backend
  index.ts          # Entry point, middleware setup
  routes.ts         # API route definitions
  vite.ts           # Vite dev server & static file serving
  storage.ts        # In-memory storage implementation
shared/             # Shared types & schemas
  schema.ts         # Drizzle database schema + Zod validation
dist/               # Build output
  public/           # Client bundle (served by Express)
  index.js          # Server bundle
```

### TypeScript Path Aliases
```typescript
"@/*" → "./client/src/*"       // Frontend components, hooks, etc.
"@shared/*" → "./shared/*"     // Shared schemas, types
"@assets/*" → "./attached_assets/*"  // Static assets
```

### Development vs Production

**Development** (`npm run dev`):
- tsx runs `server/index.ts` with watch mode
- Vite dev middleware serves client with HMR
- Both client and API on port 8080

**Production** (`npm start`):
- PM2 runs bundled `dist/index.js`
- Express serves static files from `dist/public/`
- API routes under `/api/*`
- Port 8080 (only unfirewalled port on server)

### Build System

**Client Build** (Vite):
- Entry: `client/index.html`
- Output: `dist/public/`
- Plugins: React, runtime error overlay, shadcn theme

**Server Build** (esbuild):
- Entry: `server/index.ts`
- Output: `dist/index.js`
- Bundles all imports, externals: node_modules packages
- Format: ESM

### Critical Constraints

1. **Port 8080 is the only unfirewalled port** - all services must use this port
2. **Pre-commit hook runs full build** - commits will fail if build fails
3. **API routes MUST be prefixed with `/api`** - prevents conflicts with SPA routing
4. **shadcn/ui components are copy/paste** - not installed via npm, located in `client/src/components/ui/`

### Data Layer

**Database**: PostgreSQL via Drizzle ORM
- Schema: `/shared/schema.ts`
- Current: In-memory storage (`MemStorage` in `server/storage.ts`)
- Production-ready: Swap to Drizzle-backed implementation via `IStorage` interface

**Storage Pattern**:
```typescript
interface IStorage {
  // Define methods for data access
}
```
Current implementation uses in-memory storage; swap for persistent storage when needed.

## Deployment

**Trigger**: Push to `main` branch

**Pipeline** (GitHub Actions `.github/workflows/deploy.yml`):
1. Checkout code on self-hosted runner
2. Install dependencies
3. Run `npm run build`
4. Copy `dist/*` to `/home/ubuntu/serverSetup/andydelgado.dev/`
5. Copy `node_modules` (needed for server runtime dependencies)
6. PM2 restart all processes

**Pre-commit Hook** (`.husky/pre-commit`):
- Runs `npm run build` before every commit
- Aborts commit if build fails
- Ensures main branch always has buildable code

## Adding Features

### New API Endpoint
1. Define route in `server/routes.ts`
2. Add data access methods to `server/storage.ts`
3. Update schema in `shared/schema.ts` if needed

### New Frontend Page
1. Create component in `client/src/pages/`
2. Add route in `client/src/App.tsx`
3. Import via `@/pages/*` alias

### New UI Component
- Custom components: `client/src/components/`
- shadcn/ui components: Install via shadcn CLI to `client/src/components/ui/`

### Styling
- Global styles: `client/src/index.css`
- Tailwind config: `tailwind.config.ts`
- Uses Tailwind utility classes + custom animations in index.css
