import React from "react";

interface LoadingProps {
  status?: "loading" | "failed" | "success";
  message?: string;
}

const Loading: React.FC<LoadingProps> = ({ status = "loading", message }) => {
  const getStatusContent = () => {
    switch (status) {
      case "loading":
        return {
          text: message || "Loading...",
          icon: "⏳",
        };
      case "failed":
        return {
          text: message || "Failed to load data",
          icon: "❌",
        };
      case "success":
        return {
          text: message || "Data loaded successfully",
          icon: "✅",
        };
      default:
        return {
          text: "Loading...",
          icon: "⏳",
        };
    }
  };

  const content = getStatusContent();

  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] gap-4">
      <div className="text-4xl">{content.icon}</div>
      <p className="text-lg text-gray-400">{content.text}</p>
      {status === "loading" && (
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
      )}
    </div>
  );
};

export default Loading;
