import React from "react";
import Container from "../base/Container";
import SectionHead from "../ui/SectionHead";
import Badge from "../ui/Badge";

const ToolsUsed = () => {
  return (
    <Container
      stylebg="bg-[#1A202C]/50"
      className="flex flex-col justify-center items-center gap-[50px] py-[100px]"
    >
      <SectionHead
        sectionTitle={"Our tools"}
        sectionSubtitle={"Some of our main tools"}
        sectionDescription={
          "Great and reliable software demand good and reliable tools to develop them, here ar some of the tools we use in our development process"
        }
      />

      <div className="flex flex-col justify-center items-center gap-6">
        <div className="flex flex-wrap gap-2 justify-center items-center">
          {[
            "GPT",
            "docker",
            "github",
            "figma",
            "nextjs",
            "nodejs",
            "tailwindcss",
            "visualstudio",
            "google",
            "kubernetes",
            "edge",
            "nodejs",
          ].map((item, index) => (
            <Badge
              icon={
                item as
                  | "GPT"
                  | "docker"
                  | "github"
                  | "figma"
                  | "nextjs"
                  | "nodejs"
                  | "tailwindcss"
                  | "visualstudio"
                  | "google"
                  | "kubernetes"
                  | "edge"
              }
              key={index}
            />
          ))}
        </div>
        <div className="flex justify-center items-center gap-3">
          {[1, 2, 3, 4].map((item, index) => (
            <hr className="w-16 h-[4px]" key={index} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ToolsUsed;
