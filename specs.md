# Especificaciones Técnicas: Portfolio Personal

## 1. Visión General

Portfolio personal de Desarrollo Web enfocado en mostrar soluciones de negocio, procesos y arquitectura, utilizando la metodología SDD (Spec-Driven Development).

**Frase guía del proyecto:**  
"Desarrollo web enfocado en procesos y negocio. Construyo sitios rápidos y e-commerces escalables que entregan resultados reales."

**Objetivo comercial V1.1:**  
Convertir el portfolio en una herramienta de confianza para clientes reales, especialmente negocios locales, emprendimientos y marcas que necesitan mejorar su presencia digital o simplificar ventas por WhatsApp.

**Prioridad de audiencia:**  
Clientes primero. GitHub y el repo público funcionan como respaldo técnico y señal de prolijidad, no como el centro del mensaje.

**Tono de comunicación:**  
Honesto, concreto y orientado a negocio. Evitar exagerar métricas o prueba social. Los proyectos actuales deben presentarse como productos reales y publicados, sin sobreactuar testimonios ni sugerir una cartera más grande de la que existe.

---

## 2. Stack Tecnológico

| Capa | Tecnología |
|------|------------|
| Framework | Next.js (App Router) — contenido estático y velocidad de carga |
| Contenido | Archivos locales MDX (Markdown + JSX) para casos de estudio |
| Estilos | Tailwind CSS v4 (tokens de diseño en `app/globals.css`) |

---

## 3. Sistema de Diseño (UI/UX)

- **Tema:** Modo oscuro, estética moderna y limpia.
- **Fondos:** Negro mate o grises muy oscuros (`#111111`).
- **Texto:** Blanco roto o gris claro para no cansar la vista.
- **Acentos:** Azul índigo o dark violet para enlaces y botones.
- **Tipografías:** Geist (principal) o Plus Jakarta Sans.
- **Layout:** Amplio espacio negativo entre secciones para evitar ruido visual.
- **Jerarquía comercial:** La home debe responder rápido qué hago, para quién, qué problemas resuelvo y cuál es el próximo paso.
- **Mobile-first:** Header, Hero, cards y Contact deben sentirse cómodos en pantallas chicas, no solo adaptarse técnicamente.
- **Accesibilidad:** Mantener `lang="es"`, foco visible, contraste suficiente, navegación por teclado y respeto por `prefers-reduced-motion`.

### Tokens de color (referencia)

| Token | Valor | Uso |
|-------|-------|-----|
| `background` | `#111111` | Fondo principal |
| `foreground` | `#e5e5e5` | Texto principal |
| `muted` | `#a3a3a3` | Texto secundario |
| `accent` | `#6366f1` | Enlaces, CTAs |
| `accent-hover` | `#818cf8` | Hover de acentos |

---

## 4. Arquitectura de Rutas y Carpetas

```
/app          → Enrutamiento principal (Home y /proyectos/[slug])
/components   → Bloques de interfaz reutilizables
/content      → Casos de estudio MDX (rumbos.mdx, felisa.mdx, etc.)
/lib          → Lógica pura (getProjects() para leer y parsear MDX)
/public       → Assets estáticos (foto de perfil, capturas de proyectos)
```

### Estructura esperada de la Home V1.1

1. **Hero** — propuesta de valor con `h1`, audiencia clara y CTA principal.
2. **Oferta / Proceso** — sección breve que explique cómo trabajo:
   - Entender el negocio.
   - Diseñar el flujo.
   - Construir y lanzar.
3. **Trabajos destacados** — cards de proyectos con foco en caso de estudio e impacto.
4. **Sobre mí** — background en ingeniería traducido a beneficios para el cliente.
5. **Contacto** — WhatsApp como acción principal y canales secundarios.

---

## 5. Estructura de Datos — Frontmatter MDX

Cada archivo `.mdx` debe incluir esta metadata:

| Campo | Descripción |
|-------|-------------|
| `title` | Título del proyecto |
| `client` | Cliente o nombre del proyecto |
| `techStack` | Tecnologías usadas, principalmente para contexto técnico |
| `date` | Fecha de realización |
| `role` | Rol desempeñado (ej: Fullstack / Tech Lead) |
| `liveUrl` | URL del proyecto en producción |
| `repoUrl` | URL del repositorio de código |

Campos opcionales:

| Campo | Descripción |
|-------|-------------|
| `brandColor` | Color de marca usado como acento visual del proyecto |
| `logoPath` | Ruta del logo en `/public` |
| `logoScale` | Escala visual del logo cuando necesita ajuste |
| `summary` | Resumen corto orientado a negocio para cards o metadata |
| `impact` | Resultado observable para mostrar en cards o detalle |
| `seoDescription` | Descripción específica para metadata del caso |

---

## 6. Estructura de Datos — Cuerpo MDX

El contenido interno detalla la narrativa del caso de éxito. No es obligatorio usar estos títulos exactos, pero sí reflejar estas áreas:

1. **El Problema** — Situación inicial del cliente.
2. **La Solución y Arquitectura** — Enfoque tecnológico implementado.
3. **El Impacto** — Resultados medibles obtenidos.

### Criterio V1.1 para casos de estudio

Cada caso debe funcionar como prueba de criterio, no solo como descripción técnica.

Debe incluir, cuando sea posible:

- **Contexto real del negocio:** qué pasaba antes de la web.
- **Restricción concreta:** presupuesto, operación manual, confianza, comisiones, autogestión, etc.
- **Decisión tomada:** por qué se eligió esa solución y no otra.
- **Resultado observable:** qué cambió en producción, aunque no haya métricas exactas.
- **Link al sitio en vivo:** para verificar que el producto existe.
- **Link al repo:** como respaldo técnico secundario.

Evitar afirmar métricas no verificadas. Si no hay números, usar lenguaje honesto: "redujo fricción", "centralizó el catálogo", "creó un punto oficial de contacto", "permitió autogestionar productos".

---

## 7. Componentes Clave

| Componente | Descripción |
|------------|-------------|
| **Hero** | Propuesta de valor principal con `h1`, audiencia clara y CTA a contacto |
| **ProjectCard** | Tarjeta visual del proyecto; debe priorizar el caso de estudio y permitir ver el sitio en vivo |
| **Oferta / Proceso** | Sección breve para explicar cómo se pasa de problema de negocio a solución publicada |
| **AboutMinimal** | Foto profesional + texto sobre background en ingeniería y procesos, traducido a beneficios del cliente |
| **Contact** | Bloque de conversión; WhatsApp debe ser la acción principal |
| **MDXComponents** | Diccionario de componentes para estilizar el HTML generado por Markdown |

---

## 8. Conversión y Marketing

- La CTA principal debe llevar a una conversación, no a una acción técnica.
- WhatsApp es el canal prioritario para clientes no técnicos.
- Email y LinkedIn son canales secundarios.
- GitHub es señal técnica secundaria; puede estar en Contact o Footer, pero no debe competir con el contacto comercial.
- La página debe explicar qué pasa después de contactar:
  1. Primera charla breve.
  2. Entender el negocio y el proceso actual.
  3. Definir si una web, landing o catálogo puede ayudar.
  4. Proponer una solución simple y lanzable.

---

## 9. SEO Básico y Compartibilidad

SEO avanzado no es prioridad para esta etapa porque el portfolio se usará principalmente por recomendación y boca a boca.

Sí son obligatorios los básicos:

- `metadataBase` en `app/layout.tsx`.
- Title y description claros.
- Open Graph y Twitter Card para compartir por WhatsApp / LinkedIn.
- Metadata específica por proyecto.
- Canonical por ruta.
- `sitemap.xml`.
- `robots.txt`.
- Imagen social simple y profesional.

---

## 10. Deploy y Repo Público

El sitio se publica como export estático en Cloudflare Pages.

Configuración esperada:

- `next.config.ts` con `output: "export"`.
- `images.unoptimized: true`.
- Build command: `npm run build`.
- Output directory: `out`.

Para publicar el repo en GitHub:

- `README.md` debe explicar el objetivo real del proyecto, stack, arquitectura, SDD y workflow MDX.
- El README no debe quedar como template de `create-next-app`.
- `todo.md` y `specs.md` pueden publicarse si se los considera parte del proceso de trabajo.
- Limpiar assets default no usados antes de publicar.
- Decidir licencia o aclaración de uso del código/diseño.
