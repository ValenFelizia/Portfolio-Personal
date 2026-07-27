import { imageConfig } from "@/lib/imageConfig";

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
      aria-labelledby="sobre-mi-heading"
      className="section-defer mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-20 sm:py-28"
    >
      <div className="grid items-center gap-12 md:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] md:gap-16">
        <div className="mx-auto w-full max-w-[14rem] min-w-0 md:mx-0">
          {imageSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={imageSrc}
              alt={imageAlt}
              width={imageConfig.profile.width}
              height={imageConfig.profile.height}
              loading="lazy"
              decoding="async"
              className="aspect-square w-full rounded-[var(--radius-md)] border border-[color:var(--color-rule)] object-cover"
            />
          ) : (
            <div
              aria-hidden
              className="aspect-square w-full rounded-[var(--radius-md)] border border-dashed border-[color:var(--color-rule)] bg-[color:var(--color-paper-2)]"
            />
          )}
        </div>

        <div className="min-w-0 space-y-5 text-left">
          <h2 id="sobre-mi-heading" className="section-title">
            Entiendo tu negocio antes de escribir código
          </h2>
          <div className="max-w-2xl space-y-4 text-base leading-relaxed text-muted">
            <p>
              Vengo de un background en ingeniería, donde aprendí a analizar
              procesos y detectar el problema real antes de proponer una
              solución. Eso me llevó al desarrollo web con un enfoque distinto:
              primero entender cómo opera tu negocio, después diseñar y
              construir algo que tenga sentido en el día a día.
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
