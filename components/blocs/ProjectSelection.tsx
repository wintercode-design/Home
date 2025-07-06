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

const ProjectSelection = () => {
  const projectQuery = new ProjectQuery();

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
      <SectionHead
        sectionTitle={"Portfolio/Projects"}
        sectionSubtitle={"Our expertise through results"}
        sectionDescription={
          "Take a look at some of our finest achievements over the past years"
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.data?.slice(0, 4).map((project: Project, index: number) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Link href="/portfolio">
          <ButtonOpt title="View More Projects" icon={"arrow"} isNav={false} />
        </Link>
      </div>
    </Container>
  );
};

export default ProjectSelection;
