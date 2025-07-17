"use client";
import Container from "@/components/base/Container";
import CoreValues from "@/components/blocs/CoreValues";
import MissionAndVission from "@/components/blocs/MissionAndVission";
import StartNewProject from "@/components/blocs/StartNewProject";
import TeamMembers from "@/components/blocs/TeamMembers";
import ToolsUsed from "@/components/blocs/ToolsUsed";
import AboutTop from "@/components/ui/AboutTop";
import SectionHead from "@/components/ui/SectionHead";
// import { useTranslations } from "@/hooks/useMessages";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const Page = () => {
  const t = useTranslations("AboutPage.achievements");

  return (
    <main className=" overflow-hidden">
      <motion.div
        initial="offscreen"
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
        className="bg-[linear-gradient(rgba(255,255,255,0),rgba(26,32,44,1)),url('/bg/laptop2.webp')] bg-cover bg-no-repeat bg-center"
      >
        <Container className="py-[100px]">
          <AboutTop />
        </Container>
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
        >
          <MissionAndVission />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
        >
          <TeamMembers />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
      >
        <CoreValues />
      </motion.div>
      <Container className="flex flex-col justify-center items-center gap-[50px] py-[100px]">
        <SectionHead
          sectionTitle={t("title")}
          sectionSubtitle={t("subtitle")}
          sectionDescription={t("description")}
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
          className="grid grid-cols-2 gap-8"
        >
          {[
            {
              num: t("years.number"),
              title: t("years.title"),
              sub: t("years.subtitle"),
              img: "/",
            },
            {
              num: t("projects.number"),
              title: t("projects.title"),
              sub: t("projects.subtitle"),
              img: "/",
            },
            {
              num: t("clients.number"),
              title: t("clients.title"),
              sub: t("clients.subtitle"),
              img: "/",
            },
            {
              num: t("comingSoon.number"),
              title: t("comingSoon.title"),
              sub: t("comingSoon.subtitle"),
              img: "/",
            },
          ].map((counters, index) => {
            return (
              <div
                className={`flex gap-3 items-center bg-[linear-gradient(rgba(255,255,255,0),rgba(26,32,44,1)),url('${counters.img})] bg-cover bg-no-repeat bg-center`}
                key={index}
              >
                <h3>{counters.num}</h3>
                <p>
                  {counters.title} <br /> <small>{counters.sub}</small>
                </p>
              </div>
            );
          })}
        </motion.div>
      </Container>
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
      >
        <ToolsUsed />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
      >
        <StartNewProject />
      </motion.div>
    </main>
  );
};

export default Page;
