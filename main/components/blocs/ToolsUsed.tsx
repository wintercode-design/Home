import React from "react";
import Container from "../base/Container";
import SectionHead from "../ui/SectionHead";
import Badge from "../ui/Badge";
// import { useTranslations } from "@/hooks/useMessages";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const ToolsUsed = () => {
  const t = useTranslations("Common.tools");

  return (
    <Container
      stylebg="bg-[#1A202C]/50"
      className="flex flex-col justify-center items-center gap-[50px] py-[100px]"
    >
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
      >
        <SectionHead
          sectionTitle={t("title")}
          sectionSubtitle={t("subtitle")}
          sectionDescription={t("description")}
        />
      </motion.div>

      <div className="flex flex-col justify-center items-center gap-6">
        <div className="flex flex-wrap gap-2 justify-center items-center">
          {[
            "GPT",
            "docker",
            "github",
            "figma",
            "nextjs",
            "nodejs",
            "tailwindcss",
            "visualstudio",
            "google",
            "kubernetes",
            "edge",
            "nodejs",
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.42, 0, 0.58, 1],
              }}
            >
              <Badge
                icon={
                  item as
                    | "GPT"
                    | "docker"
                    | "github"
                    | "figma"
                    | "nextjs"
                    | "nodejs"
                    | "tailwindcss"
                    | "visualstudio"
                    | "google"
                    | "kubernetes"
                    | "edge"
                }
              />
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.42, 0, 0.58, 1] }}
          className="flex justify-center items-center gap-3"
        >
          {[1, 2, 3, 4].map((item, index) => (
            <hr className="w-16 h-[4px]" key={index} />
          ))}
        </motion.div>
      </div>
    </Container>
  );
};

export default ToolsUsed;
