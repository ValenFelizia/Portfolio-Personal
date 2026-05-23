# TODO: Portfolio Personal Next.js

> Hoja de ruta paso a paso. Modificable según surjan nuevas necesidades.

---

## Fase 1: Setup y Configuración Base

- [x] Inicializar proyecto con Next.js (App Router) y Tailwind CSS
- [x] Configurar tipografías base (Geist) en el layout principal
- [x] Configurar variables de colores en `app/globals.css` (Tailwind v4 `@theme`):
  - [x] Fondos oscuros mate (`#111111`)
  - [x] Textos principales en blanco roto / gris claro
  - [x] Colores de acento en azul índigo
- [x] Crear estructura de carpetas: `/components`, `/content`, `/lib`, `/public`

---

## Fase 2: Datos y Lógica (El Motor MDX)

- [x] Instalar dependencias necesarias para procesar MDX (`next-mdx-remote`, `gray-matter`)
- [x] Crear archivos base `rumbos.mdx` y `felisa.mdx` en `/content`
- [x] Estructurar el frontmatter con metadata obligatoria (`title`, `client`, `date`, `role`, `liveUrl`, `repoUrl`)
- [x] Redactar el cuerpo del MDX: El Problema, La Solución y Arquitectura, El Impacto
- [x] Escribir la lógica en `/lib/getProjects.ts` para leer y parsear los archivos MDX

---

## Fase 3: Construcción de Componentes

- [x] Armar componente **Hero** con la frase guía del proyecto
- [x] Construir componente **ProjectCard**:
  - [x] Tarjeta entera como enlace a la URL en vivo
  - [x] Enlace secundario "Leer caso de estudio"
- [x] Armar componente **AboutMinimal** (foto + texto estratégico)
- [x] Crear diccionario **MDXComponents** para estilizar el HTML de Markdown

---

## Fase 3.5: Micro-interacciones (CSS / Tailwind)

- [x] **ProjectCard** — lift & glow al hover (`translate`, `scale`, shadow índigo) + `group-hover` en enlace secundario
- [x] **MDXComponents** — subrayado animado en enlaces (`decoration-transparent` → `indigo-500` al hover)
- [x] **Hero / AboutMinimal** — entrada suave `fade-in-up` (keyframes nativos en `globals.css`)
- [x] Accesibilidad: animaciones condicionadas con `motion-safe` y fallback en `prefers-reduced-motion`

---

## Fase 4: Ensamblado de Rutas

- [x] **Home** (`/app/page.tsx`): Hero + grilla de proyectos + AboutMinimal
- [x] **Detalle de proyecto** (`/app/proyectos/[slug]/page.tsx`):
  - [x] Rutas dinámicas
  - [x] Vista de detalle con MDXComponents

---

## Fase 5: Pulido Final (UX/UI)

- [x] Cargar assets a `/public`: foto de perfil (`profile.webp`) y capturas (`*-preview.webp`, logos en `/logos`)
- [x] **getProjects** — campos opcionales `brandColor`, `logoPath`, `logoScale`
- [x] **ProjectCard** — glow/borde dinámico por marca, logo en preview, fix z-index del enlace secundario
- [x] **Hero** — grid sutil, gradiente en keywords, CTA "Hablemos de tu proyecto"
- [x] Revisar layout: espacio negativo entre secciones
- [x] Testear: ProjectCard, casos de estudio y URLs de repositorios

---

## Fase 6: Navegación y Contacto

- [x] **Header** — sticky, blur, enlaces ancla (`/#proyectos`, `/#sobre-mi`, `/#contacto`)
- [x] **Contact** — tarjetas WhatsApp, Email, LinkedIn, GitHub (sin formulario, lucide-react)
- [x] **Footer** — minimal con stack y año
- [x] Ensamblado en `layout.tsx` (Header + Footer) y `page.tsx` (Contact + IDs de sección)
- [x] CTA del Hero apunta a `#contacto`
- [x] Stagger de entrada en grilla de proyectos
- [x] Smooth scroll + `scroll-padding-top` para header sticky
- [ ] Decidir foto de perfil final vs. placeholder actual
- [ ] Actualizar datos de contacto reales en `lib/site.ts`

---

## Fase 7: Identidad Dinámica MDX

- [x] **Home** — título sutil "Trabajos destacados" sobre la grilla
- [x] **Detalle de proyecto** — cabecera con logo, `--brand-color` en `<article>`, botón volver con ícono Lucide
- [x] **MDXComponents** — acentos dinámicos en enlaces, blockquotes, títulos y listas (solo detalles, no fondos)
- [x] Contraste accesible: color de marca reservado para bordes, hovers y acentos tipográficos

---

## Deploy — Cloudflare Pages (V1.0)

> Seguimiento del deployment, separado de las fases de desarrollo.

### Paso 1: Export estática de Next.js

- [x] `next.config.ts` — `output: "export"` para generación de HTML estático
- [x] `next.config.ts` — `images.unoptimized: true` (compatible con hosting estático)
- [x] Mantener `transpilePackages: ["next-mdx-remote"]`
- [ ] Commit y push a GitHub
- [ ] Configurar proyecto en Cloudflare Pages (build + output directory)
