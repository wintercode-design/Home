import Container from "@/components/base/Container";
import Badge from "@/components/ui/Badge";
import ButtonOpt from "@/components/ui/Button";
import SectionHead from "@/components/ui/SectionHead";
import React from "react";

const page = () => {
  return (
    <main>
      {[
        {
          title: "Web Development",
          imgurl: "/services/web.jpeg",
          text: [
            "At WinterCode Design, we craft visually stunning, user-focused websites tailored to reflect your brand's identity and engage your target audience. Our web design service goes beyond aesthetics — we focus on clean, modern layouts, seamless user experience (UX), and responsive interfaces that look great on any device.",
            "Whether you're launching a new brand or revamping your online presence, our design approach ensures your website is not just beautiful, but also functional, intuitive, and conversion-driven.",
          ],
          subTitle: "Key Features",
          icons: [
            {
              title: "Custom design (no templates unless requested)",
              link: "Custom design (no templates unless requested)",
              badge: "figma",
            },
            {
              title: "Lightning-fast load times",
              link: "Lightning-fast load times",
              badge: "nextjs",
            },
            {
              title: "Full mobile responsiveness",
              link: "Full mobile responsiveness",
              badge: "nextjs",
            },
            {
              title: "SEO best practices integrated",
              link: "SEO best practices integrated",
              badge: "edge",
            },
            {
              title: "Easy-to-manage CMS (WordPress, Strapi, or Custom)",
              link: "Easy-to-manage CMS (WordPress, Strapi, or Custom)",
              badge: "seo",
            },
          ],
          detail: {
            link: "",
            linkTitle: "Discover Our Website Packages",
          },
        },
        {
          title: "E-commerce Solutions",
          imgurl: "/services/ecom.jpeg",
          text: [
            "t WinterCode Design, we create sleek, secure, and scalable e-commerce websites that help businesses sell effortlessly online. Whether you're launching a boutique or scaling a full online store, our e-commerce solutions are designed to convert visitors into paying customers with ease.",
            "We focus on delivering seamless shopping experiences — from intuitive product navigation to smooth checkout flows — all tailored to your brand and your market. Our team ensures that your store is not only beautiful but also fast, mobile-friendly, and easy to manage on the backend.",
          ],
          subTitle: "Key Features",
          icons: [
            {
              title: "Custom design (no templates unless requested)",
              link: "Custom design (no templates unless requested)",
              badge: "figma",
            },
            {
              title: "Lightning-fast load times",
              link: "Lightning-fast load times",
              badge: "nextjs",
            },
            {
              title: "Full mobile responsiveness",
              link: "Full mobile responsiveness",
              badge: "nextjs",
            },
            {
              title: "SEO best practices integrated",
              link: "SEO best practices integrated",
              badge: "edge",
            },
            {
              title: "Easy-to-manage CMS (WordPress, Strapi, or Custom)",
              link: "Easy-to-manage CMS (WordPress, Strapi, or Custom)",
              badge: "seo",
            },
          ],
          detail: {
            link: "",
            linkTitle: "Schedule a Free ERP Consultation",
          },
        },
        {
          title: "ERP Systems Development",
          imgurl: "/services/erp.jpeg",
          text: [
            "At WinterCode Design, we build fully customized ERP systems that help businesses streamline their operations, centralize their data, and automate their workflows — all in one secure, modern platform.",
            "From idea to execution, we handle the full lifecycle: business process analysis, UX/UI design, backend development, database architecture, API integration, and role-based dashboards. Whether you need a simple internal tool or a full-scale enterprise solution, we tailor your ERP system to your exact business needs — and make it intuitive, scalable, and future-ready.",
          ],
          subTitle: "Key Features",
          icons: [
            {
              title: "Custom design (no templates unless requested)",
              link: "Custom design (no templates unless requested)",
              badge: "figma",
            },
            {
              title: "Lightning-fast load times",
              link: "Lightning-fast load times",
              badge: "nextjs",
            },
            {
              title: "Full mobile responsiveness",
              link: "Full mobile responsiveness",
              badge: "nextjs",
            },
            {
              title: "SEO best practices integrated",
              link: "SEO best practices integrated",
              badge: "edge",
            },
            {
              title: "Easy-to-manage CMS (WordPress, Strapi, or Custom)",
              link: "Easy-to-manage CMS (WordPress, Strapi, or Custom)",
              badge: "seo",
            },
          ],
          detail: {
            link: "",
            linkTitle: "Schedule a Free ERP Consultation",
          },
        },
      ].map((service, key) => {
        const revers = key === 1;
        return (
          <Container
            className={`flex gap-6 py-[50px] ${
              revers ? "lg:flex-row-reverse" : ""
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
      })}

      <Container
        stylebg="bg-[#1A202C]/50"
        className="flex flex-col justify-center items-center gap-[50px] py-[100px]"
      >
        <SectionHead
          sectionTitle={"Our tools"}
          sectionSubtitle={"Some of our main tools"}
          sectionDescription={
            "Great and reliable software demand good and reliable tools to develop them, here ar some of the tools we use in our development process"
          }
        />

        <div className="flex flex-col justify-center items-center gap-6">
          <div className="flex gap-2 justify-center items-center">
            {[
              "GPT",
              "docker",
              "github",
              "figma",
              "nextjs",
              "nodejs",
              "tailwindcss",
              "visualstudio",
              "google",
              "kubernetes",
              "edge",
              "nodejs",
            ].map((item, index) => (
              <Badge
                icon={
                  item as
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
                }
                key={index}
              />
            ))}
          </div>
          <div className="flex justify-center items-center gap-3">
            {[1, 2, 3, 4].map((item, index) => (
              <hr className="w-16 h-[4px]" key={index} />
            ))}
          </div>
        </div>
      </Container>

      <Container
        stylebg="bg-[url('/bg/larg-logo.png')] bg-top-right bg-no-repeat"
        className="flex flex-col justify-center items-center gap-[50px] min-h-[60vh]"
      >
        <SectionHead
          sectionTitle={"Start now"}
          sectionSubtitle={"Let’s build your next project together."}
          sectionDescription={
            "Get in touch with us and get your own custom made website and push your company to success"
          }
        />

        <div className="flex flex-col justify-center items-center gap-3">
          <ButtonOpt title={"Start Project"} isSelected={true} />
          <caption>{"Contact us for details"}</caption>
        </div>
      </Container>
    </main>
  );
};

export default page;
