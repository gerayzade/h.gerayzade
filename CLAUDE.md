# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site for Heydar Gerayzade. Single-page, content-driven.

Stack: Nuxt 4 · Vue 3 · Vite · TypeScript · Tailwind CSS 3. PWA via `@vite-pwa/nuxt`.

Deployed to Vercel via Nitro's `vercel` preset, pinned to Node 22.x runtime in `nuxt.config.ts`.

## Commands

Package manager is npm (`package-lock.json`).

- `npm run dev` — dev server on port 3000
- `npm run build` — production build (Vercel output)
- `npm run generate` — fully static prerender
- `npm run preview` — serve the production build on port 3000
- `npm run typecheck` — `vue-tsc` type check (no build-time type checking by default)

There are no test or lint scripts.

## Architecture notes

- Source root is `src/` (Nuxt's `srcDir`).
- Routing: file-based under `src/pages/`. Single page (`index.vue`).
- Layout: `src/layouts/default.vue` wraps every page; mounts `<main>` with `<slot />`. The wrapper is `display: none` until 500ms after mount to give the SW a beat to register and to keep entry animations from firing during hydration.
- Components in `src/components/` are auto-imported by Nuxt — use directly without imports.
- Composables in `src/composables/` are also auto-imported. `useTypewriter` reproduces the original Svelte typewriter transition.
- Static assets live in `public/` (favicon, manifest, browserconfig, hero image).

## Path aliases

- `~` and `@` both resolve to `src/` (Nuxt's `srcDir`).
- Use `@/utils/...`, `@/components/...`, etc.

## Tailwind

Custom breakpoints in `tailwind.config.ts` extend the default scale:
`2xs: 360`, `xs: 640`, then `sm/md/lg/xl/2xl` ending at `1920`. Use these named breakpoints rather than arbitrary values when adding responsive styles.

A custom `dropShadow.indigo` utility renders 4-corner indigo-600 offsets — used for the hero image glow.
