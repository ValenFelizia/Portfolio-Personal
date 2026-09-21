import { en } from "./en";
import { es, type Dictionary } from "./es";
import type { Locale } from "../types";

export type { Dictionary };

export const dictionaries: Record<Locale, Dictionary> = {
  es,
  en,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
