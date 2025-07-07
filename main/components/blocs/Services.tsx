"use client";
import React from "react";
import Container from "../base/Container";
import Badge from "../ui/Badge";
import ButtonOpt from "../ui/Button";
import { useTranslations } from "@/hooks/useMessages";
import { motion } from "framer-motion";

interface serviceProps {
  service: {
    title: string;
    imgurl: string;
    text: string[];
    subTitle: string;
    icons: {
      title: string;
      link: string;
      badge: string;
    }[];
    detail: {
      link: string;
      linkTitle: string;
    };
  };
  revers: boolean;
}

const Services = ({ revers, service }: serviceProps) => {
  const t = useTranslations(`ServicesPage.${service.title.split(".")[0]}`);
  console.log(
    `ServicesPage.${service.title.split(".")[0]}`,
    t(service.title.split(".")[1])
  );
  return (
    <Container
      className={`flex flex-col gap-6 py-[50px] ${
        revers ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <motion.img
        src={service.imgurl}
        alt={t(service.title.split(".")[1])}
        initial={{ opacity: 0, x: revers ? 60 : -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
        className="w-full max-h-[465px] rounded-xl bg-gray-200"
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.42, 0, 0.58, 1] }}
        className="flex flex-col gap-6 w-full"
      >
        <div className="flex flex-col gap-3">
          <h3>{t(service.title.split(".")[1])}</h3>
          {service.text.map((text, key) => (
            <p key={key}>{t(text.split(".")[1])}</p>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <h5>{t(service.subTitle.split(".")[1])}</h5>
          <div className="flex flex-wrap gap-2">
            {service.icons.map((item, key) => {
              return (
                <motion.li
                  key={key}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    duration: 0.5,
                    delay: key * 0.1,
                    ease: [0.42, 0, 0.58, 1],
                  }}
                  className="flex gap-3 items-center w-fit"
                >
                  <Badge
                    icon={
                      item.badge as
                        | "whatsapp"
                        | "mail"
                        | "phone"
                        | "location"
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
                        | null
                    }
                  />
                  <p className="w-[200px]">{t(item.title.split(".")[1])}</p>
                </motion.li>
              );
            })}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.42, 0, 0.58, 1] }}
        >
          <ButtonOpt
            title={t(service.detail.linkTitle.split(".")[1])}
            icon={"arrow"}
          />
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Services;
