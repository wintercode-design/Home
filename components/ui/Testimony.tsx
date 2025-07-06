import React from "react";
import { motion } from "framer-motion";

interface testimonyProps {
  title?: string;
  name?: string;
  role?: string;
  imageUrl?: string;
}

const Testimony = ({ title, name, role, imageUrl }: testimonyProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.42, 0, 0.58, 1] }}
      className="flex flex-col justify-center items-center gap-6 max-w-[650px]"
    >
      <div className="p-3 flex justify-center items-center">
        <h5 className=" text-center">{title}</h5>
      </div>
      <div className="flex flex-col justify-center items-center gap-3 p-3 w-fit">
        <img
          src="/"
          alt={imageUrl}
          className="rounded-full size-[30px] bg-gray-200"
        />
        <div className="flex flex-col justify-center items-center">
          <strong>{name}</strong>
          <article className="text-[#79808C]">{role}</article>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimony;
