# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website (andydelgado.dev) built as a static React SPA, deployed to Cloudflare Pages.

## Development Commands

```bash
npm run dev          # Start Vite development server with HMR
npm run build        # Build static site to dist/
npm run preview      # Preview production build locally
npm run check        # TypeScript type checking only (no compilation)
```

## Architecture

### Stack
- **Frontend**: React 18.3 + TypeScript + Vite + Wouter (routing) + TanStack Query + Tailwind CSS + shadcn/ui
- **Build**: Vite
- **Deployment**: Cloudflare Pages (GitHub integration)

### Directory Structure
```
client/             # Frontend React app
  src/
    components/     # React components
      ui/           # shadcn/ui components (copy/paste, not npm)
    pages/          # Route components (Home, NotFound)
    hooks/          # Custom React hooks
    lib/            # Utilities (queryClient, cn helper)
  public/           # Static assets copied to dist/
    _redirects      # Cloudflare Pages SPA routing config
dist/               # Build output (deployed to Cloudflare Pages)
```

### TypeScript Path Aliases
```typescript
"@/*" → "./client/src/*"       // Frontend components, hooks, etc.
"@assets/*" → "./attached_assets/*"  // Static assets
```

### Build System

**Vite Build**:
- Entry: `client/index.html`
- Output: `dist/`
- Plugins: React, runtime error overlay, shadcn theme

### Critical Constraints

1. **Pre-commit hook runs full build** - commits will fail if build fails
2. **shadcn/ui components are copy/paste** - not installed via npm, located in `client/src/components/ui/`
3. **Static site only** - no server-side code, all content is client-rendered

## Deployment

**Platform**: Cloudflare Pages

**Setup** (one-time in Cloudflare Dashboard):
1. Connect GitHub repository
2. Build command: `npm run build`
3. Build output directory: `dist`
4. Node version: 20

**Automatic Deploys**: Push to `main` branch triggers Cloudflare Pages build and deploy.

**SPA Routing**: `client/public/_redirects` ensures all routes serve `index.html` for client-side routing.

**Pre-commit Hook** (`.husky/pre-commit`):
- Runs `npm run build` before every commit
- Aborts commit if build fails
- Ensures main branch always has buildable code

## Adding Features

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

### Adding Dynamic Data / API
If you need to add server-side functionality in the future:
- Use Cloudflare Workers or Cloudflare Pages Functions
- Or integrate with external APIs directly from the client
