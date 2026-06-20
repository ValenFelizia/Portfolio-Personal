<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Portfolio Personal — Guía para agentes(desactualizada parcialmente, estas instrucciones son de cuando iniciamos el proyecto en Mayo)

Referencia principal: `docs/specs.md`. Hoja de ruta: `docs/todo.md`. Respetar las fases activas en `docs/todo.md` (actualmente V1.2).

## Contexto del desarrollador

- Priorizar código claro, explicaciones didácticas cuando se pida contexto.
- Al introducir conceptos nuevos (MDX, server-only, tipos, etc.), explicar el *por qué* además del *qué*.
- Evitar sobre-ingeniería; preferir soluciones directas que sirvan para aprender y escalar después.

## Stack y convenciones

- **Next.js 16** App Router, **Tailwind CSS v4** (`@theme` en `app/globals.css`, no `tailwind.config.ts`).
- **Contenido:** archivos `.mdx` locales en `/content`.
- **Datos:** `/lib/getProjects.ts` — única fuente para listar proyectos. Solo server-side (`fs`).
- **Render MDX (Fase 4+):** `next-mdx-remote/rsc` con el `content` devuelto por `getProjects()`.
- **Parseo frontmatter:** `gray-matter` (lectura de archivos). `next-mdx-remote` es para render, no para parsear metadata.

## Frontmatter obligatorio (cada `.mdx`)

`title`, `client`, `techStack`, `date`, `role`, `liveUrl`, `repoUrl`

## Cuerpo MDX (casos de estudio)

Headings esperados: `## El Problema`, `## La Solución y Arquitectura`, `## El Impacto`

## Diseño

- Tema oscuro, tokens: `background`, `foreground`, `muted`, `accent`, `accent-hover`.
- Tipografía: Geist Sans (layout principal).
- Espacio negativo generoso; evitar ruido visual.

## Frase guía (Hero)

**H1 (V1.2):** "Desarrollo web enfocado en procesos y negocio."

**Subtítulo:** negocios locales, ventas por WhatsApp, catálogos/tiendas online, presencia digital confiable. Evitar tono corporativo ni frases genéricas ("vender mejor", "web rápida y fácil de usar") en el h1.

## Idioma

UI y contenido en **español** (`lang="es"` en layout).

## Performance y assets

- Dimensiones de referencia en `lib/imageConfig.ts`.
- Al agregar o reemplazar `profile.webp` o `*-preview.webp` en `/public`, correr `npm run optimize-images`.
- Imágenes below-the-fold: `loading="lazy"`; primera card de proyectos puede usar `priorityImage`.
- Headers de seguridad y cache en `public/_headers` (Cloudflare Pages).
