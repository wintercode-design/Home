import Container from "@/components/base/Container";
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

      <Container
        stylebg="bg-[url('/bg/larg-logo.png')] bg-top-right bg-no-repeat"
        className="flex flex-col justify-center items-center gap-[50px] min-h-[60vh]"
      >
        <SectionHead
          sectionTitle={"Start now"}
          sectionSubtitle={"Let’s build your next project together."}
          sectionDescription={
            "Get in touch with us and get your own custom made website and push your company to success"
          }
        />

        <div className="flex flex-col justify-center items-center gap-3">
          <ButtonOpt title={"Start Project"} isSelected={true} />
          <caption>{"Contact us for details"}</caption>
        </div>
      </Container>
    </main>
  );
};

export default page;
