# Especificaciones Técnicas: Portfolio Personal

## 1. Visión General

Portfolio personal de Desarrollo Web enfocado en mostrar soluciones de negocio, procesos y arquitectura, utilizando la metodología SDD (Spec-Driven Development).

**Frase guía del proyecto:**  
"Desarrollo web enfocado en procesos y negocio. Construyo sitios rápidos y e-commerces escalables que entregan resultados reales."

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

---

## 5. Estructura de Datos — Frontmatter MDX

Cada archivo `.mdx` debe incluir esta metadata:

| Campo | Descripción |
|-------|-------------|
| `title` | Título del proyecto |
| `client` | Cliente o nombre del proyecto |
| `date` | Fecha de realización |
| `role` | Rol desempeñado (ej: Fullstack / Tech Lead) |
| `liveUrl` | URL del proyecto en producción |
| `repoUrl` | URL del repositorio de código |

---

## 6. Estructura de Datos — Cuerpo MDX

El contenido interno detalla la narrativa del caso de éxito. No es obligatorio usar estos títulos exactos, pero sí reflejar estas áreas:

1. **El Problema** — Situación inicial del cliente.
2. **La Solución y Arquitectura** — Enfoque tecnológico implementado.
3. **El Impacto** — Resultados medibles obtenidos.

---

## 7. Componentes Clave

| Componente | Descripción |
|------------|-------------|
| **Hero** | Contenedor principal con la frase guía del proyecto |
| **ProjectCard** | Tarjeta visual; toda su superficie enlaza a la URL en vivo |
| **CTA secundario** | Enlace sutil "Leer caso de estudio" → vista de detalle |
| **AboutMinimal** | Foto profesional + texto sobre background en ingeniería y procesos |
| **MDXComponents** | Diccionario de componentes para estilizar el HTML generado por Markdown |
