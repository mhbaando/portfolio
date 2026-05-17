# AGENTS.md

## Stack

- **Next.js 13.5.4** (App Router, RSC enabled)
- **React 18**, TypeScript strict mode
- **Tailwind CSS 3** with `tailwindcss-animate`, dark mode via CSS class
- **shadcn/ui** — component sources live in `components/ui/`
- **Framer Motion** for animations
- **Font**: Poppins (latin-ext), not Inter (README is stale)

## Commands

```bash
yarn dev          # next dev on localhost:3000
yarn build        # next build
yarn start        # next start (production)
yarn lint         # ESLint (next/core-web-vitals)
```

## Architecture

```
app/                  # Next.js App Router pages
components/           # Feature components (hero, about, experience, etc.)
components/ui/        # shadcn/ui primitives (Button)
lib/utils.ts          # cn() = twMerge + clsx
```

- `@/*` path alias maps to repo root (`./*`), not `src/`.
- No `src/` directory — all source at root level.
- The `blog/` component is a TODO stub, not wired into the main page.
- `layout.tsx` forces `dark` class on `<html>`, so the site is always dark mode regardless of system preference.

## Package manager

Yarn is primary (`yarn.lock`, `.yarnrc.yml`), using `node-modules` linker (not PnP). A `bun.lock` also exists — do not introduce a third lockfile.

## Styling conventions

- CSS custom properties (`hsl(var(--...))`) for theming — defined in `app/globals.css` under `:root` and `.dark`.
- The `cn()` helper from `lib/utils.ts` merges Tailwind classes. Always use it instead of manual string concatenation.
- shadcn/ui `components.json` configured with RSC + TSX + CSS variables, zinc base color.

## Testing

No test framework is configured. There are no test files.

## CI/CD

No CI workflows configured.
