"use client";
import React, { useState } from "react";
import { useLanguage } from "@/providers/languageProvider";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language: currentLanguage, setLanguage } = useLanguage();

  const languages = [
    { code: "en", name: "English", flag: "/flag/en.webp" },
    { code: "fr", name: "Français", flag: "/flag/fr.webp" },
    { code: "de", name: "Deutsch", flag: "/flag/du.webp" },
  ];

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  const selectedLanguage =
    languages.find((lang) => lang.code === currentLanguage) || languages[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-md hover:bg-white/20 hover:backdrop-blur-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label="Select language"
      >
        <span className="block w-8 h-8 rounded-full overflow-hidden">
          <Image
            src={selectedLanguage.flag}
            alt={selectedLanguage.name + " flag"}
            width={32}
            height={32}
            className="object-cover w-full h-full rounded-full"
          />
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.42, 0, 0.58, 1] }}
            className="absolute top-full right-0 mt-2 w-48 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl z-50 p-2"
          >
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left hover:bg-white/20 hover:backdrop-blur-lg transition-all duration-150 ${
                  currentLanguage === language.code ? "bg-white/20" : ""
                }`}
              >
                <span className="block w-8 h-8 rounded-full overflow-hidden">
                  <Image
                    src={language.flag}
                    alt={language.name + " flag"}
                    width={32}
                    height={32}
                    className="object-cover w-full h-full rounded-full"
                  />
                </span>
                <span className="text-base font-medium text-white/90">
                  {language.name}
                </span>
                {currentLanguage === language.code && (
                  <svg
                    className="w-4 h-4 ml-auto text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;
