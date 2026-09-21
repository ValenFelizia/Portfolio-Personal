"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { getDictionary, type Dictionary } from "./dictionaries";
import {
  applyDocumentLocale,
  getDocumentLocale,
  persistLocale,
  resolveLocale,
  subscribeLocaleChange,
  type Locale,
} from "./locale";
import { DEFAULT_LOCALE } from "./types";

type LocaleContextValue = {
  locale: Locale;
  dictionary: Dictionary;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function getClientLocaleSnapshot(): Locale {
  return getDocumentLocale();
}

function getServerLocaleSnapshot(): Locale {
  return DEFAULT_LOCALE;
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(
    subscribeLocaleChange,
    getClientLocaleSnapshot,
    getServerLocaleSnapshot,
  );

  useEffect(() => {
    // Ensure data-locale is stamped if the bootstrap script was blocked.
    if (!document.documentElement.dataset.locale) {
      applyDocumentLocale(resolveLocale());
    }
  }, []);

  const setLocale = useCallback((next: Locale) => {
    persistLocale(next);
  }, []);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      dictionary: getDictionary(locale),
      setLocale,
    }),
    [locale, setLocale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }

  return context;
}

export function useDictionary(): Dictionary {
  return useLocale().dictionary;
}
