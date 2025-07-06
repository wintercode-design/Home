import React from "react";
import Container from "../base/Container";
import SectionHead from "../ui/SectionHead";
import { useTranslations } from "@/hooks/useMessages";

const TeamMembers = () => {
  const t = useTranslations("AboutPage.team");

  return (
    <div>
      <Container
        stylebg="bg-[#081120]"
        className="flex flex-col justify-center items-center gap-[50px] py-[100px]"
      >
        <SectionHead
          sectionTitle={t("title")}
          sectionSubtitle={t("subtitle")}
          sectionDescription={t("description")}
        />
      </Container>
      <div className="flex flex-col relative justify-center items-center w-full">
        <img
          src={"/team/team.png"}
          alt="team"
          className="object-cover w-screen brightness-150"
        />
      </div>
    </div>
  );
};

export default TeamMembers;
