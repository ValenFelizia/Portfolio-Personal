"use client";

import { siteRepoUrl } from "@/lib/site";
import { useDictionary } from "@/lib/i18n";

export function Footer() {
  const { footer } = useDictionary();

  return (
    <footer className="border-t border-[color:var(--color-rule)] px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl space-y-4 text-left text-sm leading-relaxed text-muted">
          <p className="font-display text-xl text-foreground">{footer.thanks}</p>
          <p>Valentín Felizia · {new Date().getFullYear()}</p>
          <p>
            {footer.openSourceBefore}{" "}
            <a
              href={siteRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/90 underline decoration-transparent transition-colors duration-300 hover:text-accent hover:decoration-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {footer.openSourceLink}
            </a>
            {footer.openSourceAfter}
          </p>
        </div>

        <nav aria-label={footer.sectionsLabel} className="shrink-0">
          {/* Native <a> for same-route hash scroll (see T-006). */}
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            <li>
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a
                href="/#proyectos"
                className="transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {footer.projects}
              </a>
            </li>
            <li>
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a
                href="/#sobre-mi"
                className="transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {footer.about}
              </a>
            </li>
            <li>
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a
                href="/#contacto"
                className="transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {footer.contact}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
