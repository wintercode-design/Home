"use client";
import clsx from "clsx";
import {
  Cloud,
  Coins,
  FigmaLogo,
  Handshake,
  Headset,
  Kanban,
  LockKey,
  Wrench,
} from "phosphor-react";
import React from "react";

interface accordionProps {
  title: string;
  description: string;
  icon: "figma" | "service" | "process" | "business" | "pricing" | null;
  selected?: boolean;
}

const Accordion = ({
  title,
  description,
  icon,
  selected = false,
}: accordionProps) => {
  return (
    <div
      className={clsx(
        `flex p-6 gap-6 border-l-2`,
        selected ? "border-[#1098f7] bg-[#232C3D]" : "border-[#79808C]"
      )}
    >
      <span className="p-3 rounded-full flex justify-center items-center bg-[#3A3A3A]">
        {icon === "figma" ? (
          <FigmaLogo color="#FFFFFF" weight="fill" size={24} />
        ) : icon === "service" ? (
          <Cloud color="#FFFFFF" weight="fill" size={24} />
        ) : icon === "process" ? (
          <Kanban color="#FFFFFF" weight="fill" size={24} />
        ) : icon === "business" ? (
          <Handshake color="#FFFFFF" weight="fill" size={24} />
        ) : icon === "pricing" ? (
          <Coins color="#FFFFFF" weight="fill" size={24} />
        ) : icon === "service" ? (
          <Headset color="#FFFFFF" weight="fill" size={24} />
        ) : icon === "tech" ? (
          <Wrench color="#FFFFFF" weight="fill" size={24} />
        ) : icon === "lock" ? (
          <LockKey color="#FFFFFF" weight="fill" size={24} />
        ) : null}
      </span>
      <div className="flex flex-col gap-1">
        <h6>{title}</h6>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Accordion;
