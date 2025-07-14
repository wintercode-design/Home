"use client";
import { Lightning } from "phosphor-react";
import React from "react";
import ButtonOpt from "./Button";
import Link from "next/link";
// import { useTranslations } from "@/hooks/useMessages";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const AboutTop = () => {
  const t = useTranslations("AboutPage");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.42, 0, 0.58, 1] }}
      className="flex flex-col lg:flex-row items-center justify-center p-4 gap-10 min-h-[400px]"
    >
      <img
        src="/about/aboutwinter.webp"
        alt="about wintercode"
        className="w-full h-full max-h-[200px] lg:max-h-[400px] bg-gray-200 rounded-xl object-cover"
      />

      <div className="flex flex-col gap-4 w-full lg:max-w-[500px] h-full justify-between">
        <div className="w-full h-full flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <div className="flex justify-center items-center gap-4 bg-gradient-to-b from-[#444444] to-[#8A8A8A] rounded-full px-3 py-0.5 w-fit">
              <Lightning
                weight="fill"
                size={16}
                // className="bg-gradient-to-b from-[#1098F7] to-white text-transparent bg-clip-border"
                color="#1098F7"
              />
              <h6 className="text-center">{t("aboutBadge")}</h6>
            </div>

            <div className="flex flex-col items-start justify-center gap-2">
              <h3 className="text-center">{t("title")}</h3>
            </div>
          </div>

          <p>{t("description1")}</p>
          <p>{t("description2")}</p>
          <p>{t("description3")}</p>
        </div>

        <Link href={"/contact"}>
          <ButtonOpt title={t("contactUs")} fill={true} />
        </Link>
      </div>
    </motion.div>
  );
};

export default AboutTop;
