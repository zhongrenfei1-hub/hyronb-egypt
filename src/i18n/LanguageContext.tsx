import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from "react";
import translations from "./translations";

export type Lang = "zh" | "en" | "ar";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const STORAGE_KEY = "hyronb-egypt-lang";
const DEFAULT_LANG: Lang = "ar";

const defaultT = (key: string): string => {
  return translations["ar"]?.[key] ?? translations["en"]?.[key] ?? translations["zh"]?.[key] ?? key;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: DEFAULT_LANG,
  setLang: () => {},
  t: defaultT,
  dir: "rtl",
});

export function useLanguage() {
  return useContext(LanguageContext);
}

function readStoredLang(): Lang {
  if (typeof window === "undefined") return DEFAULT_LANG;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "zh" || stored === "en" || stored === "ar") return stored;
  return DEFAULT_LANG;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readStoredLang);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, next);
    }
  }, []);

  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
  }, [lang, dir]);

  const t = useCallback((key: string): string => {
    return translations[lang]?.[key] ?? translations["ar"]?.[key] ?? translations["en"]?.[key] ?? translations["zh"]?.[key] ?? key;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}
