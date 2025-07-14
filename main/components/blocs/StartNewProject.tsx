"use client";
import React from "react";
import Container from "../base/Container";
import SectionHead from "../ui/SectionHead";
import ButtonOpt from "../ui/Button";
import Link from "next/link";
// import { useTranslations } from "@/hooks/useMessages";
import { useTranslations } from "next-intl";

const StartNewProject = () => {
  const t = useTranslations("HomePage.startProject");

  return (
    <Container
      stylebg="bg-[url('/bg/larg-logo.png')] bg-top-right bg-no-repeat"
      className="flex flex-col justify-center items-center gap-[50px] min-h-[60vh]"
    >
      <SectionHead
        sectionTitle={t("title")}
        sectionSubtitle={t("subtitle")}
        sectionDescription={t("description")}
      />

      <div className="flex flex-col justify-center items-center gap-3">
        <Link href={"/quote"}>
          <ButtonOpt title={t("startProject")} isSelected={true} />
        </Link>
        <Link href={"/contact"}>
          <article>{t("contactForDetails")}</article>
        </Link>
      </div>
    </Container>
  );
};

export default StartNewProject;
