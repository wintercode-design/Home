"use client";
import React from "react";
import Container from "../base/Container";
import SectionHead from "../ui/SectionHead";
import { useTranslations } from "@/hooks/useMessages";
import { motion } from "framer-motion";

const CoreValues = () => {
  const t = useTranslations("HomePage.coreValues");
  console.log(t("integrity"));

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-4xl h-full">
        {[
          {
            title: t("integrity").title,
            description: t("integrity").description,
            image: "/values/value1.png",
          },
          {
            title: t("innovation").title,
            description: t("innovation").description,
            image: "/values/value2.png",
          },
          {
            title: t("customerCentricity").title,
            description: t("customerCentricity").description,
            image: "/values/value3.png",
          },
          {
            title: t("collaboration").title,
            description: t("collaboration").description,
            image: "/values/value4.png",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
              ease: [0.42, 0, 0.58, 1],
            }}
            style={{ background: `url(${item.image})` }}
            className="rounded-xl w-full min-w-[250px] lg:max-w-[400px] h-[300px] max-h-[300px] p-4 flex flex-col justify-end mx-auto"
          >
            <div className="w-[150px]">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
};

export default CoreValues;
