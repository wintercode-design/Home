import React from "react";
import Container from "../base/Container";
import SectionHead from "../ui/SectionHead";

const TeamMembers = () => {
  return (
    <div>
      <Container
        stylebg="bg-[#081120]"
        className="flex flex-col justify-center items-center gap-[50px] py-[100px]"
      >
        <SectionHead
          sectionTitle={"Team"}
          sectionSubtitle={"The People Behind WinterCode"}
          sectionDescription={
            "Our strength lies in our people. Every project is handled by talented professionals who are passionate about technology, creativity, and client success."
          }
        />
      </Container>
      <div className="flex flex-col relative justify-center items-center w-full">
        <img
          src={"/team/team.png"}
          alt="team"
          className="object-cover w-screen"
        />
      </div>
    </div>
  );
};

export default TeamMembers;
