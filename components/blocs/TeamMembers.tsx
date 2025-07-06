import React from "react";
import Container from "../base/Container";
import SectionHead from "../ui/SectionHead";
import { useTranslations } from "@/hooks/useMessages";
import { motion } from "framer-motion";

const TeamMembers = () => {
  const t = useTranslations("AboutPage.team");

  return (
    <div>
      <Container
        stylebg="bg-[#081120]"
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
      </Container>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
        className="flex flex-col relative justify-center items-center w-full"
      >
        <img
          src={"/team/team.png"}
          alt="team"
          className="object-cover w-screen brightness-150"
        />
      </motion.div>
    </div>
  );
};

export default TeamMembers;
