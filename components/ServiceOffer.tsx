const services = [
  {
    title: "Landing institucional",
    line: "Carta de presentación o landing con agenda, video o varias secciones — a medida de lo que el negocio necesita mostrar.",
  },
  {
    title: "Catálogo online",
    line: "Productos en la web y pedidos listos para WhatsApp, autogestionable y sin comisiones por venta.",
  },
  {
    title: "Tienda a medida",
    line: "E-commerce adaptado a tu operación, solo cuando landing o catálogo ya no alcanzan.",
  },
] as const;

export function ServiceOffer() {
  return (
    <section
      id="oferta"
      aria-labelledby="service-offer-heading"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-14 sm:py-20"
    >
      <div className="grid gap-8 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-14">
        <div className="min-w-0 md:sticky md:top-24 md:self-start">
          <h2 id="service-offer-heading" className="section-title">
            Qué puedo hacer por tu negocio
          </h2>
          <p className="section-lede">
            Elijo el formato que resuelve tu caso y entrego algo publicable,
            sin hablar de presupuesto hasta entender la operación.
          </p>
        </div>

        <ul className="min-w-0 divide-y divide-[color:var(--color-rule)] border-y border-[color:var(--color-rule)]">
          {services.map((service) => (
            <li
              key={service.title}
              className="grid gap-2 py-5 first:pt-4 last:pb-4 sm:grid-cols-[minmax(0,11rem)_minmax(0,1fr)] sm:gap-8 sm:py-6"
            >
              <h3 className="font-display text-lg tracking-[-0.01em] text-foreground sm:text-xl">
                {service.title}
              </h3>
              <p className="min-w-0 text-sm leading-relaxed text-muted">
                {service.line}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
