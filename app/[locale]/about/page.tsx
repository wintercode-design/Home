import Container from "@/components/base/Container";
import AboutTop from "@/components/ui/AboutTop";
import Badge from "@/components/ui/Badge";
import ButtonOpt from "@/components/ui/Button";
import MissionVission from "@/components/ui/MissionVission";
import SectionHead from "@/components/ui/SectionHead";
import React from "react";

const page = () => {
  return (
    <main>
      <Container className="py-[100px]">
        <AboutTop />
      </Container>
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
      <Container className="flex flex-col justify-center items-center gap-[50px] py-[100px]">
        <SectionHead
          sectionTitle={"Partners"}
          sectionSubtitle={"The People Behind WinterCode"}
          sectionDescription={
            "Our strength lies in our people. Every project is handled by talented professionals who are passionate about technology, creativity, and client success."
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <p>team</p>
        </div>
      </Container>

      <Container
        stylebg="bg-[#1A202C]/50"
        className="flex flex-col justify-center items-center gap-[50px] py-[100px]"
      >
        <SectionHead
          sectionTitle={"Our Core Values"}
          sectionSubtitle={"Our Core Values"}
          sectionDescription={
            "The values by which wintercode stands and help other companies grow"
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-fit h-full">
          {[
            {
              title: "Integrity",
              description:
                "We uphold the highest standards of integrity in all our actions.",
              image: "/values/value1.png",
            },
            {
              title: "Innovation",
              description: "We strive to innovate and improve continuously.",
              image: "/values/value2.png",
            },
            {
              title: "Customer Centricity",
              description:
                "We put our customers at the heart of everything we do.",
              image: "/values/value3.png",
            },
            {
              title: "Collaboration",
              description:
                "We believe in the power of teamwork and collaboration.",
              image: "/values/value4.png",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{ background: `url(${item.image})` }}
              className=" rounded-xl w-[400px] max-w-[400px] h-[300px] max-h-[300px] p-4 flex flex-col justify-end"
            >
              <div className="w-[150px]">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <Container className="flex flex-col justify-center items-center gap-[50px] py-[100px]">
        <SectionHead
          sectionTitle={"Achivements"}
          sectionSubtitle={"WinterCode in Numbers"}
          sectionDescription={
            "Since the creation of winter code we have contributed the growth of several companies"
          }
        />

        <div className="flex flex-col justify-center items-center gap-3">
          <ButtonOpt title={"Start Project"} isSelected={true} />
          <caption>{"Contact us for details"}</caption>
        </div>
      </Container>

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
          <div className="flex gap-2 justify-center items-center">
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
