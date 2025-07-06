"use client";
import React from "react";
import Container from "../base/Container";
import SectionHead from "../ui/SectionHead";
import { useTranslations } from "@/hooks/useMessages";

const CoreValues = () => {
  const t = useTranslations("HomePage.coreValues");
  console.log(t("integrity"));

  return (
    <Container
      stylebg="bg-[#1A202C]/50"
      className="flex flex-col justify-center items-center gap-[50px] py-[100px]"
    >
      <SectionHead
        sectionTitle={t("title")}
        sectionSubtitle={t("subtitle")}
        sectionDescription={t("description")}
      />

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
          <div
            key={index}
            style={{ background: `url(${item.image})` }}
            className=" rounded-xl w-full min-w-[250px] lg:max-w-[400px] h-[300px] max-h-[300px] p-4 flex flex-col justify-end mx-auto"
          >
            <div className="w-[150px]">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default CoreValues;
