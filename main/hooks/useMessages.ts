"use client";
import { useLanguage } from "@/providers/languageProvider";
import { useEffect, useState } from "react";

export const useMessages = () => {
  const { language } = useLanguage();
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    const loadMessages = async () => {
      try {
        const messagesModule = await import(`@/messages/${language}.json`);
        setMessages(messagesModule.default);
      } catch (error) {
        console.error(
          `Failed to load messages for language: ${language}`,
          error
        );
        // Fallback to English
        const fallbackMessages = await import(`@/messages/en.json`);
        setMessages(fallbackMessages.default);
      }
    };

    loadMessages();
  }, [language]);

  return messages;
};

export const useTranslations = (namespace: string) => {
  const messages = useMessages();

  if (!messages) {
    return (key: string) => key; // Return key as fallback
  }

  const namespaceMessages = namespace.split(".").reduce((obj, key) => {
    return obj?.[key] || {};
  }, messages);

  return (key: string) => {
    return namespaceMessages[key] || key;
  };
};
