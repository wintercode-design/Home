import React from "react";
import Container from "../base/Container";
import SectionHead from "../ui/SectionHead";

const PartnersList = () => {
  return (
    <Container
      stylebg="bg-[#1A202C]/50"
      className="flex flex-col justify-center items-center gap-[50px] min-h-[60vh] py-[100px]"
    >
      <SectionHead
        sectionTitle={"Partners"}
        sectionSubtitle={"They trust us"}
        sectionDescription={
          "Why should you work with us at wintercode and what do you benefit"
        }
      />

      <div className="flex flex-wrap justify-center gap-6">
        {[
          "/partners/partner1.png",
          "/partners/partner2.png",
          "/partners/partner3.png",
          "/partners/partner4.png",
          "/partners/partner5.png",
          "/partners/partner6.png",
        ].map((item, index) => (
          <img
            key={index}
            src={`${item}`}
            alt="partner"
            className="w-[60px] h-[60px] object-cover rounded-full"
          />
        ))}
      </div>
    </Container>
  );
};

export default PartnersList;
