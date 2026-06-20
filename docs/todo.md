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
- [x] Decidir foto de perfil final vs. placeholder actual
- [x] Actualizar datos de contacto reales en `lib/site.ts`

---

## Fase 7: Identidad Dinámica MDX

- [x] **Home** — título sutil "Trabajos destacados" sobre la grilla
- [x] **Detalle de proyecto** — cabecera con logo, `--brand-color` en `<article>`, botón volver con ícono Lucide
- [x] **MDXComponents** — acentos dinámicos en enlaces, blockquotes, títulos y listas (solo detalles, no fondos)
- [x] Contraste accesible: color de marca reservado para bordes, hovers y acentos tipográficos

---

## V1.1: Auditoría Comercial y Pulido Público

> Nueva etapa posterior a la V1.0. Objetivo: convertir el portfolio en una herramienta comercial más clara para clientes reales, sin perder la prolijidad técnica necesaria para publicarlo como repo.

### Fase 8: Posicionamiento Comercial de la Home

- [x] **Hero** — convertir la frase principal en un `h1` claro, específico y orientado a clientes
- [x] **Hero** — agregar subtítulo que explique para quién trabajo (negocios locales, WhatsApp, presencia digital)
- [x] **Hero** — mantener CTA principal hacia contacto
- [x] **Home** — agregar sección breve de oferta o proceso (`ProcessOffer.tsx`)
- [x] **AboutMinimal** — reescribir el texto orientado a beneficios del cliente
- [x] **Home** — intro honesta bajo "Trabajos destacados"

### Fase 9: Casos de Estudio con Evidencia Observable

- [x] **Felisa** y **787 Rumbos** — MDX reforzado con dolores y evidencia observable
- [x] **MDX** — restricción, decisión, resultado y mejora del día a día; tono sin métricas inventadas
- [x] **Detalle de proyecto** — links a sitio en producción + CTA final de contacto
- [x] **ProjectCard** — prioridad al caso de estudio + línea `impact` en frontmatter

### Fase 10: Conversión y Contacto

- [x] **Contact** — WhatsApp destacado en grid + mensaje prellenado (`getWhatsAppUrl`)
- [x] **Contact** — bloque "Después de escribirme" debajo del grid
- [x] **Contact** — GitHub permanece en grid; footer sin links secundarios (decisión de diseño)
- [x] **Header** — ajustes mobile (Fase 10)

### Fase 11: SEO Básico y Social Preview

- [x] **Metadata global**, home, `generateMetadata` por proyecto, canonical, sitemap, robots
- [x] **Social preview** — `opengraph-image.tsx` tipográfico + previews en proyectos
- [x] **Dominio** — diferido; `NEXT_PUBLIC_SITE_URL` en Cloudflare

### Fase 12: Accesibilidad, Mobile y Calidad Técnica

- [x] **Accesibilidad** — skip link, `aria-labelledby`, `:focus-visible`
- [x] **UI** — `py-20` en Contact; mobile revisado en fases previas
- [x] **Performance** — Lighthouse ~95/96/100; `optimize-images` + lazy loading
- [x] **Seguridad** — `public/_headers` (sin CSP conservadora)
- [x] **404** — `app/not-found.tsx`

### Fase 13: Repo Público y Documentación

- [x] **README** — documentación en inglés: objetivo, stack, SDD, MDX, deploy Cloudflare
- [x] **README** — prioriza clientes en el sitio; GitHub como respaldo técnico
- [x] **Repo público** — eliminados `vercel.svg`, `file.svg`, `window.svg`
- [x] **Repo público** — `LICENSE` (MIT) + nota de marca en README
- [x] **Specs** — §10 actualizado para repo público
- [x] **Todo** — checklist V1.1 sincronizado
- [x] **`.gitignore`** — `.env.example` permitido; `.cursor/`, reportes Lighthouse ignorados

### Fase 14: Verificación Final V1.1

- [x] Ejecutar lint
- [x] Ejecutar build estático
- [x] Verificar rutas:
  - [x] `/`
  - [x] `/proyectos/felisa`
  - [x] `/proyectos/rumbos`
- [x] Verificar links externos:
  - [x] WhatsApp
  - [x] Email
  - [x] LinkedIn
  - [x] GitHub
  - [x] Sitios en producción
  - [x] Repositorios
- [x] Verificar mobile manualmente
- [x] Verificar metadata al compartir la URL
- [x] Deploy final en Cloudflare Pages
- [x] Actualizar `todo.md` marcando tareas completadas

---

## V1.2: Pulido Final de Conversión y Confianza

> Segunda auditoría posterior a V1.1. Objetivo: corregir fricciones finas que todavía hacen que el portfolio se sienta un poco verde, repetitivo o demasiado técnico para clientes no técnicos.

### Notas de decisión

- **Footer:** mantener la idea actual. El link open source en GitHub no se considera un problema comercial; solo pulir wording si se siente necesario.
- **Open Graph:** si el preview al compartir por WhatsApp se ve correcto, no rehacerlo por estética. Solo investigar si `/opengraph-image` o el build fallan realmente.
- **Hero:** lema original como frase principal: "Desarrollo web enfocado en procesos y negocio".
- **Subtítulo del Hero:** debe llevar lo concreto: negocios locales, WhatsApp, catálogo/tienda online, confianza digital. Evitar tono corporativo.
- **Prioridad:** primero bugs públicos y conversión; después detalles de repo/SEO avanzados.

### Fase 15: Bugs Públicos y Verificación Técnica

> **Auditoría 2026-06-20:** el reporte de `500` en sitemap/OG no se reproduce en producción actual (ambos `200`). El build estático genera `sitemap.xml`, `opengraph-image` y `robots.txt` correctamente.

- [x] **Sitemap** — investigar por qué `https://portfolio-vfelizia.pages.dev/sitemap.xml` devuelve `500`
  - **Resultado:** devuelve `200` con XML válido (home + 2 proyectos). Falso positivo o incidente ya resuelto.
- [x] **Sitemap** — corregir generación o reemplazar por una solución estática compatible con Cloudflare Pages
  - **Resultado:** no requiere cambio; `app/sitemap.ts` + `output: "export"` funciona.
- [x] **Open Graph** — verificar si `/opengraph-image` devuelve `500` en producción o si solo falla el endpoint directo
  - **Resultado:** `200` en producción; meta `og:image` presente en el HTML.
- [x] **Open Graph** — si el endpoint falla de verdad, evaluar reemplazar `opengraph-image.tsx` por una imagen estática en `/public`
  - **Resultado:** no aplica; endpoint OK. Sin cambios.
- [x] **Open Graph** — evitar dependencia externa de fuente (`fonts.bunny.net`) si afecta build/reproducibilidad
  - **Resultado:** el build local y CI pasan con la fuente remota. Riesgo menor documentado; no bloquea V1.2. Reevaluar solo si falla en Cloudflare Pages.
- [x] **Favicon** — agregar `favicon.ico` o `app/icon.*`
  - **Hecho:** `app/icon.tsx` con monograma VF (misma línea visual que OG), sin dependencia externa.
- [x] **LinkedIn** — confirmar URL final y usar versión confiable/ASCII si corresponde
  - **Hecho:** perfil verificado; URL actualizada a `https://www.linkedin.com/in/valent%C3%ADn-felizia-103059212` (www + percent-encoding).
- [x] **README** — revisar links a docs (`docs/specs.md`, `docs/todo.md`) para evitar enlaces rotos
  - **Hecho:** enlaces corregidos en sección Related docs y Architecture.
- [x] **AGENTS** — actualizar o limpiar referencias desactualizadas del hero inicial
  - **Hecho:** rutas `docs/*` y guía de hero alineada a V1.2 (Fase 16).
- [x] **CI opcional** — evaluar workflow simple de GitHub Actions para `npm run lint` + `npm run build`
  - **Hecho:** `.github/workflows/ci.yml` en push/PR a `main`.

### Fase 16: Hero Más Corto y Más Propio

> **Copy aplicado:** h1 = lema solo; subtítulo conversacional con negocios locales, ventas por WhatsApp, catálogo/tienda y confianza digital.

- [x] **Hero** — simplificar `h1` a:
  - [x] "Desarrollo web enfocado en procesos y negocio."
- [x] **Hero** — mover el valor concreto al subtítulo
- [x] **Hero** — redactar subtítulo que fusione:
  - [x] Negocios locales
  - [x] Ventas por WhatsApp
  - [x] Catálogos / tiendas online
  - [x] Presencia digital confiable
- [x] **Hero** — evitar frases genéricas como "vender mejor", "web rápida y fácil de usar" si no agregan precisión
- [x] **Hero** — mantener CTA principal "Hablemos de tu proyecto"

### Fase 17: Reducir Repetición en Home

- [ ] **Home** — revisar si `ProcessOffer` y "Después de escribirme" están contando lo mismo
- [ ] **Opción recomendada** — mantener **Cómo trabajo** como sección principal de proceso
- [ ] **Contact** — convertir "Después de escribirme" en una versión más corta y concreta, no otro proceso completo
- [ ] **Contact** — posible reemplazo: una línea de expectativa + 2 bullets breves:
  - [ ] "Primera charla sin compromiso"
  - [ ] "Si una web no tiene sentido para tu caso, te lo digo"
- [ ] **Contact** — evitar repetir "entender operación / revisar si una web ayuda" con las mismas palabras del proceso
- [ ] **Copy** — corregir "primer charla" por "primera charla"

### Fase 18: Cards Orientadas a Clientes

- [ ] **ProjectCard** — hacer visible el CTA "Leer caso de estudio"
- [ ] **ProjectCard** — mantener "Visitar sitio publicado" como acción secundaria
- [ ] **ProjectCard** — evitar que la acción visual más fuerte saque al usuario del portfolio antes de leer el caso
- [ ] **Home** — reemplazar o esconder tech pills en cards para clientes no técnicos
- [ ] **Home** — usar tags/beneficios de negocio en vez de stack:
  - [ ] Felisa: "Catálogo autogestionable", "Pedidos por WhatsApp", "Sin comisiones"
  - [ ] 787 Rumbos: "Sitio institucional", "Contacto verificable", "Confianza online"
- [ ] **Detalle de proyecto** — mantener stack técnico en detalle o sección secundaria
- [ ] **Detalle de proyecto** — mostrar `repoUrl` como respaldo técnico discreto

### Fase 19: Casos y Prueba de Confianza

- [ ] **Felisa** — revisar si el subdominio `vercel.app` debilita el caso
- [ ] **Felisa** — evaluar dominio propio o aclarar que es un producto real en producción aunque no tenga dominio propio todavía
- [ ] **Felisa** — reemplazar `role: "Tech Lead & Fullstack"` por una formulación más natural:
  - [ ] "Diseño y desarrollo fullstack"
  - [ ] "Desarrollo web integral"
- [ ] **787 Rumbos** — hacer el impacto más concreto en card y/o caso
- [ ] **Casos** — agregar `seoDescription` o `summary` dedicados si mejora metadata y previews
- [ ] **Prueba social** — evaluar si tiene sentido agregar una cita breve, captura o nota de contexto sin forzar testimonios
- [ ] **Prueba futura** — dejar previsto sumar nuevos proyectos a medida que aparezcan clientes externos

### Fase 20: Oferta Más Clara

- [ ] **Home** — evaluar agregar bloque corto "Qué puedo hacer por tu negocio"
- [ ] **Oferta** — mantenerlo simple, sin parecer agencia genérica
- [ ] **Oferta** — posibles líneas:
  - [ ] Landing institucional para generar confianza
  - [ ] Catálogo online con pedidos por WhatsApp
  - [ ] Tienda simple o e-commerce a medida cuando tenga sentido
- [ ] **Oferta** — explicar entregables sin hablar de presupuesto si todavía no se quiere publicar precios
- [ ] **Post-lanzamiento** — aclarar de forma breve qué pasa después de publicar:
  - [ ] Autogestión
  - [ ] Ajustes básicos
  - [ ] Mantenimiento si aplica

### Fase 21: Verificación Final V1.2

- [ ] Ejecutar lint
- [ ] Ejecutar build estático
- [ ] Verificar `/sitemap.xml`
- [ ] Verificar `/robots.txt`
- [ ] Verificar preview al compartir por WhatsApp
- [ ] Verificar favicon en navegador
- [ ] Verificar links externos:
  - [ ] WhatsApp
  - [ ] Email
  - [ ] LinkedIn
  - [ ] GitHub
  - [ ] Sitios en producción
  - [ ] Repositorios
- [ ] Revisar mobile manualmente
- [ ] Revisar que la home no se sienta repetitiva
- [ ] Deploy final en Cloudflare Pages
- [ ] Marcar tareas completadas en `docs/todo.md`

---

## Deploy — Cloudflare Pages (V1.0)

> Seguimiento del deployment, separado de las fases de desarrollo.

### Paso 1: Export estática de Next.js

- [x] `next.config.ts` — `output: "export"` para generación de HTML estático
- [x] `next.config.ts` — `images.unoptimized: true` (compatible con hosting estático)
- [x] Mantener `transpilePackages: ["next-mdx-remote"]`
- [x] Commit y push a GitHub
- [x] Configurar proyecto en Cloudflare Pages (build + output directory)