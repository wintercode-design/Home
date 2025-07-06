"use client";
import React from "react";
import Container from "../base/Container";
import ButtonOpt from "../ui/Button";
import Link from "next/link";
import { useTranslations } from "@/hooks/useMessages";

const Hero = () => {
  const t = useTranslations("HomePage.hero");

  return (
    <Container className="flex flex-col justify-center items-start gap-14 min-h-[80vh] py-[100px]">
      <div>
        <h1 className="hidden lg:block max-w-[581px]">{t("title")}</h1>
        <h2 className="block lg:hidden max-w-[581px]">{t("title")}</h2>
        <h5 className="max-w-[424px]">{t("description")}</h5>
      </div>

      <div className="flex gap-6">
        <Link href={"/contact"}>
          <ButtonOpt title={t("contactCta")} fill={true} icon={"contact"} />
        </Link>
        <Link href={"/quote"}>
          <ButtonOpt title={t("startProjectCta")} icon={"arrow"} />
        </Link>
      </div>
    </Container>
  );
};

export default Hero;
