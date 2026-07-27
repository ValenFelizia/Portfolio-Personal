import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { CSSProperties } from "react";
import { imageConfig } from "@/lib/imageConfig";

export interface ProjectCardProps {
  title: string;
  client: string;
  highlights?: string | string[];
  liveUrl: string;
  slug: string;
  imageSrc?: string;
  imageAlt?: string;
  brandColor?: string;
  logoPath?: string;
  logoScale?: number;
  impact?: string;
  priorityImage?: boolean;
  /** featured = proof-first diptych; compact = image-led with less chrome */
  variant?: "default" | "featured" | "compact";
}

function normalizeList(items: string | string[]): string[] {
  if (Array.isArray(items)) {
    return items.map((item) => item.trim()).filter(Boolean);
  }

  return items
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

const linkFocus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function ProjectCard({
  title,
  client,
  highlights,
  liveUrl,
  slug,
  imageSrc,
  imageAlt,
  brandColor,
  logoPath,
  logoScale,
  impact,
  priorityImage = false,
  variant = "default",
}: ProjectCardProps) {
  const tags = highlights ? normalizeList(highlights).slice(0, 2) : [];
  const resolvedLogoScale = logoScale ?? 1;
  const isFeatured = variant === "featured";
  const isCompact = variant === "compact";
  const showImpact = Boolean(impact) && !isCompact;
  const showTags = tags.length > 0 && !isFeatured;
  const cardStyle = {
    "--brand-color": brandColor ?? "var(--color-accent)",
  } as CSSProperties;

  const media = (
    <div
      className={`relative min-w-0 overflow-hidden bg-[color:var(--color-paper-3)] ${
        isFeatured
          ? "aspect-[16/10] md:aspect-auto md:min-h-[22rem] md:h-full"
          : "aspect-[16/10]"
      }`}
    >
      {imageSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageSrc}
          alt={imageAlt ?? `Captura de ${title}`}
          width={imageConfig.projectPreview.width}
          height={imageConfig.projectPreview.height}
          sizes={
            isFeatured
              ? "(max-width: 768px) 100vw, 62vw"
              : imageConfig.projectPreview.sizes
          }
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
  );

  const body = (
    <div
      className={`flex flex-1 flex-col gap-4 ${isFeatured ? "p-6 sm:p-8 md:justify-center" : "p-5 sm:p-6"}`}
    >
      <div className="space-y-2">
        <p className="text-sm text-muted">{client}</p>
        <h3
          className={`font-display tracking-[-0.015em] text-foreground ${
            isFeatured ? "text-3xl sm:text-4xl" : "text-2xl"
          }`}
        >
          {title}
        </h3>
        {showImpact && (
          <p className="border-t border-[color:var(--color-rule)] pt-3 text-sm leading-relaxed text-muted">
            {impact}
          </p>
        )}
      </div>

      {showTags && (
        <ul className="flex flex-wrap gap-2" aria-label="Beneficios del proyecto">
          {tags.map((tag) => (
            <li
              key={tag}
              className="border border-[color:color-mix(in_oklch,var(--brand-color)_30%,var(--color-rule))] bg-[color:color-mix(in_oklch,var(--brand-color)_10%,transparent)] px-2.5 py-1 text-xs text-foreground/85"
              style={{ borderRadius: "var(--radius-sm)" }}
            >
              {tag}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto flex flex-col gap-4 pt-2 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-2">
          <Link
            href={`/proyectos/${slug}`}
            className={`btn-primary w-fit py-2 ${linkFocus}`}
          >
            Leer caso de estudio
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-secondary w-fit px-1 py-1 ${linkFocus}`}
          >
            Visitar sitio publicado
            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>

        {logoPath && (
          <div
            className={`shrink-0 self-end border border-[color:var(--color-rule)] bg-[color:var(--color-logo-plate)] shadow-sm ${
              resolvedLogoScale > 1 ? "p-1" : "p-2"
            }`}
            style={{ borderRadius: "var(--radius-sm)" }}
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
  );

  return (
    <article
      style={cardStyle}
      className={`group min-w-0 overflow-hidden border border-[color:var(--color-rule)] bg-[color:var(--color-paper-2)] transition-[border-color,background-color] duration-300 ease-[var(--ease-out)] motion-safe:hover:border-[color-mix(in_oklch,var(--brand-color)_45%,var(--color-rule))] motion-safe:hover:bg-[color:var(--color-paper-3)] ${
        isFeatured
          ? "grid md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]"
          : "flex h-full flex-col"
      }`}
    >
      {media}
      {body}
    </article>
  );
}
