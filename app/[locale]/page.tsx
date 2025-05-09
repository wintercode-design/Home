import Container from "@/components/base/Container";
import Accordion from "@/components/ui/Accordion";
import Badge from "@/components/ui/Badge";
import BlogCard from "@/components/ui/BlogCard";
import ButtonOpt from "@/components/ui/Button";
import ContactForm from "@/components/ui/ContactForm";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectCardFull from "@/components/ui/ProjectCardFull";
import SectionHead from "@/components/ui/SectionHead";
import ServiceCard from "@/components/ui/ServiceCard";
import Testimony from "@/components/ui/Testimony";
import TestimonyBadge from "@/components/ui/TestimonyBadge";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <main>
      <div className="bg-[linear-gradient(rgba(255,255,255,0),rgba(26,32,44,1)),url('/bg/laptop.png')] bg-cover bg-no-repeat">
        <Container className="flex flex-col justify-center items-start gap-14 min-h-[80vh] py-[100px]">
          <div>
            <h1 className="max-w-[581px]">
              Web Solutions That Empower Your Business.
            </h1>
            <h5 className="max-w-[424px]">
              Custom websites, ERP systems, and digital tools that elevate your
              brand.
            </h5>
          </div>

          <div className="flex gap-2">
            <ButtonOpt title={"Contact us"} fill={true} icon={"arrow"} />
            <ButtonOpt title={"Start your Project"} icon={"contact"} />
          </div>
        </Container>

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
              description={
                "Robust online stores with secure payment integration."
              }
            />
            <ServiceCard
              title={"Hosting & Domain"}
              imageUrl={"/services/service4.png"}
              description={
                "Robust online stores with secure Reliable web hosting and domain registration packages. integration."
              }
            />
          </div>
        </Container>

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

          <div className="flex gap-6">
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
      </div>

      <Container className="flex flex-col justify-center items-center gap-[50px] py-[100px]">
        <SectionHead
          sectionTitle={"Portfolio/Projects"}
          sectionSubtitle={"Our expertise through results"}
          sectionDescription={
            "Take a look at some of our finest achievements over the past years"
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            title={"Cotraf – Intercity Transport Booking System"}
            imageUrl={"/projects/project1.png"}
            description={
              "Cotraf is a digital platform designed to manage and centralize the booking of inter-urban transport across multiple agencies in Cameroon."
            }
            subtitle={"Cotraf Cooperative"}
          />
          <ProjectCard
            title={"TShop – E-Commerce Platform for Electronics"}
            imageUrl={"/projects/project2.png"}
            description={
              "TShop needed a scalable e-commerce solution for B2C electronic sales, complete with payment gateways and order tracking."
            }
            subtitle={"TShop Online"}
          />
          <ProjectCard
            title={"Cotraf – Intercity Transport Booking System"}
            imageUrl={"/projects/project3.png"}
            description={
              "Cotraf is a digital platform designed to manage and centralize the booking of inter-urban transport across multiple agencies in Cameroon."
            }
            subtitle={"Cotraf Cooperative"}
          />
          <ProjectCard
            title={"TShop – E-Commerce Platform for Electronics"}
            imageUrl={"/projects/project4.png"}
            description={
              "TShop needed a scalable e-commerce solution for B2C electronic sales, complete with payment gateways and order tracking."
            }
            subtitle={"TShop Online"}
          />
        </div>
      </Container>

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
          <div className="flex gap-3">
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

      <Container
        stylebg="bg-[#1A202C]/50"
        className="flex flex-col justify-center items-center gap-[50px] min-h-[60vh] py-[100px]"
      >
        <SectionHead
          sectionTitle={"Why Choose Us"}
          sectionSubtitle={"Why Choose WinterCode"}
          sectionDescription={
            "Why should you work with us at wintercode and what do you benefit"
          }
        />

        <div className="flex gap-14">
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            {[
              {
                title: "Full Customization",
                description:
                  "We offer fully customized solutions tailored to your specific needs.",
                icon: "figma",
              },
              {
                title: "24/7 Support",
                description:
                  "Our dedicated support team is available around the clock to assist you.",
                icon: "service",
              },
              {
                title: "Agile Development",
                description:
                  "We follow agile methodologies to ensure timely delivery and flexibility.",
                icon: "process",
              },
              {
                title: "Business Growth",
                description:
                  "Our solutions are designed to help your business grow and succeed.",
                icon: "business",
              },
              {
                title: "Affordable Pricing",
                description:
                  "We offer competitive pricing without compromising on quality.",
                icon: "pricing",
              },
            ].map((item, index) => (
              <Accordion
                key={index}
                title={item.title}
                description={item.description}
                selected={index === 0}
                icon={
                  item.icon as
                    | "figma"
                    | "service"
                    | "process"
                    | "business"
                    | "pricing"
                    | null
                }
              />
            ))}
          </div>
          <div className="flex flex-col gap-11 p-3 w-full md:w-1/2">
            <img
              src={"/why/why.png"}
              alt="acordeon-bg"
              className=" bg-gray-200 min-h-[384px] h-full w-full rounded-xl"
            />

            <div className="flex justify-between gap-3">
              <div className="flex flex-col gap-2 flex-1">
                <h4>{"Full Customization"}</h4>
                <caption>
                  {"Solutions built specifically for your needs"}
                </caption>
                <p>
                  {
                    "We don’t believe in one-size-fits-all. Every solution we build is crafted to reflect your brand's unique goals, industry, and customer base. From visuals to backend logic, you stay in control."
                  }
                </p>
              </div>

              <img
                src="/"
                alt="logo"
                className="min-w-[120px] h-[120px] bg-gray-200 rounded-full"
              />
            </div>
          </div>
        </div>
      </Container>

      <Container className="flex flex-col justify-center items-center gap-[50px] min-h-[60vh] py-[100px]">
        <SectionHead
          sectionTitle={"Conract us"}
          sectionSubtitle={"Let's Build Something Great Together."}
          sectionDescription={
            "Reach out to us — we're excited to hear about your project"
          }
        />

        <div className="flex gap-3 w-full">
          <div className="w-full flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-6">
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

            <div className="w-full h-full max-h-[300px] rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1714.3293005551543!2d9.737789794980532!3d4.0901185886534055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2scm!4v1746725974554!5m2!1sen!2scm"
                width="600"
                height="450"
                allowFullScreen
                className="rounded-xl"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <ContactForm />
        </div>
      </Container>
    </main>
  );
}
