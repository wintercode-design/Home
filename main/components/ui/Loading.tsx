import React from "react";
// import { useTranslations } from "@/hooks/useMessages";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

interface LoadingProps {
  status?: "loading" | "failed" | "success";
  message?: string;
}

const Loading: React.FC<LoadingProps> = ({ status = "loading", message }) => {
  const t = useTranslations("Common");

  const getStatusContent = () => {
    switch (status) {
      case "loading":
        return {
          text: message || t("loading"),
          icon: "⏳",
        };
      case "failed":
        return {
          text: message || t("loadFailed"),
          icon: "❌",
        };
      case "success":
        return {
          text: message || t("loadSuccess"),
          icon: "✅",
        };
      default:
        return {
          text: t("loading"),
          icon: "⏳",
        };
    }
  };

  const content = getStatusContent();

  return (
    <motion.div
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1, repeat: Infinity, ease: [0.42, 0, 0.58, 1] }}
      className="flex flex-col items-center justify-center min-h-[200px] gap-4"
    >
      <div className="text-4xl">{content.icon}</div>
      <p className="text-lg text-gray-400">{content.text}</p>
      {status === "loading" && (
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
      )}
    </motion.div>
  );
};

export default Loading;
