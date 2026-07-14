# V1.0 — Foundation del portfolio

- Period: ~2026-05
- Outcome: Portfolio Next.js estático con MDX, UI base y deploy en Cloudflare Pages.

## Objective

Levantar el sitio desde cero: stack, casos MDX, componentes, rutas y publicación estática.

## Outcome

- Next.js App Router + Tailwind v4 + tipografía Geist + tokens oscuros.
- Motor MDX (`content/`, `lib/getProjects.ts`, `next-mdx-remote`).
- Componentes: Hero, ProjectCard, AboutMinimal, MDXComponents; micro-interacciones con `motion-safe`.
- Rutas: `/` y `/proyectos/[slug]`.
- Assets en `/public`; Header, Contact, Footer; identidad dinámica por marca en MDX.
- Deploy: `output: "export"`, `images.unoptimized`, Cloudflare Pages → `out/`.

## Related

- Specs actuales: `.csdd/specs.md`
- Decisión de hosting: DEC-004
