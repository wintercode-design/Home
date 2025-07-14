"use client";
import React from "react";
import Container from "../base/Container";
import SectionHead from "../ui/SectionHead";
import ProjectCard from "../ui/ProjectCard";
import ProjectQuery from "@/queries/project";
import { Project } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import ButtonOpt from "../ui/Button";
import Link from "next/link";
import Loading from "../ui/Loading";
// import { useTranslations } from "@/hooks/useMessages";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useAppContext } from "@/providers/appContext";

const ProjectSelection = () => {
  const { baseURL } = useAppContext();
  const projectQuery = new ProjectQuery(baseURL);
  const t = useTranslations("HomePage.portfolio");

  const projects = useQuery({
    queryKey: ["getHomeProjects"],
    queryFn: () => projectQuery.getAll(),
  });

  if (projects.isLoading) {
    return (
      <Container className="flex flex-col justify-center items-center gap-[50px] py-[100px]">
        <Loading status="loading" message="Loading projects..." />
      </Container>
    );
  }

  if (projects.isError) {
    return (
      <Container className="flex flex-col justify-center items-center gap-[50px] py-[100px]">
        <Loading status="failed" message="Failed to load projects" />
      </Container>
    );
  }

  return (
    <Container className="flex flex-col justify-center items-center gap-[50px] py-[100px]">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.data?.slice(0, 4).map((project: Project, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.7,
              delay: index * 0.12,
              ease: [0.42, 0, 0.58, 1],
            }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.42, 0, 0.58, 1] }}
        className="flex justify-center mt-8"
      >
        <Link href="/portfolio">
          <ButtonOpt title={t("viewMore")} icon={"arrow"} isNav={false} />
        </Link>
      </motion.div>
    </Container>
  );
};

export default ProjectSelection;
