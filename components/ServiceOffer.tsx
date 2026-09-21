"use client";

import { useDictionary } from "@/lib/i18n";

export function ServiceOffer() {
  const { serviceOffer } = useDictionary();

  return (
    <section
      id="oferta"
      aria-labelledby="service-offer-heading"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-14 sm:py-20"
    >
      <div className="grid gap-8 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-14">
        <div className="min-w-0 md:sticky md:top-24 md:self-start">
          <h2 id="service-offer-heading" className="section-title">
            {serviceOffer.heading}
          </h2>
          <p className="section-lede">{serviceOffer.lede}</p>
        </div>

        <ul className="min-w-0 divide-y divide-[color:var(--color-rule)] border-y border-[color:var(--color-rule)]">
          {serviceOffer.services.map((service) => (
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
