import React from "react";
import Container from "../base/Container";
import Badge from "../ui/Badge";
import ButtonOpt from "../ui/Button";

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
  return (
    <Container
      className={`flex flex-col gap-6 py-[50px] ${
        revers ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <img
        src={service.imgurl}
        alt={service.title}
        className="w-full max-h-[465px] rounded-xl bg-gray-200"
      />
      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-3">
          <h3>{service.title}</h3>
          {service.text.map((text, key) => (
            <p key={key}>{text}</p>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <h5>{service.subTitle}</h5>
          <div className="flex flex-wrap gap-2">
            {service.icons.map((item, key) => {
              return (
                <li key={key} className="flex gap-3 items-center w-fit">
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
                  <p className="w-[200px]">{item.title}</p>
                </li>
              );
            })}
          </div>
        </div>
        <div>
          <ButtonOpt title={service.detail.linkTitle} icon={"arrow"} />
        </div>
      </div>
    </Container>
  );
};

export default Services;
