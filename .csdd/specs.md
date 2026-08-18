# Specifications

> Verdad durable del proyecto. No es historial de trabajo ni backlog.

## Project Summary

Portfolio personal de Desarrollo Web enfocado en mostrar soluciones de negocio, procesos y arquitectura. El flujo de trabajo canónico es **CSDD** (Collaborative Spec-Driven Development) con estado en `.csdd/`.

**Frase guía:**  
"Desarrollo web enfocado en procesos y negocio. Construyo sitios rápidos y e-commerces escalables que entregan resultados reales."

**Objetivo comercial:**  
Convertir el portfolio en una herramienta de confianza para clientes reales — negocios locales, emprendimientos y marcas que necesitan mejorar su presencia digital o simplificar ventas por WhatsApp.

**Prioridad de audiencia:**  
Clientes primero. GitHub y el repo público son respaldo técnico y señal de prolijidad, no el centro del mensaje.

**Tono:**  
Honesto, concreto y orientado a negocio. Sin métricas inventadas ni prueba social forzada. Los proyectos se presentan como productos reales y publicados.

## Requirements

### REQ-001 — Home comercial

La home debe responder rápido: qué hago, para quién, qué problemas resuelvo y cuál es el próximo paso.

Orden esperado de secciones:

1. **Hero:** `h1` con el lema, subtítulo concreto (negocios locales, WhatsApp, catálogo/tienda, confianza digital), CTA a contacto, y columna selected-work (nombres de casos en producción, sin previews).
2. **Trabajos destacados** — prueba visual primero: card featured (captura dominante) + resto compacto; CTA a caso de estudio. Featured pin: `rumbos`.
3. **Oferta** (`ServiceOffer`) — qué puedo hacer por el negocio, en formato corto (landing, catálogo WhatsApp, tienda cuando tenga sentido).
4. **Sobre mí** — background en ingeniería traducido a beneficios del cliente.
5. **Contacto** — WhatsApp como acción principal; expectativa breve post-mensaje (no otro proceso completo).

Prueba antes que explicación: las capturas de trabajo preceden a la oferta de servicios (ver DEC-012). Sin bloque de proceso en home (ver DEC-013).

### REQ-002 — Hero (copy V1.2)

- **H1:** "Desarrollo web enfocado en procesos y negocio."
- **Subtítulo:** negocios locales, ventas por WhatsApp, catálogos/tiendas online, presencia digital confiable. Evitar tono corporativo y frases genéricas en el h1.
- **CTA principal:** "Hablemos de tu proyecto" → `#contacto`.
- **Columna derecha:** selected-work. Nombres reales de casos publicados, cada uno con link a `/proyectos/[slug]`. Sin flecha, sin rule (gutter del grid). Sin previews (DEC-012). Un solo rótulo "Sitios publicados". En mobile se apila bajo el CTA.

### REQ-003 — Casos de estudio MDX

Cada `.mdx` en `/content` debe funcionar como prueba de criterio, no solo descripción técnica.

Cuando sea posible incluir: contexto real del negocio, restricción concreta, decisión tomada, resultado observable, link al sitio en vivo, link al repo como respaldo secundario.

Evitar métricas no verificadas. Preferir lenguaje honesto ("redujo fricción", "centralizó el catálogo", etc.).

Narrativa orientativa del cuerpo: El Problema → La Solución y Arquitectura → El Impacto.

### REQ-004 — ProjectCard orientada a clientes

- Priorizar CTA "Leer caso de estudio".
- "Visitar sitio publicado" como acción secundaria.
- En home: tags/beneficios de negocio, no tech pills.
- Stack técnico y `repoUrl` viven en el detalle del caso.

### REQ-005 — Conversión y contacto

- CTA principal → conversación (no acción técnica).
- WhatsApp es el canal prioritario; Email y LinkedIn secundarios.
- GitHub es señal técnica secundaria y no debe competir con el contacto comercial.
- Tras contactar, la expectativa es: primera charla breve sin compromiso; si una web no tiene sentido, se dice.

### REQ-006 — SEO básico y compartibilidad

SEO avanzado no es prioridad (recomendación / boca a boca). Sí son obligatorios:

- `metadataBase`, title/description, Open Graph / Twitter Card
- Metadata por proyecto, canonical, `sitemap.xml`, `robots.txt`
- Imagen social simple y profesional; favicon propio (`app/icon.svg`)

### REQ-007 — Accesibilidad y mobile

- `lang="es"`, foco visible (`:focus-visible`), contraste suficiente, teclado, `prefers-reduced-motion`
- Header, Hero, cards y Contact cómodos en pantallas chicas
- Skip link y `aria-labelledby` donde corresponda

## Constraints

- **Export estático:** `next.config.ts` con `output: "export"` e `images.unoptimized: true`. Hosting: Cloudflare Pages (`npm run build` → `out/`).
- **Sin CMS/DB en runtime** para el portfolio: solo archivos estáticos.
- **Contenido MDX local** en `/content`; parseo con `gray-matter`; render con `next-mdx-remote/rsc`.
- **Tailwind CSS v4** con tokens en `app/globals.css` (`@theme`), no `tailwind.config.ts`.
- **UI y copy en español** (`lang="es"`). Documentación de repo (README) en inglés.
- **Repo público MIT:** código reutilizable; contenido de marca es personal.
- Dominio propio del portfolio: diferido; `NEXT_PUBLIC_SITE_URL` vía Cloudflare cuando aplique.
- Dominio propio de Felisa: pendiente de la clienta; el caso se apoya en uso real sin disclaimer especial.

## Invariants

- `lib/getProjects.ts` es la única fuente para listar/parsear proyectos (server-side / `fs` en build).
- Clientes primero en el mensaje del sitio; GitHub no desplaza la conversión.
- No inventar métricas ni testimonios.
- Tema oscuro con tokens OKLCH en `tokens.css` (aliases Tailwind `background` / `foreground` / `muted` / `accent` / `accent-hover`); sistema portable en `design.md`.
- Pairing tipográfico Instrument Serif + Geist; headings en roman (sin itálica de display).
- Color de marca del proyecto: acentos tipográficos/bordes/hovers — no fondos que rompan contraste.
- Animaciones condicionadas con `motion-safe` / respeto a `prefers-reduced-motion`.
- Estado durable y coordinación de agentes viven en `.csdd/` (no en `docs/specs.md` / `docs/todo.md` legacy).

## Interfaces and Contracts

### Stack

| Capa | Tecnología |
|------|------------|
| Framework | Next.js (App Router), export estático |
| Contenido | MDX local |
| Estilos | Tailwind CSS v4 |
| Hosting | Cloudflare Pages (`out/`) |

### Carpetas

```
/app          → Rutas (Home, /proyectos/[slug], sitemap, robots, OG, icon)
/components   → UI reutilizable
/content      → Casos de estudio MDX
/lib          → Lógica pura (getProjects, site, imageConfig)
/public       → Assets + `_headers` (Cloudflare)
/scripts      → Mantenimiento (optimize-images)
.csdd/        → Estado CSDD (specs, todo, decisions, handoff, archive)
```

### Frontmatter MDX (obligatorio)

`title`, `client`, `techStack`, `date`, `role`, `liveUrl`

Opcionales: `repoUrl`, `brandColor`, `logoPath`, `logoScale`, `summary`, `impact`, `seoDescription`, `highlights`

### Tokens de color y tipografía (referencia)

Fuente canónica: `tokens.css` + `design.md`. Aliases Tailwind: `background` / `foreground` / `muted` / `accent` / `accent-hover`.

| Token | Valor | Uso |
|-------|-------|-----|
| `paper` / `background` | `oklch(15.5% 0.018 275)` | Fondo principal (dark tint índigo) |
| `ink` / `foreground` | `oklch(93% 0.01 275)` | Texto principal |
| `muted` | `oklch(68% 0.02 275)` | Texto secundario |
| `accent` | `oklch(65% 0.14 275)` | Enlaces, CTAs (índigo afinado) |
| `accent-hover` | `oklch(72% 0.12 275)` | Hover de acentos |

Tipografía: **Instrument Serif** (display / headings) + **Geist Sans** (body / UI) + Geist Mono (outlier opcional). Layout asimétrico Split Studio en home; sin gradient text; CTAs rectangulares (`--radius-sm`), no pills.

### Componentes clave

| Componente | Rol |
|------------|-----|
| Hero | Propuesta de valor + CTA + selected-work |
| ServiceOffer | Oferta de servicios (corta) |
| ProjectCard | Card comercial → caso de estudio (`featured` / `compact`) |
| AboutMinimal | Foto + beneficios al cliente |
| Contact | Conversión WhatsApp-first + expectativa post-mensaje |
| MDXComponents | Estilos del HTML Markdown |

`ProcessOffer` no forma parte de la home (DEC-013); el archivo puede existir sin montarse.

### Deploy y repo

- Build: `npm run build` → `out/`
- `README.md` (EN): objetivo, stack, CSDD, MDX, Cloudflare
- `LICENSE` (MIT)
- `.env.example` documenta `NEXT_PUBLIC_SITE_URL`; `.env*` local en `.gitignore`
- Headers de seguridad/cache en `public/_headers`
