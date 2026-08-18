# Design — Portfolio Valentín Felizia

A locked design system for this app. Every page redesign reads this file before
emitting code. Do not regenerate per page — extend or amend this file when the
system needs to grow.

## Genre

editorial

## Macrostructure family

- Marketing pages (home): Split Studio, diptychs text/proof, left-biased heads, no centred marketing stacks
- Home Hero: lema + CTA on the left; selected-work names on the right (links to cases). Gutter only, no rule, no arrow, no screenshots (DEC-012)
- Home section order (proof-first): Hero → Trabajos (featured + compact) → Oferta corta → Sobre mí → Contacto
- No ProcessOffer on marketing home (DEC-013)
- Content pages (`/proyectos/[slug]`): Long Document within the same type/colour/CTA voice
- App pages: n/a (static portfolio)

## Theme (custom · indigo precisado)

Vibe: "indigo preciso, editorial técnico, negocio local"

- `--color-paper`   oklch(15.5% 0.018 275)
- `--color-paper-2` oklch(20% 0.02 275)
- `--color-ink`     oklch(93% 0.01 275)
- `--color-ink-2`   oklch(78% 0.02 275)
- `--color-muted`   oklch(68% 0.02 275)
- `--color-rule`    oklch(32% 0.02 275)
- `--color-accent`  oklch(65% 0.14 275)
- `--color-accent-hover` oklch(72% 0.12 275)
- `--color-focus`   oklch(72% 0.14 275)

Legacy aliases (Tailwind): `--background` ← paper, `--foreground` ← ink, `--muted`, `--accent`, `--accent-hover`.

Axes: dark / classical-serif-display / cool (indigo ~275°)

## Typography

- Display: Instrument Serif, weight 400, roman only on headings
- Body: Geist Sans
- Mono / outlier: Geist Mono — ≤ 2 uses (optional small labels); not a third surface
- Display tracking: -0.02em on large heads
- Type scale anchor: `--text-display` = clamp(2.5rem, 5vw + 1rem, 4.25rem)

## Spacing

4-point named scale in `tokens.css`. Prefer named tokens over raw Tailwind spacing when adding new layout.

## Motion

- Easings: `--ease-out`, `--ease-in`, `--ease-in-out` (named cubic-beziers)
- Reveal: one orchestrated hero fade+slide; elsewhere static
- Reduced-motion: opacity-only ≤ 150ms; no layout motion

## Microinteractions stance

- silent success
- hover delay 800ms on tooltips if added; focus 0ms
- CTA hover: border/background lift only (`transform`/`opacity`), no bounce

## CTA voice

- Primary: outlined rect with slight radius (`--radius-sm`), accent border at low opacity fill — **not** pill
- Secondary: text + arrow, underline on hover
- Copy pattern: conversational Spanish ("Hablemos de tu proyecto")

## Nav / Footer

- Nav: N9 Edge-aligned — wordmark left, single CTA right
- Footer: Ft6 Letter close — short signoff + open-source PS

## Per-page allowances

- Marketing pages MAY use Tier-A CSS restraint only (hairlines, gutters) — no gradient text, no aurora blobs
- Content pages: typography + brand accent from project frontmatter
- No invented metrics or testimonials

## What pages MUST share

- Wordmark "Valentín Felizia"
- Accent indigo placement ≤ ~5% of viewport
- Instrument Serif + Geist pairing
- CTA voice (shape, radius, padding rhythm)
- Left-biased section heads (no eyebrow spam)

## What pages MAY differ on

- Macrostructure within family (home Split Studio vs case Long Document)
- Project `brandColor` accents on cards/case pages only
