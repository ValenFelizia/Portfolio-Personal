export interface AboutMinimalProps {
  imageSrc?: string;
  imageAlt?: string;
}

export function AboutMinimal({
  imageSrc,
  imageAlt = "Foto profesional",
}: AboutMinimalProps) {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-24 motion-safe:animate-fade-in-up motion-safe:[animation-delay:200ms] sm:py-32">
      <div className="grid items-center gap-12 md:grid-cols-[minmax(0,11rem)_1fr] md:gap-16">
        <div className="mx-auto w-full max-w-[11rem] md:mx-0">
          {imageSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={imageSrc}
              alt={imageAlt}
              className="aspect-square w-full rounded-full border border-white/10 object-cover opacity-80"
            />
          ) : (
            <div
              aria-hidden
              className="aspect-square w-full rounded-full border border-dashed border-white/10 bg-white/[0.02]"
            />
          )}
        </div>

        <div className="space-y-5 text-center md:text-left">
          <p className="text-sm uppercase tracking-widest text-muted">Sobre mí</p>
          <h2 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
            Ingeniería y procesos antes que código
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-muted">
            <p>
              Vengo de un background en ingeniería, donde aprendí a mirar los
              problemas de negocio antes de escribir una sola línea de código.
              Eso me llevó al desarrollo web con un enfoque distinto: entender
              el proceso, identificar la necesidad real y recién ahí construir la
              solución.
            </p>
            <p>
              Trabajo en sitios rápidos, e-commerces escalables y productos
              digitales que priorizan resultados concretos: menos fricción
              operativa, más confianza del usuario y decisiones técnicas que
              tengan sentido para el negocio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
