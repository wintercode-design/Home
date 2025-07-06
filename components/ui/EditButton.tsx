import clsx from "clsx";
import React from "react";

type EditButtonProps = {
  size?: "icon" | "default";
  family?: "default" | "sans";
  disabled?: boolean;
  onClick?: (e: any) => any;
  variant?: "ghost" | "default";
  children?: React.ReactNode;
};

const Button = ({
  size = "default",
  family = "default",
  disabled = false,
  variant = "default",
  onClick = (e) => e.preventDefault(),
  children,
}: EditButtonProps) => {
  const buttonsize = size === "icon" ? "h-10 w-10" : "h-10 px-4";
  const buttonFamily = family === "sans" ? "font-sans" : "font-serif";
  const buttonVariant =
    variant === "ghost"
      ? "bg-transparent border border-gray-300"
      : "bg-blue-500 text-white";

  return (
    <button
      // disabled={disabled}
      type="button"
      onClick={(e) => onClick(e)}
      className={clsx(
        buttonsize,
        buttonFamily,
        buttonVariant,
        "flex items-center justify-center rounded shadow-sm hover:bg-blue-300"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
