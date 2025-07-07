"use client";
import { Check, DotsThree, MagnifyingGlass, X } from "phosphor-react";
import React from "react";
import { motion } from "framer-motion";

const MyIcons = ({ value }: { value: "ok" | "no" | "lens" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: [0.42, 0, 0.58, 1] }}
      className="...your existing icon container classes..."
    >
      {value === "ok" ? (
        <Check size={16} />
      ) : value === "no" ? (
        <X size={16} />
      ) : value === "lens" ? (
        <MagnifyingGlass size={32} />
      ) : (
        <DotsThree />
      )}
    </motion.div>
  );
};

export default MyIcons;
