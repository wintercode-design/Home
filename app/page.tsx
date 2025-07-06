import ContactInfo from "@/components/blocs/ContactInfo";
import Hero from "@/components/blocs/Hero";
import PartnersList from "@/components/blocs/PartnersList";
import ProjectSelection from "@/components/blocs/ProjectSelection";
import ServicesOffered from "@/components/blocs/ServicesOffered";
import ShortNewsList from "@/components/blocs/ShortNewsList";
import StartNewProject from "@/components/blocs/StartNewProject";
import TestimonyList from "@/components/blocs/TestimonyList";
import WhyChooseUs from "@/components/blocs/WhyChooseUs";
import { useTranslations } from "next-intl";
// import { useTranslations } from "next-intl";

export default function Home() {
  // const t = useTranslations("HomePage");
  const t = useTranslations("HomePage");
  return (
    <main>
      <div className="bg-[linear-gradient(rgba(255,255,255,0),rgba(26,32,44,1)),url('/bg/laptop.webp')] bg-cover bg-no-repeat bg-center">
        <Hero />
        {t("title")}

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
