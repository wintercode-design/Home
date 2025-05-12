import React from "react";
import Container from "../base/Container";
import SectionHead from "../ui/SectionHead";

const CoreValues = () => {
  return (
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full h-full">
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
            className=" rounded-xl w-full max-w-[400px] h-[300px] max-h-[300px] p-4 flex flex-col justify-end mx-auto"
          >
            <div className="w-[150px]">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default CoreValues;
