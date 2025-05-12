import React from "react";
import Container from "../base/Container";
import SectionHead from "../ui/SectionHead";
import ButtonOpt from "../ui/Button";

const StartNewProject = () => {
  return (
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
        <article>{"Contact us for details"}</article>
      </div>
    </Container>
  );
};

export default StartNewProject;
