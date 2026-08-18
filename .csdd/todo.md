# TODO

> Estado operativo actual. No acumular historial de fases; ver `.csdd/archive/`.

## In Progress

<!-- Vacío -->

## Ready to Land

<!-- Vacío -->

## Blocked

<!-- Vacío -->

## Pending

- [ ] T-005 — Revisar composición derecha del Hero (flecha + separador)
  - Owner: valen
  - Updated: 2026-08-17
  - Note: El aside derecho (`components/Hero.tsx`, `md+`) es decorativo (`aria-hidden`): flecha `→` grande en accent que no apunta a nada, `border-l` con `--color-rule`, y copy de formato. Valen: la flecha no cierra; revisar también el separador y toda la columna. No prescribir layout. Mantener Split Studio / diptych (DEC-011, `design.md`); no meter previews en el Hero (DEC-012). Copy izquierdo y CTA `#contacto` (REQ-002) no están en duda. Si la composición cambia de forma durable, actualizar REQ-002 / `design.md`.

- [ ] T-006 — CTA «Hablemos» de la Nav no lleva a Contacto
  - Owner: valen
  - Updated: 2026-08-17
  - Note: Bug reportado en home: el CTA del Header no scrollea a Contacto. `Header` usa `next/link` `href="/#contacto"`; el destino `id="contacto"` existe en `Contact` (`scroll-mt-24`). El CTA del Hero usa `<a href="#contacto">` nativo. Mismo patrón `Link`+hash en Footer (`/#proyectos`, `/#sobre-mi`, `/#contacto`) y en el caso MDX. Hipótesis: App Router no hace scroll en navegación same-route con hash. Alcance reportado: Nav. Si el arreglo es el patrón de anclas, cubrir Footer/casos en el mismo cambio. Contrato: REQ-005 + nav N9 (`design.md`).

## Deferred

<!-- Vacío -->

## Recently Completed

Retention: 5

- [x] T-007 — Sacar em dashes de textos públicos
  - Owner: valen
  - Agent: cursor/copy-emdash
  - Scope: released
  - Updated: 2026-08-17
  - Note: Copy del sitio (Footer, ServiceOffer, OG alt) y README. IDs CSDD (`T-nnn —`) se mantienen por contrato.
- [x] T-004 — Caso FORVEX (MDX + assets + home)
  - Owner: valen
  - Agent: cursor/forvex-case
  - Scope: released
  - Updated: 2026-07-28
  - Note: Caso + preview + logo; compact Felisa | FORVEX; liveUrl Vercel; copy revisado por Valen.
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
