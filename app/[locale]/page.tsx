import Container from "@/components/base/Container";
import ContactInfo from "@/components/blocs/ContactInfo";
import Hero from "@/components/blocs/Hero";
import PartnersList from "@/components/blocs/PartnersList";
import ProjectSelection from "@/components/blocs/ProjectSelection";
import ServicesOffered from "@/components/blocs/ServicesOffered";
import ShortNewsList from "@/components/blocs/ShortNewsList";
import StartNewProject from "@/components/blocs/StartNewProject";
import TestimonyList from "@/components/blocs/TestimonyList";
import WhyChooseUs from "@/components/blocs/WhyChooseUs";
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
      <div className="bg-[linear-gradient(rgba(255,255,255,0),rgba(26,32,44,1)),url('/bg/laptop.png')] bg-cover bg-no-repeat bg-center">
        <Hero />

        <ServicesOffered />

        <PartnersList />
      </div>

      <ProjectSelection />

      <TestimonyList />

      <StartNewProject />

      <WhyChooseUs />

      <ContactInfo />

      <ShortNewsList />
    </main>
  );
}
