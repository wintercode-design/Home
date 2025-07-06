import React from "react";
import { motion } from "framer-motion";

interface missionVissionProps {
  title: string;
  description: string;
  image: string;
}

const MissionVission = ({ title, image, description }: missionVissionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.42, 0, 0.58, 1] }}
      className="flex flex-col gap-6 w-full max-w-[400px]"
    >
      <h3>{title}</h3>
      <div className="flex flex-col gap-4">
        <img
          src={image}
          alt="Mission and Vision"
          className="w-full h-[175px] rounded-xl"
        />
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

export default MissionVission;
