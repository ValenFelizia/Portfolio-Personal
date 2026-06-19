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

## V1.1: Auditoría Comercial y Pulido Público

> Nueva etapa posterior a la V1.0. Objetivo: convertir el portfolio en una herramienta comercial más clara para clientes reales, sin perder la prolijidad técnica necesaria para publicarlo como repo.

### Fase 8: Posicionamiento Comercial de la Home

- [x] **Hero** — convertir la frase principal en un `h1` claro, específico y orientado a clientes
  > Implementado: `h1` orientado a clientes con gradiente en "negocios locales".
- [x] **Hero** — agregar subtítulo que explique para quién trabajo:
  - [x] Negocios locales
  - [x] Emprendimientos que venden por WhatsApp
  - [x] Marcas que necesitan presencia digital confiable
  > Subtítulo en párrafo `text-muted` debajo del `h1`.
- [x] **Hero** — mantener CTA principal hacia contacto, con foco en WhatsApp / primera charla
  > CTA "Charlemos de tu proyecto" apunta a `#contacto` (WhatsApp destacado queda para Fase 10).
- [x] **Home** — agregar sección breve de oferta o proceso:
  - [x] Entender el negocio
  - [x] Diseñar el flujo
  - [x] Construir y lanzar
  > Nuevo componente `ProcessOffer.tsx`, insertado entre Hero y proyectos.
- [x] **AboutMinimal** — reescribir el texto para traducir "ingeniería y procesos" a beneficios concretos para el cliente
  > Nuevo `h2` y párrafos enfocados en beneficios operativos y decisiones técnicas sin comisiones.
- [x] **Home** — evitar wording que sugiera una cartera grande de clientes externos; presentar los casos como proyectos reales y publicados
  > Línea intro bajo "Trabajos destacados" en `page.tsx`.

### Fase 9: Casos de Estudio con Evidencia Observable

- [x] **Felisa** — reforzar el caso como catálogo vivo + pedidos por WhatsApp + autogestión + 0% comisiones
  > MDX reescrito con restricción (WhatsApp manual, comisiones), decisión (catálogo + CMS) y link verificable.
- [x] **787 Rumbos** — reforzar el caso como presencia oficial + confianza + punto de contacto verificable
  > MDX reescrito con dolor de confianza en turismo y landing como carta de presentación.
- [x] **MDX** — agregar evidencia observable sin inventar métricas:
  - [x] Restricción inicial del negocio
  - [x] Decisión técnica tomada
  - [x] Resultado visible en producción
  - [x] Mejora concreta para el día a día del cliente
  > Tejido en las 3 secciones de cada caso; links al sitio en vivo al final de El Impacto.
- [x] **MDX** — reducir frases demasiado absolutas si no hay números que las sostengan (`drásticamente`, `por completo`, etc.)
  > Eliminados términos absolutos en Felisa; tono honesto en ambos casos.
- [x] **Detalle de proyecto** — mostrar links a `liveUrl` y `repoUrl` desde el frontmatter
  > Botón primario "Ver sitio en producción" + link secundario "Código en GitHub" en cabecera.
- [x] **Detalle de proyecto** — agregar CTA final: "¿Tenés un problema parecido?" + contacto
  > Footer con CTA `/#contacto` al final del artículo.
- [x] **ProjectCard** — evaluar invertir prioridad: card hacia caso de estudio y link secundario hacia sitio en vivo
  > Overlay `Link` al caso de estudio; enlace visible "Ver sitio en vivo" externo.
- [x] **ProjectCard** — considerar una línea de impacto visible por proyecto
  > Campo `impact` en frontmatter + borde izquierdo con color de marca en la card.

### Fase 10: Conversión y Contacto

- [ ] **Contact** — destacar WhatsApp como CTA principal, no como una tarjeta más
- [ ] **Contact** — agregar mensaje prellenado de WhatsApp para bajar fricción
- [ ] **Contact** — explicar el siguiente paso después del contacto:
  - [ ] Primera charla breve
  - [ ] Entender el negocio
  - [ ] Detectar si una web realmente ayuda
- [ ] **Contact** — revisar si GitHub debe seguir al mismo nivel que WhatsApp/Email/LinkedIn o pasar al footer
- [ ] **Header** — revisar navegación mobile para que no se sienta apretada en pantallas chicas
- [ ] **Footer** — considerar links secundarios a GitHub, LinkedIn y contacto

### Fase 11: SEO Básico y Social Preview

- [ ] **Metadata global** — agregar `metadataBase`, title template, description, Open Graph y Twitter Card
- [ ] **Home** — ajustar metadata a clientes objetivo, sin perseguir SEO avanzado
- [ ] **Detalle de proyecto** — implementar metadata por proyecto (`generateMetadata`)
- [ ] **Detalle de proyecto** — agregar canonical por ruta
- [ ] **SEO técnico** — generar `sitemap.xml`
- [ ] **SEO técnico** — generar `robots.txt` propio
- [ ] **Social preview** — crear o definir imagen Open Graph para compartir por WhatsApp / LinkedIn
- [ ] **Dominio** — decidir si comprar dominio propio antes de usar el portfolio como carta principal

### Fase 12: Accesibilidad, Mobile y Calidad Técnica

- [ ] **Accesibilidad** — agregar skip link para saltar al contenido principal
- [ ] **Accesibilidad** — revisar `aria-labelledby` en secciones principales
- [ ] **Accesibilidad** — revisar foco visible en CTA del Hero y enlaces importantes
- [ ] **UI** — revisar `py-21` en `Contact` y reemplazar si no pertenece a la escala de Tailwind
- [ ] **UI** — revisar experiencia mobile del header, hero, cards y contacto
- [ ] **Performance** — medir Lighthouse mobile y desktop después de los cambios
- [ ] **Performance** — revisar peso/dimensiones de imágenes (`profile.webp`, previews, logos)
- [ ] **Seguridad** — evaluar `_headers` para Cloudflare Pages:
  - [ ] `X-Content-Type-Options`
  - [ ] `Referrer-Policy`
  - [ ] `Permissions-Policy`
  - [ ] CSP conservadora si no genera fricción
- [ ] **404** — considerar página `not-found.tsx` con estilo del portfolio

### Fase 13: Repo Público y Documentación

- [ ] **README** — reemplazar template de Next.js por documentación propia del proyecto
- [ ] **README** — explicar objetivo, stack, arquitectura, SDD y cómo correr el proyecto
- [ ] **README** — documentar cómo agregar un nuevo proyecto MDX
- [ ] **README** — ajustar deploy a Cloudflare Pages (`npm run build` + output `out`)
- [ ] **README** — aclarar que el portfolio prioriza clientes y usa GitHub como respaldo técnico
- [ ] **Repo público** — limpiar assets default no usados (`vercel.svg`, `file.svg`, `window.svg`) si ya no hacen falta
- [ ] **Repo público** — decidir licencia o nota de uso del código/diseño
- [ ] **Specs** — mantener `specs.md` actualizado si cambia la estructura de datos o componentes
- [ ] **Todo** — mantener esta V1.1 como checklist vivo para trabajar desde el IDE o con agentes

### Fase 14: Verificación Final V1.1

- [ ] Ejecutar lint
- [ ] Ejecutar build estático
- [ ] Verificar rutas:
  - [ ] `/`
  - [ ] `/proyectos/felisa`
  - [ ] `/proyectos/rumbos`
- [ ] Verificar links externos:
  - [ ] WhatsApp
  - [ ] Email
  - [ ] LinkedIn
  - [ ] GitHub
  - [ ] Sitios en producción
  - [ ] Repositorios
- [ ] Verificar mobile manualmente
- [ ] Verificar metadata al compartir la URL
- [ ] Deploy final en Cloudflare Pages
- [ ] Actualizar `todo.md` marcando tareas completadas

---

## Deploy — Cloudflare Pages (V1.0)

> Seguimiento del deployment, separado de las fases de desarrollo.

### Paso 1: Export estática de Next.js

- [x] `next.config.ts` — `output: "export"` para generación de HTML estático
- [x] `next.config.ts` — `images.unoptimized: true` (compatible con hosting estático)
- [x] Mantener `transpilePackages: ["next-mdx-remote"]`
- [ ] Commit y push a GitHub
- [ ] Configurar proyecto en Cloudflare Pages (build + output directory)
