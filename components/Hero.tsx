export function Hero() {
  return (
    <section className="relative mx-auto w-full max-w-6xl overflow-hidden px-6 pb-20 pt-16 motion-safe:animate-fade-in-up sm:pb-28 sm:pt-24">
      {/* Personal grid: soft technical plane behind the diptych — not decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_oklch,var(--color-ink)_4%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklch,var(--color-ink)_4%,transparent)_1px,transparent_1px)] bg-size-[4rem_4rem] [mask-image:radial-gradient(ellipse_at_left,black_15%,transparent_72%)] sm:[mask-image:radial-gradient(ellipse_80%_70%_at_30%_50%,black_20%,transparent_75%)]"
      />

      <div className="relative z-10 grid items-end gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:gap-16">
        <div className="min-w-0 text-left">
          <h1
            className="font-display text-balance text-[length:var(--text-display)] font-normal leading-[1.08] tracking-[-0.02em] text-foreground"
            style={{ overflowWrap: "anywhere" }}
          >
            Desarrollo web enfocado en procesos y negocio.
          </h1>

          <p className="section-lede mt-6 max-w-xl text-base leading-relaxed sm:text-lg">
            Trabajo con negocios locales que venden por WhatsApp, necesitan un
            catálogo o tienda online y buscan una presencia digital clara y
            confiable.
          </p>

          <a href="#contacto" className="btn-primary mt-10">
            Hablemos de tu proyecto
          </a>
        </div>

        <aside
          aria-hidden
          className="hidden min-w-0 border-l border-[color:var(--color-rule)] pl-8 md:block"
        >
          <p className="font-display text-5xl leading-none tracking-[-0.03em] text-accent">
            →
          </p>
          <p className="mt-6 max-w-[16rem] text-sm leading-relaxed text-muted">
            Landing, catálogo o tienda. El formato que resuelve tu operación,
            no un paquete genérico.
          </p>
        </aside>
      </div>
    </section>
  );
}
