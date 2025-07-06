"use client";

import { useTranslations } from "@/hooks/useMessages";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { motion, Variants } from "framer-motion";

interface PageIntroProps {
  title: string;
  img?: string;
  links: Array<{ key: string; title: string; link: string }> | null;
  className?: string;
}

const PageIntro = ({ title, img, links, className }: PageIntroProps) => {
  const t = useTranslations("Pages");
  const pathname = usePathname();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.15, delayChildren: 0.1, duration: 0.6 },
    },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  // if (!t("ready").yes) console.log(t("ready").yes);
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{
        backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,0.3),rgba(26,32,44,1)),url('${img}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className={clsx(`h-[40vh] flex justify-center items-center`, className)}
    >
      <motion.div
        className="flex flex-col gap-4 w-fit justify-center items-center"
        variants={containerVariants}
      >
        <motion.h1 variants={itemVariants}>{t(title)}</motion.h1>
        <motion.div
          className="flex gap-3 text-[#79808C]"
          variants={containerVariants}
        >
          {links?.map((item, key) => {
            return (
              <motion.div key={key} variants={itemVariants}>
                <Link href={`${item.link}`} className="flex gap-3 items-center">
                  <h5
                    className={
                      pathname
                        .split("/")
                        .pop()
                        ?.toLocaleLowerCase()
                        .includes(item.title.toLocaleLowerCase())
                        ? "text-white"
                        : ""
                    }
                  >
                    {t(item.key)}
                  </h5>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PageIntro;
