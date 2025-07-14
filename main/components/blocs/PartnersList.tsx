"use client";
import React from "react";
import Container from "../base/Container";
import SectionHead from "../ui/SectionHead";
// import { useTranslations } from "@/hooks/useMessages";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const PartnersList = () => {
  const t = useTranslations("HomePage.partners");
  return (
    <Container
      stylebg="bg-[#1A202C]/50"
      className="flex flex-col justify-center items-center gap-[50px] min-h-[60vh] py-[100px]"
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

      <div className="flex flex-wrap justify-center gap-6">
        {[
          "/partners/partner1.png",
          "/partners/partner2.png",
          "/partners/partner3.png",
          "/partners/partner4.png",
          "/partners/partner5.png",
          "/partners/partner6.png",
        ].map((item, index) => (
          <motion.img
            key={index}
            src={`${item}`}
            alt="partner"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.7,
              delay: index * 0.1,
              ease: [0.42, 0, 0.58, 1],
            }}
            className="w-[60px] h-[60px] object-cover rounded-full"
          />
        ))}
      </div>
    </Container>
  );
};

export default PartnersList;
