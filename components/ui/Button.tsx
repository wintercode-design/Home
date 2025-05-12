"use client";
import React from "react";
import { ArrowCircleRight, File, Phone } from "phosphor-react";
import clsx from "clsx";

interface ButtonProps {
  title: string;
  isSelected?: boolean;
  icon?: "arrow" | "contact" | "quote" | null;
  fill?: boolean;
  isNav?: boolean;
  custom?: string;
}

const ButtonOpt = ({
  title,
  isSelected = false,
  icon = null,
  fill = false,
  isNav = false,
  custom = "",
}: ButtonProps) => {
  const navButtonStyle =
    "px-3 py-1 hover:border-b-[1px] border-solid border-white";

  const buttonStyle = "px-3 py-2 rounded-full outline-1 outline-white";

  const buttonStyleFill =
    "px-3 py-1 rounded-full bg-white text-black outline-1 outline-white";

  const button_style = clsx(
    "w-fit h-fit flex items-center gap-2",
    isNav ? navButtonStyle : buttonStyle,
    fill && buttonStyleFill,
    isSelected &&
      "bg-radial from-[#0059FF] to-[#109DF7]/50 rounded-full outline-none",
    custom
  );

  return (
    <div className={button_style}>
      <p className="min-w-[68px]">{title}</p>
      {icon && (
        <span className="flex items-center justify-center w-fit h-fit rounded-full">
          {icon === "arrow" && (
            <ArrowCircleRight className="size-6" weight="fill" size={16} />
          )}
          {icon === "contact" && <Phone className="size-6" />}
          {icon === "quote" && <File className="size-6" />}
        </span>
      )}
    </div>
  );
};

export default ButtonOpt;
