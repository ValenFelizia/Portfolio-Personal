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

- [ ] Armar componente **Hero** con la frase guía del proyecto
- [ ] Construir componente **ProjectCard**:
  - [ ] Tarjeta entera como enlace a la URL en vivo
  - [ ] Enlace secundario "Leer caso de estudio"
- [ ] Armar componente **AboutMinimal** (foto + texto estratégico)
- [ ] Crear diccionario **MDXComponents** para estilizar el HTML de Markdown

---

## Fase 4: Ensamblado de Rutas

- [ ] **Home** (`/app/page.tsx`): Hero + grilla de proyectos + AboutMinimal
- [ ] **Detalle de proyecto** (`/app/proyectos/[slug]/page.tsx`):
  - [ ] Rutas dinámicas
  - [ ] Vista de detalle con MDXComponents

---

## Fase 5: Pulido Final (UX/UI)

- [ ] Cargar assets a `/public`: foto de perfil y capturas de Rumbos y Felisa
- [ ] Revisar layout: espacio negativo entre secciones
- [ ] Testear: ProjectCard, casos de estudio y URLs de repositorios
