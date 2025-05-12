import React from "react";
import Container from "../base/Container";
import SectionHead from "../ui/SectionHead";
import TestimonyBadge from "../ui/TestimonyBadge";
import Testimony from "../ui/Testimony";

const TestimonyList = () => {
  return (
    <Container
      stylebg="bg-[#1A202C]/50"
      className="flex flex-col justify-center items-center gap-[50px] min-h-[60vh] py-[100px]"
    >
      <SectionHead
        sectionTitle={"Testimonials"}
        sectionSubtitle={"Real Success, Real People"}
        sectionDescription={
          "A happy partner is the key to our success. Your Satisfaction our priority"
        }
      />

      <div className="flex flex-col justify-center items-center gap-6">
        <div className="flex flex-wrap justify-center gap-3">
          {[
            {
              imageUrl: "",
              title: "Sarah N.",
              subtitle: "CEO of Africasystem",
            },
            {
              imageUrl: "",
              title: "Jean P",
              subtitle: " Director at Cotraf",
            },
            {
              imageUrl: "",
              title: "Clarisse T,",
              subtitle: "Founder of TShop Online",
            },
            {
              imageUrl: "",
              title: "Victor B.",
              subtitle: " Marketing Manager at AgroSupply",
            },
          ].map((item, index) => (
            <TestimonyBadge
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              imageUrl={"/partners/partner1.png"}
            />
          ))}
        </div>

        <Testimony
          title={`"WinterCode transformed our online presence! Their team not only designed a stunning website but also understood our business needs thoroughly. We saw a 35% increase in online inquiries within the first month."`}
          name={"Clarisse T."}
          role={"Founder of Tshop Online"}
          imageUrl=""
        />
        <div className="flex justify-center items-center gap-3">
          {[1, 2, 3, 4].map((item, index) => (
            <hr className="w-16 h-[4px]" key={index} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default TestimonyList;
