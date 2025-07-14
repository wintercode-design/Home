"use client";
import React from "react";
import ButtonOpt from "./Button";
import Link from "next/link";
// import { useTranslations } from "@/hooks/useMessages";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

interface serviceCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
}

const ServiceCard = ({ title, description, imageUrl }: serviceCardProps) => {
  const t = useTranslations("HomePage.services");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.42, 0, 0.58, 1] }}
      className="w-full md:max-w-[400px] h-fit p-3 rounded-xl flex flex-col gap-4 border-2 border-white/10"
    >
      <img
        src={imageUrl}
        alt="image"
        className="w-full rounded-lg h-full min-h-[200px] bg-gray-200 object-cover"
      />
      <div className="space-y-2">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
      <Link href="/services">
        <ButtonOpt title={t("readMore")} icon={"arrow"} isNav={false} />
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
