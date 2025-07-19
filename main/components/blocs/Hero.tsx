"use client";
import React from "react";
import Container from "../base/Container";
import ButtonOpt from "../ui/Button";
import Link from "next/link";
// import { useTranslations } from "@/hooks/useMessages";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import ResponsiveScreens from "../ui/ResponsiveScreens";

const Hero = () => {
  const t = useTranslations("HomePage.hero");

  return (
    <Container className="flex flex-col-reverse md:flex-row items-center gap-2 py-[100px] min-h-[80vh]">
      <div className="flex flex-col justify-center items-start gap-14">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
        >
          <h1 className="hidden lg:block max-w-[581px]">{t("title")}</h1>
          <h2 className="block lg:hidden max-w-[581px]">{t("title")}</h2>
        </motion.div>
        <motion.h5
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.42, 0, 0.58, 1] }}
          className="max-w-[424px]"
        >
          {t("description")}
        </motion.h5>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.42, 0, 0.58, 1] }}
          className="flex gap-6"
        >
          <Link href={"/contact"}>
            <ButtonOpt title={t("contactCta")} fill={true} icon={"contact"} />
          </Link>
          <Link href={"/quote"}>
            <ButtonOpt title={t("startProjectCta")} icon={"arrow"} />
          </Link>
        </motion.div>
      </div>

      {/* Responsive Screens Illustration */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.42, 0, 0.58, 1] }}
        className="flex-1 flex justify-center items-center w-full"
      >
        <ResponsiveScreens />
      </motion.div>
    </Container>
  );
};

export default Hero;
