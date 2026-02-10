"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import i18n from "@/i18n/config";

export type Language = "en" | "br" | "pt" | "es" | "it" | "fr" | "de" |  "ja" | "zh" | "ru" | "no" | "nl" | "kr" | "se" | "dk";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | null>(null);

const STORAGE_KEY = "app_language";

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLang] = useState<Language>("en");

  // 🔹 Load persisted language on mount
  useEffect(() => {
    const storedLanguage = localStorage.getItem(STORAGE_KEY) as Language | null;

    const initialLanguage =
      storedLanguage ||
      (i18n.language as Language) ||
      "en";

    i18n.changeLanguage(initialLanguage);
    setLang(initialLanguage);
  }, []);

  // 🔹 Change language and persist
  const setLanguage = (lang: Language) => {
    i18n.changeLanguage(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    setLang(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        "useLanguage is being used outside LanguageProvider. Falling back to defaults."
      );
    }

    return {
      language: "en" as const,
      setLanguage: () => {},
    };
  }

  return context;
}
