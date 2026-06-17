# Front-End Developer Assessment

A React + TypeScript single-page app built with Vite and styled with Tailwind CSS.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** — dev server & build tool
- **Tailwind CSS** — utility-first styling (dark mode via `class` strategy)
- **React Router** — client-side routing
- **Framer Motion** — page transition animations
- **Axios** — HTTP client
- **Lucide React** — icon set

## Project Structure

```
src/
├── components/
│   ├── layout/        # App-wide layout pieces (Navbar)
│   └── ui/             # Reusable primitives (Button, Card)
├── context/            # React context providers (ThemeContext)
├── hooks/              # Reusable hooks (useFetch)
├── pages/              # One folder per route/page
│   ├── Dashboard/
│   ├── Pricing/
│   ├── Profile/
│   └── UpgradePlan/
├── routes/              # Route definitions (AppRoutes)
├── services/            # API client setup (axios instance)
├── types/               # Shared/domain TypeScript types, one file per domain
├── utils/                # Constants and small helpers (e.g. cn())
└── main.tsx              # App entry point
```

### Conventions

- Each page lives in its own folder under `src/pages/<PageName>/`.
- Reusable UI primitives live in `src/components/ui/` and are composed into pages — prefer reusing `Button`/`Card` over writing new markup.
- Component-local prop types are declared in the component file itself as `Props`; types shared across files live in `src/types/`.
- Styling is done exclusively with Tailwind utility classes — no inline `style` attributes or extra CSS files beyond `src/index.css` (Tailwind's entry point).
- Path alias `@/` maps to `src/` (configured in `tsconfig.json` and `vite.config.ts`).

## Getting Started

```bash
npm install
cp .env.example .env   # adjust VITE_API_BASE_URL / VITE_APP_NAME as needed
npm run dev
```

The app runs at `http://localhost:5173` by default.

## Scripts

| Script              | Description                                      |
| -------------------- | ------------------------------------------------ |
| `npm run dev`         | Start the Vite dev server                         |
| `npm run build`       | Type-check (`tsc --noEmit`) and build for production |
| `npm run preview`     | Preview the production build locally              |
| `npm run typecheck`   | Run TypeScript type-checking only                  |
| `npm run lint`        | Lint `.ts`/`.tsx` files with ESLint                |
| `npm run lint:fix`    | Lint and auto-fix                                  |
| `npm run format`      | Format `.ts`/`.tsx`/`.css` files with Prettier      |

## Environment Variables

| Variable               | Description                  |
| ----------------------- | ----------------------------- |
| `VITE_API_BASE_URL`      | Base URL used by the Axios client (`src/services/api.ts`) |
| `VITE_APP_NAME`          | Display name used in `src/utils/constants.ts` |

## Routes

| Path                       | Page         |
| --------------------------- | ------------ |
| `/`                          | Dashboard    |
| `/pricing`                   | Pricing      |
| `/profile`                   | Profile      |
| `/profile/upgrade-plan`      | Upgrade Plan |
