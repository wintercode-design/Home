import React from "react";
import Container from "../base/Container";
import SectionHead from "../ui/SectionHead";
import Accordion from "../ui/Accordion";

const WhyChooseUs = () => {
  return (
    <Container
      stylebg="bg-[#1A202C]/50"
      className="flex flex-col justify-center items-center gap-[50px] min-h-[60vh] py-[100px]"
    >
      <SectionHead
        sectionTitle={"Why Choose Us"}
        sectionSubtitle={"Why Choose WinterCode"}
        sectionDescription={
          "Why should you work with us at wintercode and what do you benefit"
        }
      />

      <div className="flex flex-col-reverse lg:flex-row gap-14">
        <div className="flex flex-col gap-4 w-full lg:w-1/2">
          {[
            {
              title: "Full Customization",
              description:
                "We offer fully customized solutions tailored to your specific needs.",
              icon: "figma",
            },
            {
              title: "24/7 Support",
              description:
                "Our dedicated support team is available around the clock to assist you.",
              icon: "service",
            },
            {
              title: "Agile Development",
              description:
                "We follow agile methodologies to ensure timely delivery and flexibility.",
              icon: "process",
            },
            {
              title: "Business Growth",
              description:
                "Our solutions are designed to help your business grow and succeed.",
              icon: "business",
            },
            {
              title: "Affordable Pricing",
              description:
                "We offer competitive pricing without compromising on quality.",
              icon: "pricing",
            },
          ].map((item, index) => (
            <Accordion
              key={index}
              title={item.title}
              description={item.description}
              selected={index === 0}
              icon={
                item.icon as
                  | "figma"
                  | "service"
                  | "process"
                  | "business"
                  | "pricing"
                  | null
              }
            />
          ))}
        </div>
        <div className="flex flex-col gap-11 p-3 w-full lg:w-1/2">
          <img
            src={"/why/why.png"}
            alt="acordeon-bg"
            className=" bg-gray-200 min-h-[384px] h-full w-full rounded-xl object-cover"
          />

          <div className="flex justify-between gap-3">
            <div className="flex flex-col gap-2 flex-1">
              <h4>{"Full Customization"}</h4>
              <article>{"Solutions built specifically for your needs"}</article>
              <p>
                {
                  "We don’t believe in one-size-fits-all. Every solution we build is crafted to reflect your brand's unique goals, industry, and customer base. From visuals to backend logic, you stay in control."
                }
              </p>
            </div>

            <img
              src="/"
              alt="logo"
              className="min-w-[120px] h-[120px] bg-gray-200 rounded-full"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WhyChooseUs;
