"use client";
import { Check, DotsThree, MagnifyingGlass, X } from "phosphor-react";
import React from "react";

const MyIcons = ({ value }: { value: "ok" | "no" | "lens" }) => {
  return (
    <>
      {value === "ok" ? (
        <Check size={16} />
      ) : value === "no" ? (
        <X size={16} />
      ) : value === "lens" ? (
        <MagnifyingGlass size={32} />
      ) : (
        <DotsThree />
      )}
    </>
  );
};

export default MyIcons;
