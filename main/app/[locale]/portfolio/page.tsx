"use client";

import Container from "@/components/base/Container";
import StartNewProject from "@/components/blocs/StartNewProject";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectQuery from "@/queries/project";
import { Project } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import Loading from "@/components/ui/Loading";
import SectionHead from "@/components/ui/SectionHead";
// import { useTranslations } from "@/hooks/useMessages";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useAppContext } from "@/providers/appContext";

const Page = () => {
  const { baseURL } = useAppContext();
  const projectQuery = new ProjectQuery(baseURL);
  const t = useTranslations("HomePage.portfolio");
  const loadingT = useTranslations("Common");

  const projects = useQuery({
    queryKey: ["getAllProjects"],
    queryFn: () => projectQuery.getAll(),
  });

  if (projects.isLoading) {
    return <Loading status="loading" message={loadingT("loading")} />;
  }

  if (projects.isError) {
    return <Loading status="failed" message={loadingT("loadFailed")} />;
  }

  return (
    <main className=" overflow-hidden">
      <Container className="flex flex-col justify-center items-center gap-[50px] py-[100px]">
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
        <motion.div
          initial="offscreen"
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.data?.map((project: Project, index: number) => (
            <ProjectCard key={index} {...project} />
          ))}
        </motion.div>
      </Container>
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
