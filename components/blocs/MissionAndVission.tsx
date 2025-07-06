"use client";
import React from "react";
import Container from "../base/Container";
import SectionHead from "../ui/SectionHead";
import MissionVission from "../ui/MissionVission";
import { useTranslations } from "@/hooks/useMessages";

const MissionAndVission = () => {
  const t = useTranslations("AboutPage.missionVision");

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <MissionVission
          title={t("mission").title}
          image={"/img/mission1.webp"}
          description={t("mission").description}
        />
        <MissionVission
          title={t("vision").title}
          image={"/img/vission1.webp"}
          description={t("vision").description}
        />
      </div>
    </Container>
  );
};

export default MissionAndVission;
