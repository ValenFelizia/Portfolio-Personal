export function Hero() {
  return (
    <section className="relative mx-auto w-full max-w-4xl overflow-hidden px-6 py-28 motion-safe:animate-fade-in-up sm:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]"
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        <h1 className="text-balance text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl sm:leading-tight">
          Desarrollo web enfocado en{" "}
          <span className="text-gradient-accent">procesos y negocio</span>.
          Ayudo a negocios locales a vender
          mejor y generar confianza con una web rápida y fácil de usar.
        </h1>

        <p className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-muted sm:text-lg">
          Trabajo con emprendimientos que venden por WhatsApp, comercios que
          necesitan un catálogo online y marcas que buscan una presencia digital
          clara y confiable.
        </p>

        <a
          href="#contacto"
          className="mt-12 inline-flex items-center justify-center rounded-full border border-accent/40 bg-accent/10 px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent hover:bg-accent/20 hover:text-white motion-safe:hover:-translate-y-0.5"
        >
          Hablemos de tu proyecto
        </a>
      </div>
    </section>
  );
}
