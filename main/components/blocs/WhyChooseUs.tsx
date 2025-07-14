"use client";
import React, { useState } from "react";
import Container from "../base/Container";
import SectionHead from "../ui/SectionHead";
import Accordion from "../ui/Accordion";
import FaqQuery from "@/queries/faq";
import { FaqT } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
// import { useTranslations } from "@/hooks/useMessages";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useAppContext } from "@/providers/appContext";

const WhyChooseUs = () => {
  const { baseURL } = useAppContext();
  const faqQuery = new FaqQuery(baseURL);
  const t = useTranslations("HomePage.whyChooseUs");
  const [selectedCategory, setSelectedCategory] =
    useState<string>("General & Services");

  const faqs = useQuery({
    queryKey: ["getHomeFaqs"],
    queryFn: () => faqQuery.getAll(),
  });

  // Predefined categories for home page (keeping original design)
  const predefinedCategories = [
    {
      title: t("fullCustomization.title"),
      description: t("fullCustomization.description"),
      icon: "figma" as const,
      backendCategory: "General & Services",
    },
    {
      title: t("support.title"),
      description: t("support.description"),
      icon: "service" as const,
      backendCategory: "General & Services",
    },
    {
      title: t("agileDevelopment.title"),
      description: t("agileDevelopment.description"),
      icon: "process" as const,
      backendCategory: "Technical",
    },
    {
      title: t("businessGrowth.title"),
      description: t("businessGrowth.description"),
      icon: "business" as const,
      backendCategory: "Working With WinterCode",
    },
    {
      title: t("affordablePricing.title"),
      description: t("affordablePricing.description"),
      icon: "pricing" as const,
      backendCategory: "Pricing & Payment",
    },
  ];

  // Filter FAQs by selected category
  const getFilteredFaqs = (): FaqT[] => {
    if (!Array.isArray(faqs.data)) return [];
    return faqs.data.filter((faq: FaqT) => faq.category === selectedCategory);
  };

  // Get the selected category info
  const getSelectedCategoryInfo = () => {
    return (
      predefinedCategories.find(
        (cat) => cat.backendCategory === selectedCategory
      ) || predefinedCategories[0]
    );
  };

  const filteredFaqs = getFilteredFaqs();
  const selectedCategoryInfo = getSelectedCategoryInfo();

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
      <div className="flex flex-col-reverse lg:flex-row gap-14">
        <div className="flex flex-col gap-4 w-full lg:w-1/2">
          {predefinedCategories.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.42, 0, 0.58, 1],
              }}
            >
              <Accordion
                title={item.title}
                description={item.description}
                selected={selectedCategory === item.backendCategory}
                icon={item.icon}
                onClick={() => setSelectedCategory(item.backendCategory)}
              />
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
          className="flex flex-col gap-11 p-3 w-full lg:w-1/2"
        >
          <img
            src={"/why/why.png"}
            alt="acordeon-bg"
            className=" bg-gray-200 min-h-[384px] h-full w-full rounded-xl object-cover"
          />
          <div className="flex justify-between gap-3">
            <div className="flex flex-col gap-2 flex-1">
              <h4>{selectedCategoryInfo.title}</h4>
              <article>{selectedCategoryInfo.description}</article>
              {filteredFaqs.length > 0 ? (
                <div className="space-y-3">
                  {filteredFaqs.slice(0, 2).map((faq: FaqT, index: number) => (
                    <div key={index} className="space-y-1">
                      <h6 className="text-sm font-semibold">{faq.question}</h6>
                      <p className="text-sm text-gray-300">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>{t("defaultDescription")}</p>
              )}
            </div>
            <img
              src="/"
              alt="logo"
              className="min-w-[120px] h-[120px] bg-gray-200 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default WhyChooseUs;
