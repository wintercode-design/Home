import React from "react";
import { motion } from "framer-motion";

interface testimonyBadgeProps {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
}

const TestimonyBadge = ({ title, subtitle, imageUrl }: testimonyBadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.42, 0, 0.58, 1] }}
      className="flex gap-3 p-3 rounded-xl w-fit border-[1px] border-white/20"
    >
      <img
        src="/"
        alt={imageUrl}
        className="rounded-full size-[30px] bg-gray-200"
      />
      <div className="flex flex-col">
        <strong>{title}</strong>
        <article className="text-[#79808C]">{subtitle}</article>
      </div>
    </motion.div>
  );
};

export default TestimonyBadge;
