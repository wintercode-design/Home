import Container from "@/components/base/Container";
import CoreValues from "@/components/blocs/CoreValues";
import MissionAndVission from "@/components/blocs/MissionAndVission";
import StartNewProject from "@/components/blocs/StartNewProject";
import TeamMembers from "@/components/blocs/TeamMembers";
import ToolsUsed from "@/components/blocs/ToolsUsed";
import AboutTop from "@/components/ui/AboutTop";
import ButtonOpt from "@/components/ui/Button";
import SectionHead from "@/components/ui/SectionHead";

const page = () => {
  return (
    <main>
      <div className="bg-[linear-gradient(rgba(255,255,255,0),rgba(26,32,44,1)),url('/bg/laptop2.png')] bg-cover bg-no-repeat bg-center">
        <Container className="py-[100px]">
          <AboutTop />
        </Container>

        <MissionAndVission />

        <TeamMembers />
      </div>

      <CoreValues />

      <Container className="flex flex-col justify-center items-center gap-[50px] py-[100px]">
        <SectionHead
          sectionTitle={"Achivements"}
          sectionSubtitle={"WinterCode in Numbers"}
          sectionDescription={
            "Since the creation of winter code we have contributed the growth of several companies"
          }
        />

        <div className="grid grid-cols-2 gap-8">
          {[
            {
              num: "4+",
              title: "Years",
              sub: "Experience",
              img: "/",
            },
            {
              num: "8+",
              title: "Projects",
              sub: "websites | ERP | E-commerce",
              img: "/",
            },
            {
              num: "5+",
              title: "Clients",
              sub: "Companies | Business | individuals",
              img: "/",
            },
            {
              num: "4+",
              title: "Coming soon",
              sub: "Softwares | Websites | Insights",
              img: "/",
            },
          ].map((counters, index) => {
            return (
              <div
                className={`flex gap-3 items-center bg-[linear-gradient(rgba(255,255,255,0),rgba(26,32,44,1)),url('${counters.img})] bg-cover bg-no-repeat bg-center`}
                key={index}
              >
                <h3>{counters.num}</h3>
                <p>
                  {counters.title} <br /> <small>{counters.sub}</small>
                </p>
              </div>
            );
          })}
        </div>
      </Container>

      <ToolsUsed />

      <StartNewProject />
    </main>
  );
};

export default page;
