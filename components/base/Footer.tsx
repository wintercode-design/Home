import Link from "next/link";
import { title } from "process";
import React from "react";
import Badge from "../ui/Badge";
import ButtonOpt from "../ui/Button";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6  px-6 md:px-0 py-[100px]">
      <div className="w-full flex flex-col lg:flex-row items-start gap-10">
        <div className="w-full md:w-1/3">
          <div className="flex flex-col justify-center items-start max-w-[290px] gap-3 ">
            <div className="flex gap-3">
              <img
                src="/Logo_wintercode_design.png"
                alt=""
                className=" size-11 rounded-full"
              />
              <h6>
                Wintercode <br />
                Design
              </h6>
            </div>

            <p>
              {
                "WinterCode is your trusted partner for custom web solutions, ERP systems, e-commerce, and hosting services across Africa and beyond."
              }
            </p>
          </div>
        </div>

        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-3">
          <div className="flex flex-col gap-3">
            <h5>{"Quick Links"}</h5>
            <ol className="flex flex-col gap-3">
              {[
                {
                  title: "Home",
                  link: "/",
                },
                {
                  title: "About us",
                  link: "/about",
                },
                {
                  title: "Services",
                  link: "/services",
                },
                {
                  title: "Portfolio",
                  link: "/portfolio",
                },
                {
                  title: "Pricing",
                  link: "/pricing",
                },
                {
                  title: "Blog",
                  link: "/blog",
                },
                {
                  title: "FAQs",
                  link: "/faqs",
                },
                {
                  title: "Contact",
                  link: "/contact",
                },
                {
                  title: "Start a project",
                  link: "/quote",
                },
              ].map((item, key) => {
                return (
                  <li key={key}>
                    <Link href={`${item.link}`}>{item.title}</Link>
                  </li>
                );
              })}
            </ol>
          </div>
          <div className="flex flex-col gap-3">
            <h5>{"Services"}</h5>
            <ol className="flex flex-col gap-3">
              {[
                {
                  title: "Web Development",
                  link: "/services/web-development",
                },
                {
                  title: "E-commerce",
                  link: "/services/e-commerce",
                },
                {
                  title: "ERP Systems",
                  link: "/services/erp-systems",
                },
                {
                  title: "Hosting Services",
                  link: "/services/hosting-services",
                },
              ].map((item, key) => {
                return (
                  <li key={key}>
                    <Link href={`${item.link}`}>{item.title}</Link>
                  </li>
                );
              })}
            </ol>
          </div>
          <div className="flex flex-col gap-3">
            <h5>{"Contact Information"}</h5>
            <ol className="flex flex-col gap-3">
              {[
                {
                  title: "kenfackjordanjunior@gmail.com",
                  link: "mailto:kenfackjordanjunior@gmail.com",
                  badge: "mail",
                },
                {
                  title: "+237657071178",
                  link: "tel:+237657071178",
                  badge: "phone",
                },
                {
                  title: "Douala, Cameroon",
                  link: "https://goo.gl/maps/4v7x5Z1g2kF2",
                  badge: "location",
                },
              ].map((item, key) => {
                return (
                  <li key={key} className="flex gap-3 items-center">
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
                    <Link href={`${item.link}`}>{item.title}</Link>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 justify-between md:items-end w-full">
        <div className="flex flex-col gap-3 max-w-[260px]">
          <h5>{"Stay Connected"}</h5>
          <p>
            {
              "Subscribe to our newsletter and get the latest tech tips, industry insights, and project updates straight to your inbox."
            }
          </p>
        </div>

        <div className="flex gap-3 justify-between bg-black rounded-full pl-3 p-1 h-fit">
          <input
            type="email"
            className="rounded-full w-full"
            placeholder="robert@gmail.com"
          />

          <ButtonOpt title="Register" isSelected={true} />
        </div>
      </div>

      <div className="flex justify-between gap-3 w-full border-t border-[#474747] mt-3 pt-6 h-fit">
        <p>developed by wintercode 2025</p>
        <div className="flex gap-3">
          <Badge icon="whatsapp" />
          <Badge icon="facebook" />
          <Badge icon="linkedin" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
