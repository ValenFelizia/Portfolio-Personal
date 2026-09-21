export type { Dictionary } from "./dictionaries";
export { dictionaries, getDictionary } from "./dictionaries";
export { LanguageSwitcher } from "./LanguageSwitcher";
export { LocaleProvider, useDictionary, useLocale } from "./LocaleProvider";
export { LocaleScript } from "./LocaleScript";
export {
  applyDocumentLocale,
  DEFAULT_LOCALE,
  detectBrowserLocale,
  getDocumentLocale,
  isLocale,
  LOCALE_STORAGE_KEY,
  localeBootstrapScript,
  persistLocale,
  readStoredLocale,
  resolveLocale,
  type Locale,
} from "./locale";
export { LOCALES } from "./types";
