"use client";
import React, { useState } from "react";
import Container from "../base/Container";
import SectionHead from "../ui/SectionHead";
import Accordion from "../ui/Accordion";
import FaqQuery from "@/queries/faq";
import { FaqT } from "@/types/types";
import { useQuery } from "@tanstack/react-query";

const WhyChooseUs = () => {
  const faqQuery = new FaqQuery();
  const [selectedCategory, setSelectedCategory] =
    useState<string>("General & Services");

  const faqs = useQuery({
    queryKey: ["getHomeFaqs"],
    queryFn: () => faqQuery.getAll(),
  });

  // Predefined categories for home page (keeping original design)
  const predefinedCategories = [
    {
      title: "Full Customization",
      description:
        "We offer fully customized solutions tailored to your specific needs.",
      icon: "figma" as const,
      backendCategory: "General & Services",
    },
    {
      title: "24/7 Support",
      description:
        "Our dedicated support team is available around the clock to assist you.",
      icon: "service" as const,
      backendCategory: "General & Services",
    },
    {
      title: "Agile Development",
      description:
        "We follow agile methodologies to ensure timely delivery and flexibility.",
      icon: "process" as const,
      backendCategory: "Technical",
    },
    {
      title: "Business Growth",
      description:
        "Our solutions are designed to help your business grow and succeed.",
      icon: "business" as const,
      backendCategory: "Working With WinterCode",
    },
    {
      title: "Affordable Pricing",
      description:
        "We offer competitive pricing without compromising on quality.",
      icon: "pricing" as const,
      backendCategory: "Pricing & Payment",
    },
  ];

  // Filter FAQs by selected category
  const getFilteredFaqs = (): FaqT[] => {
    if (!faqs.data) return [];
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
      <SectionHead
        sectionTitle={"Why Choose Us"}
        sectionSubtitle={"Why Choose WinterCode"}
        sectionDescription={
          "Why should you work with us at wintercode and what do you benefit"
        }
      />

      <div className="flex flex-col-reverse lg:flex-row gap-14">
        <div className="flex flex-col gap-4 w-full lg:w-1/2">
          {predefinedCategories.map((item, index) => (
            <Accordion
              key={index}
              title={item.title}
              description={item.description}
              selected={selectedCategory === item.backendCategory}
              icon={item.icon}
              onClick={() => setSelectedCategory(item.backendCategory)}
            />
          ))}
        </div>
        <div className="flex flex-col gap-11 p-3 w-full lg:w-1/2">
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
                <p>
                  {
                    "We don't believe in one-size-fits-all. Every solution we build is crafted to reflect your brand's unique goals, industry, and customer base. From visuals to backend logic, you stay in control."
                  }
                </p>
              )}
            </div>
            <img
              src="/"
              alt="logo"
              className="min-w-[120px] h-[120px] bg-gray-200 rounded-full"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WhyChooseUs;
