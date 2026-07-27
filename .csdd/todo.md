# TODO

> Estado operativo actual. No acumular historial de fases — ver `.csdd/archive/`.

## In Progress

- [ ] T-004 — Caso FORVEX (MDX + assets + home)
  - Owner: valen
  - Agent: cursor/forvex-case
  - Scope: `content/forvex.mdx`, `public/` (preview/logo), `app/page.tsx` (orden featured/compact si aplica), frontmatter/SEO del caso
  - Updated: 2026-07-27
  - Target: development
  - Note: Emprendimiento Valen + Mauro (ex jefe Ing. Procesos Renault). Ofrece ingeniería de procesos, automatizaciones y software a PyMEs cordobesas. Landing en etapas finales: https://forvex-landing-page.vercel.app/ — dominio propio pendiente (como Felisa: sin disclaimer especial). Preview/captura + caso MDX completo (problema → solución → impacto) + card en home. No inventar métricas.
  - Depends: assets de captura/logo si hace falta generarlos desde el deploy Vercel

## Ready to Land

<!-- Vacío -->

## Blocked

<!-- Vacío -->

## Pending

<!-- Vacío -->

## Deferred

<!-- Vacío -->

## Recently Completed

Retention: 5

- [x] T-003 — Pulido visual home (Hallmark + proof-first)
  - Owner: valen
  - Agent: cursor/hallmark-t003
  - Scope: released
  - Updated: 2026-07-27
  - Note: Design system OKLCH + Instrument/Geist; home proof-first (Rumbos featured); Oferta corta; ProcessOffer fuera de home (DEC-013).
- [x] T-002 — Verificación final V1.2
  - Owner: valen
  - Agent: cursor/csdd-v12-verify
  - Scope: released
  - Updated: 2026-07-15
  - Note: Lint+build OK; prod 200 en `/`, casos, sitemap, robots, OG, favicon/icon; links externos OK (LinkedIn 999 solo a bots); home sin repetición estructural; mobile OK; deploy Cloudflare live.
- [x] T-001 — Migrar workflow a CSDD (`.csdd/`)
  - Owner: valen
  - Agent: cursor/csdd-init
  - Scope: released
  - Updated: 2026-07-13
  - Note: Specs/decisions/todo/handoff/archive creados; docs legacy redirigen; README y AGENTS apuntan a `.csdd/`.
- [x] T-000 — Cierre de implementación V1.2 (Fases 15–20)
  - Owner: valen
  - Scope: released
  - Updated: 2026-06-27
  - Note: Bugs públicos, Hero, menos repetición, cards comerciales, casos/confianza, ServiceOffer. Detalle en `archive/2026-06-v1-2-conversion-trust.md`.
