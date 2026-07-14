# Decisions

> Elecciones con consecuencias durables. No duplicar requisitos que ya viven en `specs.md`.

## DEC-001 — Clientes primero; GitHub como respaldo técnico

- Status: accepted
- Date: 2026-06-20

### Context

El portfolio debía servir a la vez como herramienta comercial y como repo público.

### Decision

La audiencia primaria del sitio son clientes. GitHub/README son canal secundario de prolijidad técnica.

### Rationale

Un mensaje centrado en stack o en el repo diluye la conversión con negocios locales no técnicos.

### Consequences

Copy, cards y contacto priorizan beneficio de negocio. El detalle técnico queda en casos MDX y README.

## DEC-002 — WhatsApp como canal de conversión principal

- Status: accepted
- Date: 2026-06-20

### Context

Clientes objetivo suelen preferir mensajería a formularios o email.

### Decision

WhatsApp es la CTA comercial principal (mensaje prellenado). Email y LinkedIn son secundarios; GitHub no compite por atención comercial.

### Rationale

Reduce fricción para el primer contacto con negocios locales.

### Consequences

Layout de Contact destaca WhatsApp; expectativas post-mensaje van debajo del grid.

## DEC-003 — Sin métricas ni testimonios inventados

- Status: accepted
- Date: 2026-06-20

### Context

Había presión natural a “rellenar” prueba social con números o citas no verificables.

### Decision

No inventar métricas ni forzar testimonios. Evidencia = casos honestos + sitios en producción.

### Rationale

La credibilidad del posicionamiento comercial depende de no sobreactuar la cartera.

### Consequences

Copy de impacto usa lenguaje observable. Prueba social futura solo con evidencia real.

## DEC-004 — Export estático en Cloudflare Pages

- Status: accepted
- Date: 2026-05-01

### Context

El portfolio es contenido estático; no necesita runtime de servidor.

### Decision

Next.js con `output: "export"`, `images.unoptimized: true`, deploy en Cloudflare Pages (`out/`).

### Rationale

Hosting simple, barato y alineado al contenido MDX local sin CMS.

### Consequences

Sin APIs server-side en producción; imágenes sin optimizer de Next; headers vía `public/_headers`.

## DEC-005 — Cards de home con beneficios de negocio, no tech pills

- Status: accepted
- Date: 2026-06-20

### Context

Las tech pills en la home empujaban a un tono demasiado técnico para clientes.

### Decision

En home, tags de beneficio de negocio. Stack y `repoUrl` solo en el detalle del caso.

### Rationale

La home vende el problema resuelto; el detalle puede mostrar el cómo técnico.

### Consequences

Frontmatter/`highlights` orientados a negocio en cards; MDX y detalle conservan stack.

## DEC-006 — ProcessOffer como único bloque de proceso

- Status: accepted
- Date: 2026-06-20

### Context

`ProcessOffer` y “Después de escribirme” en Contact repetían el mismo relato.

### Decision

Mantener **Cómo trabajo** como único bloque de proceso. Contact solo aclara expectativa post-mensaje (corta).

### Rationale

Evitar sensación de sitio verde/repetitivo en la lectura comercial.

### Consequences

Oferta de servicios vive en `ServiceOffer`; proceso en `ProcessOffer`; Contact no reexplica el flujo completo.

## DEC-007 — Lema del Hero como H1 (V1.2)

- Status: accepted
- Date: 2026-06-20

### Context

El H1 comercial anterior era demasiado largo o genérico.

### Decision

H1 = lema solo: "Desarrollo web enfocado en procesos y negocio." El valor concreto va al subtítulo.

### Rationale

El lema es la identidad; el subtítulo lleva la especificidad (WhatsApp, catálogo, negocios locales).

### Consequences

Evitar frases genéricas tipo “vender mejor” / “web rápida” en el H1. Ver REQ-002 en `specs.md`.

## DEC-008 — Footer con link open source

- Status: accepted
- Date: 2026-06-20

### Context

Se cuestionó si el link a GitHub en footer dañaba el tono comercial.

### Decision

Mantener el link open source en footer; no es un problema comercial. Solo pulir wording si hace falta.

### Alternatives Considered

Quitar GitHub del footer — rechazado: el repo público es señal útil sin competir con WhatsApp.

## DEC-009 — Caso Felisa sin disclaimer de dominio

- Status: accepted
- Date: 2026-06-20

### Context

Felisa corre en producción (subdominio) sin dominio propio de la clienta aún.

### Decision

Sin disclaimer especial en el portfolio. El caso enfatiza uso real y el link al catálogo; actualizar cuando haya dominio propio.

### Rationale

Un disclaimer sobre el host diluye el impacto sin agregar claridad útil al cliente lector.

## DEC-010 — Adoptar CSDD con `.csdd/` como estado canónico

- Status: accepted
- Date: 2026-07-13

### Context

El proyecto usaba `docs/specs.md` + `docs/todo.md` como SDD informal. Eso mezclaba verdad durable, historial de fases y estado operativo en dos archivos densos.

### Decision

Adoptar Collaborative Spec-Driven Development (CSDD). Estado canónico en `.csdd/` (`specs.md`, `todo.md`, `decisions.md`, `handoff.md`, `archive/`). `docs/specs.md` y `docs/todo.md` quedan como redirecciones.

### Rationale

Separa requisitos, decisiones, coordinación y handoff; permite hidratación proporcional de contexto y archivo frío de fases cerradas.

### Consequences

README y `docs/AGENTS.md` apuntan a `.csdd/`. Historial de fases V1.0–V1.2 se distila en `archive/`, no en el todo vivo.
