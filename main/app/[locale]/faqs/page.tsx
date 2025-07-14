"use client";
import Container from "@/components/base/Container";
import SectionHead from "@/components/ui/SectionHead";
import Accordion from "@/components/ui/Accordion";
import FaqQuery from "@/queries/faq";
import { FaqT } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
// import { useTranslations } from "@/hooks/useMessages";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useAppContext } from "@/providers/appContext";

export default function FAQPage() {
  const { baseURL } = useAppContext();
  const faqQuery = new FaqQuery(baseURL);
  const [selectedCategory, setSelectedCategory] =
    useState<string>("General & Services");
  const t = useTranslations("FAQPage");
  // console.log(categories);
  const predefinedCategories = [
    {
      title: t("categories.general.title"),
      description: t("categories.general.description"),
      icon: "service" as const,
      backendCategory: "General & Services",
    },
    {
      title: t("categories.pricing.title"),
      description: t("categories.pricing.description"),
      icon: "pricing" as const,
      backendCategory: "Pricing & Payment",
    },
    {
      title: t("categories.technical.title"),
      description: t("categories.technical.description"),
      icon: "tech" as const,
      backendCategory: "Technical",
    },
    {
      title: t("categories.security.title"),
      description: t("categories.security.description"),
      icon: "lock" as const,
      backendCategory: "Security & Ownership",
    },
    {
      title: t("categories.working.title"),
      description: t("categories.working.description"),
      icon: "business" as const,
      backendCategory: "Working With WinterCode",
    },
  ];

  const faqs = useQuery({
    queryKey: ["getAllFaqs"],
    queryFn: () => faqQuery.getAll(),
  });

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
    <main>
      <Container
        stylebg="bg-[#1A202C]/50"
        className="flex flex-col justify-center items-center gap-[50px] min-h-[60vh] py-[100px]"
      >
        <motion.div
          initial="offscreen"
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
        >
          <SectionHead
            sectionTitle={t("title")}
            sectionSubtitle={t("subtitle")}
            sectionDescription={t("description")}
          />
        </motion.div>
        <div className="flex flex-col-reverse lg:flex-row gap-14">
          <motion.div
            initial="offscreen"
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
            className="flex flex-col gap-4 w-full lg:w-1/2"
          >
            {predefinedCategories.length > 0 &&
              predefinedCategories.map((item, index) => (
                <Accordion
                  key={index}
                  title={item.title}
                  description={item.description}
                  selected={selectedCategory === item.backendCategory}
                  icon={item.icon}
                  onClick={() => setSelectedCategory(item.backendCategory)}
                />
              ))}
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
            className="flex flex-col gap-11 p-3 w-full lg:w-1/2"
          >
            <img
              src={"/fqa/fqa.jpeg"}
              alt="FAQ background"
              className="bg-gray-200 max-h-[200px] h-full w-full rounded-xl object-cover"
            />
            {selectedCategoryInfo && selectedCategoryInfo.title && (
              <div className="flex flex-col gap-2 flex-1">
                <h4>{selectedCategoryInfo.title}</h4>
                <article>{selectedCategoryInfo.description}</article>
                {filteredFaqs.length > 0 ? (
                  <div className="space-y-3 mt-4">
                    {filteredFaqs
                      .slice(0, 2)
                      .map((faq: FaqT, index: number) => (
                        <div key={index} className="space-y-1">
                          <h6 className="text-sm font-semibold">
                            {faq.question}
                          </h6>
                          <p className="text-sm text-gray-300">{faq.answer}</p>
                        </div>
                      ))}
                  </div>
                ) : (
                  <p className="mt-4">{t("noFaqsFound")}</p>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </Container>
    </main>
  );
}
