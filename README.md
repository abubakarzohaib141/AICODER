# AI Coders — aicoders.dev

The official website for **AI Coders** — an AI engineering studio building AI agents, agentic systems, business automation and AI-powered products.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
- Space Grotesk, Inter and JetBrains Mono via `next/font`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/                Routes (App Router)
components/
  layout/           Header, footer, mobile navigation
  ui/                Shared UI primitives (Button, Tag, Logo, PageHero, ...)
  home/              Homepage sections
  system/            The animated system-flow diagram
  contact/           Contact form
lib/content/         Structured content: products, case studies, team, services,
                     technologies, FAQs, and site-wide config — edit these files
                     to update copy without touching components.
```

## Editing content

Product, case study, team and FAQ data live in `lib/content/*.ts`. Add or edit an
entry there and the corresponding list and detail pages update automatically —
no component changes required.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — ESLint
