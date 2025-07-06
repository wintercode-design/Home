"use client";

import Container from "@/components/base/Container";
import StartNewProject from "@/components/blocs/StartNewProject";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectQuery from "@/queries/project";
import { Project } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import Loading from "@/components/ui/Loading";
import SectionHead from "@/components/ui/SectionHead";

const Page = () => {
  const projectQuery = new ProjectQuery();
  const projects = useQuery({
    queryKey: ["getAllProjects"],
    queryFn: () => projectQuery.getAll(),
  });

  if (projects.isLoading) {
    return <Loading status="loading" message="Loading projects..." />;
  }

  if (projects.isError) {
    return <Loading status="failed" message="Failed to load projects" />;
  }

  return (
    <main>
      <Container className="flex flex-col justify-center items-center gap-[50px] py-[100px]">
        <SectionHead
          sectionTitle={"Portfolio/Projects"}
          sectionSubtitle={"Our expertise through results"}
          sectionDescription={
            "Take a look at some of our finest achievements over the past years"
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.data?.map((project: Project, index: number) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </Container>

      <StartNewProject />
    </main>
  );
};

export default Page;
