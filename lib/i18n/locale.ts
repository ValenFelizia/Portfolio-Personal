import {
  DEFAULT_LOCALE,
  isLocale,
  LOCALE_STORAGE_KEY,
  type Locale,
} from "./types";

export { DEFAULT_LOCALE, isLocale, LOCALE_STORAGE_KEY };
export type { Locale };

const LOCALE_CHANGE_EVENT = "portfolio-locale-change";

export function detectBrowserLocale(): Locale {
  if (typeof navigator === "undefined") {
    return DEFAULT_LOCALE;
  }

  const candidates = [
    ...(navigator.languages ?? []),
    navigator.language,
  ].filter(Boolean);

  for (const candidate of candidates) {
    const normalized = String(candidate).toLowerCase();
    if (normalized === "en" || normalized.startsWith("en-")) {
      return "en";
    }
  }

  return DEFAULT_LOCALE;
}

export function readStoredLocale(): Locale | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    return isLocale(stored) ? stored : null;
  } catch {
    return null;
  }
}

/** Resolve active locale: explicit preference wins; otherwise browser detect. */
export function resolveLocale(): Locale {
  return readStoredLocale() ?? detectBrowserLocale();
}

export function applyDocumentLocale(locale: Locale): void {
  if (typeof document === "undefined") {
    return;
  }

  document.documentElement.lang = locale;
  document.documentElement.dataset.locale = locale;
}

export function persistLocale(locale: Locale): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    // Ignore quota / private-mode failures; in-memory locale still works.
  }

  applyDocumentLocale(locale);
  window.dispatchEvent(
    new CustomEvent(LOCALE_CHANGE_EVENT, { detail: locale }),
  );
}

export function subscribeLocaleChange(onStoreChange: () => void): () => void {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  const handler = () => onStoreChange();
  window.addEventListener(LOCALE_CHANGE_EVENT, handler);
  window.addEventListener("storage", handler);
  return () => {
    window.removeEventListener(LOCALE_CHANGE_EVENT, handler);
    window.removeEventListener("storage", handler);
  };
}

export function getDocumentLocale(): Locale {
  if (typeof document === "undefined") {
    return DEFAULT_LOCALE;
  }

  const fromDom = document.documentElement.dataset.locale;
  return isLocale(fromDom) ? fromDom : DEFAULT_LOCALE;
}

/**
 * Inline script: runs before paint to set <html lang> / data-locale.
 * Prefer stored choice; else detect en* → en, otherwise es.
 */
export const localeBootstrapScript = `(function(){try{var k=${JSON.stringify(LOCALE_STORAGE_KEY)};var s=null;try{s=localStorage.getItem(k)}catch(e){}var locale=(s==="en"||s==="es")?s:null;if(!locale){var langs=[];try{langs=(navigator.languages||[]).slice()}catch(e){}try{if(navigator.language)langs.push(navigator.language)}catch(e){}locale="es";for(var i=0;i<langs.length;i++){var n=String(langs[i]||"").toLowerCase();if(n==="en"||n.indexOf("en-")===0){locale="en";break}}}document.documentElement.lang=locale;document.documentElement.dataset.locale=locale}catch(e){document.documentElement.lang="es";document.documentElement.dataset.locale="es"}})();`;
