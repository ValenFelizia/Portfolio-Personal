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

1. **Hero** — `h1` con el lema, subtítulo concreto (negocios locales, WhatsApp, catálogo/tienda, confianza digital) y CTA a contacto.
2. **Oferta** (`ServiceOffer`) — qué puedo hacer por el negocio (landing, catálogo WhatsApp, tienda cuando tenga sentido).
3. **Trabajos destacados** — cards con foco en caso de estudio e impacto de negocio.
4. **Cómo trabajo** (`ProcessOffer`) — único bloque de proceso.
5. **Sobre mí** — background en ingeniería traducido a beneficios del cliente.
6. **Contacto** — WhatsApp como acción principal; expectativa breve post-mensaje (no otro proceso completo).

### REQ-002 — Hero (copy V1.2)

- **H1:** "Desarrollo web enfocado en procesos y negocio."
- **Subtítulo:** negocios locales, ventas por WhatsApp, catálogos/tiendas online, presencia digital confiable. Evitar tono corporativo y frases genéricas en el h1.
- **CTA principal:** "Hablemos de tu proyecto" → `#contacto`.

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
- Tema oscuro con tokens `background`, `foreground`, `muted`, `accent`, `accent-hover`.
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

### Tokens de color (referencia)

| Token | Valor | Uso |
|-------|-------|-----|
| `background` | `#111111` | Fondo principal |
| `foreground` | `#e5e5e5` | Texto principal |
| `muted` | `#a3a3a3` | Texto secundario |
| `accent` | `#6366f1` | Enlaces, CTAs |
| `accent-hover` | `#818cf8` | Hover de acentos |

Tipografía: Geist Sans. Layout con espacio negativo generoso.

### Componentes clave

| Componente | Rol |
|------------|-----|
| Hero | Propuesta de valor + CTA |
| ServiceOffer | Oferta de servicios |
| ProjectCard | Card comercial → caso de estudio |
| ProcessOffer | Único bloque de proceso |
| AboutMinimal | Foto + beneficios al cliente |
| Contact | Conversión WhatsApp-first |
| MDXComponents | Estilos del HTML Markdown |

### Deploy y repo

- Build: `npm run build` → `out/`
- `README.md` (EN): objetivo, stack, CSDD, MDX, Cloudflare
- `LICENSE` (MIT)
- `.env.example` documenta `NEXT_PUBLIC_SITE_URL`; `.env*` local en `.gitignore`
- Headers de seguridad/cache en `public/_headers`
