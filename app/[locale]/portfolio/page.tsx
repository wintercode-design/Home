import Container from "@/components/base/Container";
import StartNewProject from "@/components/blocs/StartNewProject";
import ButtonOpt from "@/components/ui/Button";
import ProjectCardFull from "@/components/ui/ProjectCardFull";
import SectionHead from "@/components/ui/SectionHead";
import React from "react";

const page = () => {
  return (
    <main>
      <Container>
        <div className="py-[100px] grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ProjectCardFull />
          <ProjectCardFull />
          <ProjectCardFull />
          <ProjectCardFull />
          <ProjectCardFull />
          <ProjectCardFull />
        </div>
      </Container>

      <StartNewProject />
    </main>
  );
};

export default page;
