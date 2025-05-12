import React from "react";
import ContactForm from "../ui/ContactForm";
import SectionHead from "../ui/SectionHead";
import Container from "../base/Container";
import Badge from "../ui/Badge";
import Link from "next/link";

const ContactInfo = () => {
  return (
    <Container className="flex flex-col justify-center items-center gap-[50px] min-h-[60vh] py-[100px]">
      <SectionHead
        sectionTitle={"Conract us"}
        sectionSubtitle={"Let's Build Something Great Together."}
        sectionDescription={
          "Reach out to us — we're excited to hear about your project"
        }
      />

      <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-3 w-full">
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
  );
};

export default ContactInfo;
