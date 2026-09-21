"use client";

import { imageConfig } from "@/lib/imageConfig";
import { useDictionary } from "@/lib/i18n";

export interface AboutMinimalProps {
  imageSrc?: string;
  imageAlt?: string;
}

export function AboutMinimal({ imageSrc, imageAlt }: AboutMinimalProps) {
  const { about } = useDictionary();
  const resolvedAlt = imageAlt ?? about.imageAlt;

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
              alt={resolvedAlt}
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
            {about.heading}
          </h2>
          <div className="max-w-2xl space-y-4 text-base leading-relaxed text-muted">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
