"use client";
import React from "react";
import Container from "../base/Container";
import SectionHead from "../ui/SectionHead";
import ServiceCard from "../ui/ServiceCard";
import ButtonOpt from "../ui/Button";
import Link from "next/link";
// import { useTranslations } from "@/hooks/useMessages";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const ServicesOffered = () => {
  const t = useTranslations("HomePage.services");

  return (
    <Container className="flex flex-col justify-center items-center gap-[50px] py-[100px]">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {[
          {
            title: t("webDevelopment"),
            imageUrl: "/services/service1.png",
            description: t("webDevelopmentDesc"),
          },
          {
            title: t("erpSystems"),
            imageUrl: "/services/service2.png",
            description: t("erpSystemsDesc"),
          },
          {
            title: t("ecommerce"),
            imageUrl: "/services/service3.png",
            description: t("ecommerceDesc"),
          },
          {
            title: t("hostingDomain"),
            imageUrl: "/services/service4.png",
            description: t("hostingDomainDesc"),
          },
        ].map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.7,
              delay: index * 0.12,
              ease: [0.42, 0, 0.58, 1],
            }}
          >
            <ServiceCard {...service} />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.42, 0, 0.58, 1] }}
        className="flex justify-center mt-8"
      >
        <Link href="/services">
          <ButtonOpt title={t("viewMore")} icon={"arrow"} isNav={false} />
        </Link>
      </motion.div>
    </Container>
  );
};

export default ServicesOffered;
