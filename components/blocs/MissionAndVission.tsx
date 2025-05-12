import React from "react";
import Container from "../base/Container";
import SectionHead from "../ui/SectionHead";
import MissionVission from "../ui/MissionVission";

const MissionAndVission = () => {
  return (
    <Container
      stylebg="bg-[#1A202C]/50"
      className="flex flex-col justify-center items-center gap-[50px] py-[100px]"
    >
      <SectionHead
        sectionTitle={"Our Mission & Vision"}
        sectionSubtitle={"Our Mission & Vision"}
        sectionDescription={
          "Why should you work with us at wintercode and what do you benefit"
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <MissionVission
          title={"Our Mission"}
          image={"/img/mission1.png"}
          description={
            "Our mission is to empower businesses with cutting-edge, tailor-made digital tools that drive growth, simplify operations, and unlock new opportunities."
          }
        />
        <MissionVission
          title={"Our Vision"}
          image={"/img/vission1.png"}
          description={
            "We envision a digital-first Africa, where every business—small or large—can thrive through smart, accessible, and reliable technology."
          }
        />
      </div>
    </Container>
  );
};

export default MissionAndVission;
