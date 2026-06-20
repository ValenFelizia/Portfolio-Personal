import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { CSSProperties } from "react";
import { imageConfig } from "@/lib/imageConfig";

export interface ProjectCardProps {
  title: string;
  client: string;
  techStack: string | string[];
  liveUrl: string;
  slug: string;
  imageSrc?: string;
  imageAlt?: string;
  brandColor?: string;
  logoPath?: string;
  logoScale?: number;
  impact?: string;
  priorityImage?: boolean;
}

function normalizeTechStack(techStack: string | string[]): string[] {
  if (Array.isArray(techStack)) {
    return techStack.map((item) => item.trim()).filter(Boolean);
  }

  return techStack
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export function ProjectCard({
  title,
  client,
  techStack,
  liveUrl,
  slug,
  imageSrc,
  imageAlt,
  brandColor,
  logoPath,
  logoScale,
  impact,
  priorityImage = false,
}: ProjectCardProps) {
  const stack = normalizeTechStack(techStack);
  const resolvedLogoScale = logoScale ?? 1;
  const cardStyle = {
    "--brand-color": brandColor ?? "#6366f1",
  } as CSSProperties;

  return (
    <article
      style={cardStyle}
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] transition-all duration-300 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:scale-[1.01] motion-safe:hover:border-[color-mix(in_srgb,var(--brand-color)_30%,transparent)] motion-safe:hover:bg-white/[0.04] motion-safe:hover:shadow-[0_8px_30px_color-mix(in_srgb,var(--brand-color)_18%,transparent)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-white/[0.03] after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-[var(--brand-color)] after:opacity-0 after:transition-opacity after:duration-300 group-hover:after:opacity-50">
        {imageSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageSrc}
            alt={imageAlt ?? `Captura de ${title}`}
            width={imageConfig.projectPreview.width}
            height={imageConfig.projectPreview.height}
            sizes={imageConfig.projectPreview.sizes}
            loading={priorityImage ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={priorityImage ? "high" : "auto"}
            className="h-full w-full object-cover object-left-top transition-transform duration-300 motion-safe:group-hover:scale-[1.02]"
          />
        ) : (
          <div
            aria-hidden
            className="flex h-full w-full items-center justify-center text-sm text-muted"
          >
            Captura próximamente
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="space-y-2">
          <p className="text-sm text-muted">{client}</p>
          <h3 className="text-xl font-medium tracking-tight text-foreground">
            {title}
          </h3>
          {impact && (
            <p className="border-l-2 border-[var(--brand-color)] pl-3 text-sm leading-relaxed text-muted">
              {impact}
            </p>
          )}
        </div>

        {stack.length > 0 && (
          <ul className="flex flex-wrap gap-2">
            {stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-muted"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}

        <div className="relative z-10 mt-auto flex items-center justify-between gap-4 pt-2">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 -ml-2.5 text-sm text-accent transition-all duration-300 group-hover:bg-accent/10 group-hover:text-indigo-300 hover:bg-accent/15 hover:text-accent-hover hover:ring-1 hover:ring-accent/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Visitar sitio publicado
            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </a>

          {logoPath && (
            <div
              className={`relative z-10 shrink-0 rounded-md border border-white/15 bg-white/95 shadow-sm ${
                resolvedLogoScale > 1 ? "p-1" : "p-2"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logoPath}
                alt={`Logo de ${client}`}
                className="w-auto object-contain object-left"
                style={{
                  height: `${1.75 * resolvedLogoScale}rem`,
                  maxWidth: `${5 * resolvedLogoScale}rem`,
                }}
              />
            </div>
          )}
        </div>
      </div>

      <Link
        href={`/proyectos/${slug}`}
        aria-label={`Leer caso de estudio de ${title}`}
        className="absolute inset-0 z-[1] before:absolute before:inset-0 before:content-[''] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      />
    </article>
  );
}
