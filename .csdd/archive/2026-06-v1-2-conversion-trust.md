# V1.2 — Conversión y confianza

- Period: ~2026-06-20 → 2026-07-15
- Outcome: Fases 15–20 implementadas y verificación final (T-002 / Fase 21) cerrada.

## Objective

Corregir fricciones que hacían el portfolio repetitivo, un poco verde o demasiado técnico para clientes no técnicos.

## Outcome

- Bugs públicos auditados: sitemap/OG OK en producción; favicon propio; LinkedIn URL; CI lint+build; docs/AGENTS alineados (pre-CSDD).
- Hero acortado al lema; subtítulo concreto.
- Menos repetición: ProcessOffer único; Contact solo expectativa post-mensaje.
- Cards con beneficios de negocio; stack/repo en detalle.
- Casos: Felisa sin disclaimer de dominio; Rumbos con impacto más concreto; `seoDescription`.
- `ServiceOffer` en home; Cómo trabajo debajo de proyectos; favicon SVG + redirect Cloudflare.

## Verification (T-002, 2026-07-15)

- `npm run lint` y `npm run build` OK; artefactos en `out/` (sitemap, robots, opengraph-image, icon.svg, rutas de proyectos).
- Producción Cloudflare: 200 en home, casos, sitemap.xml, robots.txt, opengraph-image, favicon/icon.
- Links: WhatsApp, email, GitHub, repos, Felisa y 787 Rumbos OK. LinkedIn responde 999 a requests automatizados (anti-bot); URL canónica correcta.
- Home: estructura no repetitiva (Oferta → proyectos → Cómo trabajo → Contact expectativa corta). Mobile ~390px: nav, hero y CTA legibles.
- Deploy live en `portfolio-vfelizia.pages.dev`.

## Related

- DEC-005, DEC-006, DEC-007, DEC-008, DEC-009
- T-002 released
