"use client";

import { useDictionary } from "@/lib/i18n";

export function ProcessOffer() {
  const { processOffer } = useDictionary();

  return (
    <section
      aria-labelledby="process-offer-heading"
      className="mx-auto w-full max-w-5xl scroll-mt-24 px-6 py-16 motion-safe:animate-fade-in-up motion-safe:[animation-delay:100ms] sm:py-24"
    >
      <div className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-widest text-muted">
          {processOffer.eyebrow}
        </p>
        <h2
          id="process-offer-heading"
          className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl"
        >
          {processOffer.heading}
        </h2>
        <p className="mx-auto max-w-xl text-base leading-relaxed text-muted">
          {processOffer.lede}
        </p>
      </div>

      <ol className="mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
        {processOffer.steps.map((step) => (
          <li
            key={step.number}
            className="flex flex-col gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-6"
          >
            <span className="text-sm font-medium tracking-widest text-accent">
              {step.number}
            </span>
            <h3 className="text-lg font-medium tracking-tight text-foreground">
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
