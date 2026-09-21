"use client";

import type { ReactNode } from "react";
import { useLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/types";

type LocaleContentProps = {
  es: ReactNode;
  en?: ReactNode;
};

/** Renders the panel matching the active locale (Spanish fallback). */
export function LocaleContent({ es, en }: LocaleContentProps) {
  const { locale } = useLocale();
  return <>{pickLocaleNode(locale, es, en)}</>;
}

export function pickLocaleNode(
  locale: Locale,
  es: ReactNode,
  en?: ReactNode,
): ReactNode {
  if (locale === "en" && en != null) {
    return en;
  }
  return es;
}
