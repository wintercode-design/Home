"use client";
import React from "react";
import Container from "../base/Container";
import SectionHead from "../ui/SectionHead";
import ServiceCard from "../ui/ServiceCard";
import ButtonOpt from "../ui/Button";
import Link from "next/link";
import { useTranslations } from "@/hooks/useMessages";

const ServicesOffered = () => {
  const t = useTranslations("HomePage.services");

  return (
    <Container className="flex flex-col justify-center items-center gap-[50px] py-[100px]">
      <SectionHead
        sectionTitle={t("title")}
        sectionSubtitle={t("subtitle")}
        sectionDescription={t("description")}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <ServiceCard
          title={t("webDevelopment")}
          imageUrl={"/services/service1.png"}
          description={t("webDevelopmentDesc")}
        />
        <ServiceCard
          title={t("erpSystems")}
          imageUrl={"/services/service2.png"}
          description={t("erpSystemsDesc")}
        />
        <ServiceCard
          title={t("ecommerce")}
          imageUrl={"/services/service3.png"}
          description={t("ecommerceDesc")}
        />
        <ServiceCard
          title={t("hostingDomain")}
          imageUrl={"/services/service4.png"}
          description={t("hostingDomainDesc")}
        />
      </div>

      <div className="flex justify-center mt-8">
        <Link href="/services">
          <ButtonOpt title={t("viewMore")} icon={"arrow"} isNav={false} />
        </Link>
      </div>
    </Container>
  );
};

export default ServicesOffered;
