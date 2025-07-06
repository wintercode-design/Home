"use client";
import { Lightning } from "phosphor-react";
import React from "react";
import { motion } from "framer-motion";

interface sectionHeadProps {
  sectionTitle: string;
  sectionSubtitle: string;
  sectionDescription: string;
}

const SectionHead = ({
  sectionTitle,
  sectionSubtitle,
  sectionDescription,
}: sectionHeadProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.42, 0, 0.58, 1] }}
      className="flex flex-col items-center justify-center gap-9 w-full max-w-[475px]"
    >
      <div className="flex justify-center items-center gap-2 bg-gradient-to-b from-[#444444] to-[#8A8A8A] rounded-full px-3 py-0.5">
        <Lightning
          weight="fill"
          size={16}
          // className="bg-gradient-to-b from-[#1098F7] to-white text-transparent bg-clip-border"
          color="#1098F7"
        />
        <h6 className="text-center">{sectionTitle}</h6>
      </div>

      <div className="flex flex-col items-center justify-center gap-2">
        <h3 className="text-center">{sectionSubtitle}</h3>
        <h6 className="text-center">{sectionDescription}</h6>
      </div>
    </motion.div>
  );
};

export default SectionHead;
