# Portfolio Personal — Valentín Felizia

A client-first portfolio for a freelance web developer (myself). The live site showcases real projects and case studies; this repository is the open-source implementation. If you want to contribute, feel free to send a PR :)

**Live site:** [portfolio-vfelizia.pages.dev](https://portfolio-vfelizia.pages.dev)

---

## Goals

- **For my potential clients:** explain what I do, how and who I work with, and how to start a conversation (WhatsApp-first in my case).
- **For developers:** a clear static Next.js setup, MDX-driven case studies that are easy to add (the site is built on being modular), and spec-driven workflow (`docs/specs.md`, `docs/todo.md`).

The UI and copy are in **Spanish** (`lang="es"`). I don't plan to translate it yet. Documentation in this repo is in **English**.

---

## Stack


| Layer     | Technology                                                                                                                                                                                                                                                          |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Framework | [Next.js 16](https://nextjs.org) (App Router, static export). NOTE: It was originally planned to be Astro, but I had experience already with Next.js. Astro however feels like the right thing to work with regarding static, content-heavy sites like a portfolio. |
| Content   | Local `.mdx` files + [gray-matter](https://github.com/jonschlinkert/gray-matter)                                                                                                                                                                                    |
| Rendering | [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) (RSC)                                                                                                                                                                                               |
| Styling   | [Tailwind CSS v4](https://tailwindcss.com) (`@theme` in `app/globals.css`)                                                                                                                                                                                          |
| Icons     | [lucide-react](https://lucide.dev)                                                                                                                                                                                                                                  |
| Hosting   | [Cloudflare Pages](https://pages.cloudflare.com) (static `out/`)                                                                                                                                                                                                    |


---

## Architecture (SDD)

This project follows **Spec-Driven Development (SDD)**:

1. **`docs/specs.md`** — product and technical source of truth.
2. **`docs/todo.md`** — phased implementation checklist.

### Folder structure

```
app/              Routes (home, /proyectos/[slug], sitemap, robots, OG image)
components/       UI blocks (Hero, ProjectCard, Contact, etc.)
content/          Case study MDX files
lib/              Server-only data (getProjects, site config, image config)
public/           Static assets (previews, logos, _headers for Cloudflare)
scripts/          Maintenance scripts (image optimization)
```

### Data flow

1. `lib/getProjects.ts` reads `.mdx` files from `/content` at build time.
2. The home page lists projects via `ProjectCard`.
3. `/proyectos/[slug]` renders the MDX body with `MDXComponents`.

There is no runtime database or CMS for the portfolio itself—only static files. Didn't feel like the right thing to do if the site is going to be run by actual developers.

---

## Getting started

### Prerequisites

- Node.js 20+
- npm

### Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build (static export)

```bash
npm run build
```

Output is written to `out/`. This matches the Cloudflare Pages production build.

### Other scripts


| Script                    | Purpose                                                   |
| ------------------------- | --------------------------------------------------------- |
| `npm run lint`            | ESLint                                                    |
| `npm run optimize-images` | Compress `profile.webp` and `*-preview.webp` in `/public` |


Run `optimize-images` after adding or replacing preview images. Dimensions are documented in `lib/imageConfig.ts`.

---

## Environment variables

Create `.env.local` from the example (optional for local dev):

```bash
cp .env.example .env.local
```


| Variable               | Purpose                                                               |
| ---------------------- | --------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Public site URL for metadata, sitemap, canonical URLs, and Open Graph |


**Cloudflare Pages:** set `NEXT_PUBLIC_SITE_URL` in **Settings → Environment variables** (Production) to your `*.pages.dev` URL or custom domain, then redeploy. It is injected at **build time**.

---

## Adding a new case study

1. **Create** `content/your-slug.mdx` with required frontmatter:

```yaml
---
title: "Project title"
client: "Client or product name"
date: "2026"
role: "Fullstack"
liveUrl: "https://..."
techStack: "Next.js, Tailwind CSS"
---
```

Optional fields: `brandColor`, `logoPath`, `logoScale`, `impact`, `summary`, `seoDescription`, `highlights`, `repoUrl` (solo si el proyecto es open source y querés mostrar el repo en el caso de estudio).

1. **Write** the body with sections such as `## El Problema`, `## La Solución y Arquitectura`, `## El Impacto`.
2. **Add assets** in `/public`:
  - `your-slug-preview.webp` (project screenshot)
  - `logos/your-slug.svg` if needed
3. **Run** `npm run optimize-images`.
4. **Verify** with `npm run build` — the route `/proyectos/your-slug` is generated automatically.

---

## Deploy on Cloudflare Pages


| Setting                | Value           |
| ---------------------- | --------------- |
| Build command          | `npm run build` |
| Build output directory | `out`           |
| Node version           | 20+             |


Security and cache headers for static assets are defined in `public/_headers`.

---

## Audience and open source

- **Clients** are the primary audience on the live site.
- **GitHub** is a secondary channel: proof of clean code, SDD workflow, and how case studies are authored.

This repository is public under the [MIT License](LICENSE). The design and copy reflect a personal brand; reuse the code freely. I'm not going to ask you to mention me in your project, but it's appreciated anyway if you decide to do so.

---

## Related docs

- [`docs/specs.md`](docs/specs.md) — full technical and product specification (Spanish)
- [`docs/todo.md`](docs/todo.md) — implementation roadmap and phase checklist

