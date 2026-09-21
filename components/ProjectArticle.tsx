"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import { LocaleContent } from "@/components/LocaleContent";
import { useDictionary, useLocale } from "@/lib/i18n";
import type { ProjectFrontmatter } from "@/lib/getProjects";
import type { Locale } from "@/lib/i18n/types";

export type ProjectArticleLocaleData = {
  frontmatter: ProjectFrontmatter;
  body: ReactNode;
};

type ProjectArticleProps = {
  es: ProjectArticleLocaleData;
  en?: ProjectArticleLocaleData;
};

function pickFrontmatter(
  locale: Locale,
  es: ProjectFrontmatter,
  en?: ProjectFrontmatter,
): ProjectFrontmatter {
  if (locale === "en" && en) {
    return en;
  }
  return es;
}

function normalizeCommaList(value: string): string[] {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export function ProjectArticle({ es, en }: ProjectArticleProps) {
  const { locale } = useLocale();
  const { projectPage, projectCard } = useDictionary();
  const frontmatter = pickFrontmatter(
    locale,
    es.frontmatter,
    en?.frontmatter,
  );

  const brandColor = frontmatter.brandColor ?? "var(--color-accent)";
  const logoScale = frontmatter.logoScale ?? 1;
  const techItems = normalizeCommaList(frontmatter.techStack);
  const brandStyle = {
    "--brand-color": brandColor,
  } as CSSProperties;

  return (
    <main
      id="main-content"
      className="mx-auto w-full max-w-3xl flex-1 px-6 py-16 sm:py-24"
    >
      <Link
        href="/"
        className="group -ml-1 inline-flex items-center gap-2 rounded-[var(--radius-sm)] px-1 py-1 text-sm text-muted transition-colors duration-300 hover:text-foreground"
      >
        <ArrowLeft
          className="h-4 w-4 transition-transform duration-300 motion-safe:group-hover:-translate-x-0.5"
          aria-hidden
        />
        {projectPage.backHome}
      </Link>

      <article style={brandStyle} className="mt-12">
        <header className="space-y-6 border-b border-[color:color-mix(in_oklch,var(--brand-color)_25%,var(--color-rule))] pb-10">
          <p className="text-sm text-muted">{frontmatter.client}</p>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0 space-y-4">
              <h1 className="font-display text-[length:var(--text-display-s)] font-normal tracking-[-0.02em] text-foreground sm:text-[length:var(--text-display)]">
                {frontmatter.title}
              </h1>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
                <span>{frontmatter.role}</span>
                <span>{frontmatter.date}</span>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={frontmatter.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  {projectPage.viewLive}
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                </a>
              </div>
            </div>

            {frontmatter.logoPath && (
              <div
                className={`shrink-0 self-start border border-[color:var(--color-rule)] bg-[color:var(--color-logo-plate)] shadow-sm ${
                  logoScale > 1 ? "p-1" : "p-2"
                }`}
                style={{ borderRadius: "var(--radius-sm)" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={frontmatter.logoPath}
                  alt={projectCard.logoAlt(frontmatter.client)}
                  className="w-auto object-contain object-left"
                  style={{
                    height: `${1.75 * logoScale}rem`,
                    maxWidth: `${5 * logoScale}rem`,
                  }}
                />
              </div>
            )}
          </div>
        </header>

        <div className="py-12">
          <LocaleContent es={es.body} en={en?.body} />
        </div>

        <section
          aria-labelledby="technical-details-heading"
          className="border-t border-[color:color-mix(in_oklch,var(--brand-color)_25%,var(--color-rule))] pt-10"
        >
          <h2
            id="technical-details-heading"
            className="text-sm font-medium text-muted"
          >
            {projectPage.technicalDetails}
          </h2>

          {techItems.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-2">
              {techItems.map((tech) => (
                <li
                  key={tech}
                  className="border border-[color:var(--color-rule)] px-2.5 py-1 text-xs text-muted"
                  style={{ borderRadius: "var(--radius-sm)" }}
                >
                  {tech}
                </li>
              ))}
            </ul>
          )}

          {frontmatter.repoUrl && (
            <p className="mt-4">
              <a
                href={frontmatter.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {projectPage.viewRepo}
                <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              </a>
            </p>
          )}
        </section>

        <footer className="mt-12 border-t border-[color:color-mix(in_oklch,var(--brand-color)_25%,var(--color-rule))] pt-10">
          <h2 className="section-title text-[length:var(--text-2xl)]">
            {projectPage.similarHeading}
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
            {projectPage.similarLede}
          </p>
          {/* Native <a> for same-route hash scroll (see T-006). */}
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/#contacto" className="btn-primary mt-6">
            {projectPage.similarCta}
          </a>
        </footer>
      </article>
    </main>
  );
}
