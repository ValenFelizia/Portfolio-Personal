export interface AboutMinimalProps {
  imageSrc?: string;
  imageAlt?: string;
}

export function AboutMinimal({
  imageSrc,
  imageAlt = "Foto profesional",
}: AboutMinimalProps) {
  return (
    <section
      id="sobre-mi"
      className="mx-auto w-full max-w-5xl scroll-mt-24 px-6 py-24 motion-safe:animate-fade-in-up motion-safe:[animation-delay:200ms] sm:py-32"
    >
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
            Entiendo tu negocio antes de escribir código
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-muted">
            <p>
              Vengo de un background en ingeniería, donde aprendí a analizar procesos y detectar
              el problema real antes de proponer una solución. Eso me llevó al
              desarrollo web con un enfoque distinto: primero entender cómo opera
              tu negocio, después diseñar y construir algo que tenga sentido en
              el día a día.
            </p>
            <p>
              Desarrollo sitios rápidos, catálogos y e-commerces pensados para
              resultados concretos: menos fricción operativa, más confianza del
              cliente final y decisiones técnicas que no te atan a comisiones ni
              herramientas que no necesitás.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
