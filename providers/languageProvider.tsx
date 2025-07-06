"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<string>("en");

  useEffect(() => {
    // Get language from localStorage or browser default
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguageState(savedLanguage);
    } else {
      // Get browser language and set default
      const browserLang = navigator.language.split("-")[0];
      const supportedLanguages = ["en", "fr", "de"];
      const defaultLang = supportedLanguages.includes(browserLang)
        ? browserLang
        : "en";
      setLanguageState(defaultLang);
      localStorage.setItem("language", defaultLang);
    }
  }, []);

  const setLanguage = (lang: string) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
