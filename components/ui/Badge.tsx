"use client";

import {
  ArrowCircleLeft,
  ArrowCircleRight,
  At,
  FacebookLogo,
  LinkedinLogo,
  MapPinLine,
  Phone,
  WhatsappLogo,
} from "phosphor-react";
import React from "react";

interface badgeProps {
  icon:
    | "whatsapp"
    | "mail"
    | "phone"
    | "location"
    | "facebook"
    | "linkedin"
    | "prev"
    | "next"
    | "number"
    | "GPT"
    | "docker"
    | "github"
    | "figma"
    | "nextjs"
    | "nodejs"
    | "tailwindcss"
    | "visualstudio"
    | "google"
    | "kubernetes"
    | "edge"
    | "seo"
    | "nodejs"
    | null;
  num?: number;
}

const Badge = ({ icon, num }: badgeProps) => {
  return (
    <div className="p-2 w-fit rounded-xl bg-radial from-[#373C44] via-[#373C44] to-[#474747] border-[1px] border-white/20">
      {icon === "whatsapp" ? (
        <WhatsappLogo size={16} />
      ) : icon === "mail" ? (
        <At size={16} />
      ) : icon === "phone" ? (
        <Phone size={16} />
      ) : icon === "location" ? (
        <MapPinLine size={16} />
      ) : icon === "facebook" ? (
        <FacebookLogo size={16} />
      ) : icon === "linkedin" ? (
        <LinkedinLogo size={16} />
      ) : icon === "prev" ? (
        <ArrowCircleLeft size={16} />
      ) : icon === "next" ? (
        <ArrowCircleRight size={16} />
      ) : icon === "number" ? (
        <p className="w-[16px] h-[16px] flex justify-center items-center">
          {num}
        </p>
      ) : icon === "GPT" ? (
        <img src="/icons/chatgpt-icon.png" alt="gpt" className="w-6 h-6" />
      ) : icon === "docker" ? (
        <img src="/icons/docker-icon.png" alt="docker" className="w-6 h-6" />
      ) : icon === "github" ? (
        <img
          src="/icons/edge-browser-icon.png"
          alt="github"
          className="w-6 h-6"
        />
      ) : icon === "figma" ? (
        <img src="/icons/figma-icon.png" alt="figma" className="w-6 h-6" />
      ) : icon === "nextjs" ? (
        <img src="/icons/nextjs-icon.png" alt="nextjs" className="w-6 h-6" />
      ) : icon === "nodejs" ? (
        <img src="/icons/node-js-icon.png" alt="nodejs" className="w-6 h-6" />
      ) : icon === "tailwindcss" ? (
        <img
          src="/icons/tailwind-css-icon.png"
          alt="tailwindcss"
          className="w-6 h-6"
        />
      ) : icon === "visualstudio" ? (
        <img
          src="/icons/visual-studio-code-icon.png"
          alt="visualstudio"
          className="w-6 h-6"
        />
      ) : icon === "google" ? (
        <img
          src="/icons/google-drive-color-icon.png"
          alt="google"
          className="w-6 h-6"
        />
      ) : icon === "kubernetes" ? (
        <img
          src="/icons/kubernetes-icon.png"
          alt="kubernetes"
          className="w-6 h-6"
        />
      ) : icon === "edge" ? (
        <img
          src="/icons/edge-browser-icon.png"
          alt="edge"
          className="w-6 h-6"
        />
      ) : icon === "seo" ? (
        <img src="/icons/seo.png" alt="edge" className="w-6 h-6" />
      ) : (
        <WhatsappLogo size={24} />
      )}
    </div>
  );
};

export default Badge;
