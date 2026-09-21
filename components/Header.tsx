"use client";

import Link from "next/link";
import { LanguageSwitcher, useDictionary } from "@/lib/i18n";

export function Header() {
  const { header } = useDictionary();

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--color-rule)] bg-[color:var(--color-paper)]">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:gap-6 sm:px-6">
        <Link
          href="/"
          className="shrink-0 truncate text-sm font-semibold tracking-tight text-foreground transition-colors duration-300 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:text-base"
        >
          Valentín Felizia
        </Link>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <LanguageSwitcher />
          {/* Native <a> for same-route hash scroll (see T-006). */}
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a
            href="/#contacto"
            className="btn-primary shrink-0 py-2 text-xs sm:text-sm"
          >
            {header.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
