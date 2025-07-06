import React from "react";
import Container from "../base/Container";
import SectionHead from "../ui/SectionHead";
import ServiceCard from "../ui/ServiceCard";
import ButtonOpt from "../ui/Button";
import Link from "next/link";

const ServicesOffered = () => {
  return (
    <Container className="flex flex-col justify-center items-center gap-[50px] py-[100px]">
      <SectionHead
        sectionTitle={"Services"}
        sectionSubtitle={"Our Services"}
        sectionDescription={
          "The best digital solutions at your door step. empower your company with digital solutions"
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <ServiceCard
          title={"Web Development"}
          imageUrl={"/services/service1.png"}
          description={
            "Professional websites built with performance and design in mind."
          }
        />
        <ServiceCard
          title={"ERP Systems"}
          imageUrl={"/services/service2.png"}
          description={
            "Tailored business software to streamline your operations."
          }
        />
        <ServiceCard
          title={"E-Commerce"}
          imageUrl={"/services/service3.png"}
          description={"Robust online stores with secure payment integration."}
        />
        <ServiceCard
          title={"Hosting & Domain"}
          imageUrl={"/services/service4.png"}
          description={"Reliable web hosting and domain registration packages."}
        />
      </div>

      <div className="flex justify-center mt-8">
        <Link href="/services">
          <ButtonOpt title="View More Services" icon={"arrow"} isNav={false} />
        </Link>
      </div>
    </Container>
  );
};

export default ServicesOffered;
