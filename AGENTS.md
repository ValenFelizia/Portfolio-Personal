<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Portfolio Personal — Guía para agentes

Referencia principal: `specs.md`. Hoja de ruta: `todo.md`. Respetar las fases: no adelantar UI (Fase 3+) ni rutas (Fase 4+) si la tarea actual es de datos o setup.

## Contexto del desarrollador

- Valentín está **aprendiendo** — este portfolio es su **tercera página web**.
- Priorizar código claro, explicaciones didácticas cuando se pida contexto, y decisiones fáciles de entender.
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

"Desarrollo web enfocado en procesos y negocio. Construyo sitios rápidos y e-commerces escalables que entregan resultados reales."

## Idioma

UI y contenido en **español** (`lang="es"` en layout).
