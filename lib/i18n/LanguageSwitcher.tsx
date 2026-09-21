"use client";

import { useDictionary, useLocale } from "./LocaleProvider";
import type { Locale } from "./types";

const OPTIONS: Locale[] = ["es", "en"];

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const { languageSwitcher } = useDictionary();

  return (
    <div
      role="group"
      aria-label={languageSwitcher.groupLabel}
      className="inline-flex items-center gap-0.5 rounded-[var(--radius-sm)] border border-[color:var(--color-rule)] p-0.5"
    >
      {OPTIONS.map((option) => {
        const pressed = locale === option;
        const shortLabel =
          option === "es" ? languageSwitcher.es : languageSwitcher.en;
        const fullLabel = languageSwitcher.optionLabel[option];

        return (
          <button
            key={option}
            type="button"
            aria-label={fullLabel}
            aria-pressed={pressed}
            onClick={() => setLocale(option)}
            className={
              pressed
                ? "min-w-9 rounded-[calc(var(--radius-sm)-1px)] bg-accent/15 px-2.5 py-1.5 text-xs font-medium text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                : "min-w-9 rounded-[calc(var(--radius-sm)-1px)] px-2.5 py-1.5 text-xs font-medium text-muted transition-colors duration-200 hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            }
          >
            {shortLabel}
          </button>
        );
      })}
    </div>
  );
}
