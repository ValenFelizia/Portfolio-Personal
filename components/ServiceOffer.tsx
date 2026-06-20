const services = [
  {
    title: "Landing institucional",
    description:
      "Para que te encuentren y generés confianza antes del primer WhatsApp o llamada.",
    deliverable:
      "Sitio claro con servicios, contacto verificable y presencia de marca.",
  },
  {
    title: "Catálogo online",
    description:
      "Productos visibles en la web y pedidos listos para enviar por WhatsApp.",
    deliverable:
      "Catálogo autogestionable, sin comisiones por venta ni plantillas rígidas.",
  },
  {
    title: "Tienda a medida",
    description:
      "Cuando el negocio necesita más que una landing o un catálogo simple.",
    deliverable:
      "E-commerce adaptado a tu operación, solo si realmente tiene sentido.",
  },
] as const;

const postLaunch = [
  "Te dejo herramientas para autogestionar contenido y catálogo",
  "Ajustes básicos después del lanzamiento",
  "Mantenimiento si tu negocio lo necesita",
] as const;

export function ServiceOffer() {
  return (
    <section
      id="oferta"
      aria-labelledby="service-offer-heading"
      className="mx-auto w-full max-w-5xl scroll-mt-24 px-6 py-16 motion-safe:animate-fade-in-up motion-safe:[animation-delay:80ms] sm:py-24"
    >
      <div className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-widest text-muted"></p>
        <h2
          id="service-offer-heading"
          className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl"
        >
          Qué puedo hacer por tu negocio
        </h2>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted">
          No vendo paquetes genéricos: elijo el formato que resuelve tu
          problema y te entrego algo publicable, sin hablar de presupuesto hasta
          entender tu caso.
        </p>
      </div>

      <ul className="mt-12 grid gap-6 md:grid-cols-3 md:gap-5">
        {services.map((service) => (
          <li
            key={service.title}
            className="flex flex-col gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-accent/25 hover:bg-white/[0.04]"
          >
            <h3 className="text-lg font-medium tracking-tight text-foreground">
              {service.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted">
              {service.description}
            </p>
            <p className="mt-auto border-t border-white/10 pt-3 text-sm leading-relaxed text-foreground/80">
              <span className="text-xs font-medium uppercase tracking-widest text-accent">
                Entregable
              </span>
              <span className="mt-1.5 block">{service.deliverable}</span>
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-10 rounded-xl border border-white/10 bg-white/[0.02] px-6 py-5 sm:px-8 sm:py-6">
        <p className="text-center text-sm font-medium text-foreground sm:text-left">
          Después de publicar
        </p>
        <ul className="mt-4 flex flex-col gap-3 sm:gap-2">
          {postLaunch.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-sm leading-relaxed text-muted sm:items-center"
            >
              <span
                aria-hidden
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent sm:mt-0"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
