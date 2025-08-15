import React from "react";
import Container from "../base/Container";
import SectionHead from "../ui/SectionHead";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { FacebookLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";

const teamMembers = [
  {
    name: "Mr. Lionel",
    title: "Business Manger",
    img: "/team/placeholder-buis.jpeg",
    linkedin: "#",
    facebook: "#",
    highlight: false,
  },
  {
    name: "Mr. Chuitcheur's Emeran de S Roger",
    title: "Community & Communication Manager",
    img: "/team/member2.jpg",
    linkedin:
      "https://www.linkedin.com/in/emeran-de-s-roger-chuitcheu-chuigoue-5b3209227/",
    facebook: "https://web.facebook.com/roger.chuitcheu",
    highlight: false, // Highlighted member
  },
  {
    name: "Mr. Jordan .Jr",
    title: "Tech Lead",
    img: "",
    linkedin: "#",
    instagram: "https://www.instagram.com/kenfack.jordan.jr/",
    facebook: "#",
    highlight: false,
  },
  {
    name: "Mr. J. Hans",
    title: "Senior Dev UI/UX",
    img: "",
    linkedin: "https://www.linkedin.com/in/jason-adiogo/",
    facebook: "https://web.facebook.com/hans.adiogo",
    highlight: false,
  },
  {
    name: "Miss. Elvira Nobelle",
    title: "Web Master",
    img: "/team/ElviraNobel.jpg",
    linkedin: "#",
    facebook: "https://web.facebook.com/elvira.nimpa.9",
    highlight: false,
  },
  {
    name: "Mr. Paul Valery",
    title: "Developer",
    img: "",
    linkedin: "https://www.linkedin.com/in/nguezet-paul-valery-a384542b7/",
    facebook: "https://web.facebook.com/nguezet.paolovalery",
    highlight: false,
  },
];

const TeamMembers = () => {
  const t = useTranslations("AboutPage.team");

  return (
    <div>
      <Container
        stylebg="bg-[linear-gradient(#081120,#081120,#49494900)]"
        className="flex flex-col justify-center items-center gap-[50px] py-[100px]"
      >
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
        >
          <SectionHead
            sectionTitle={t("title")}
            sectionSubtitle={t("subtitle")}
            sectionDescription={t("description")}
          />
        </motion.div>
      </Container>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
        className="flex flex-col relative justify-center items-center w-full py-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl w-full px-4 ">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className={`bg-[#181818] rounded-3xl overflow-hidden flex flex-col items-center shadow-lg border transition-all duration-300 ${
                member.highlight
                  ? "border-[#38383800] shadow-[0_0_0_3px_rgba(231,76,60,0.2)]"
                  : "border-transparent"
              }`}
            >
              <div className="relative w-full aspect-[4/5] flex items-end">
                <img
                  src={member.img || "/team/placeholder-dev.jpeg"}
                  alt={member.name}
                  className={`w-full h-full sm:max-h-[350px] grayscale-100 hover:grayscale-0 object-cover transition-all duration-300 ${
                    member.highlight ? "" : "grayscale brightness-75"
                  }`}
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-[#222] p-2 rounded-full text-white flex items-center justify-center hover:bg-[#0077b5] transition-colors border border-[#333]`}
                  >
                    <LinkedinLogo size={18} weight="fill" />
                  </a>
                  {member.instagram ? (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`bg-[#222] p-2 rounded-full text-white flex items-center justify-center hover:bg-[#4267B2] transition-colors border border-[#333]`}
                    >
                      <InstagramLogo size={18} weight="fill" />
                    </a>
                  ) : (
                    <button
                      className="bg-[#222] p-2 rounded-full text-white flex items-center justify-center border border-[#333] cursor-default"
                      aria-label="Not available"
                      tabIndex={-1}
                    >
                      <InstagramLogo size={18} weight="bold" />
                    </button>
                  )}
                  <a
                    href={member.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-[#222] p-2 rounded-full text-white flex items-center justify-center hover:bg-[#4267B2] transition-colors border border-[#333]`}
                  >
                    <FacebookLogo size={18} weight="fill" />
                  </a>
                </div>
              </div>
              <div className="w-full px-4 py-5 text-center bg-transparent">
                <div
                  className={`font-semibold text-lg tracking-wide ${
                    member.highlight ? "text-white" : "text-[#bdbdbd]"
                  }`}
                >
                  {member.name}
                </div>
                <div
                  className={`text-sm mt-1 ${
                    member.highlight ? "text-[#e74c3c]" : "text-[#bdbdbd]"
                  }`}
                >
                  {member.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TeamMembers;
