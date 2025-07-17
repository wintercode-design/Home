"use client";
import ContactInfo from "@/components/blocs/ContactInfo";
import Hero from "@/components/blocs/Hero";
import PartnersList from "@/components/blocs/PartnersList";
import ProjectSelection from "@/components/blocs/ProjectSelection";
import ServicesOffered from "@/components/blocs/ServicesOffered";
import ShortNewsList from "@/components/blocs/ShortNewsList";
import StartNewProject from "@/components/blocs/StartNewProject";
import TestimonyList from "@/components/blocs/TestimonyList";
import WhyChooseUs from "@/components/blocs/WhyChooseUs";
import { motion } from "framer-motion";
// import { useTranslations } from "next-intl";

export default function Home() {
  // const t = useTranslations("HomePage");
  return (
    <main className=" overflow-hidden">
      <motion.div
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
        className="bg-[linear-gradient(rgba(255,255,255,0),rgba(26,32,44,1)),url('/bg/laptop.webp')] bg-cover bg-no-repeat bg-center"
      >
        <Hero />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
        >
          <ServicesOffered />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
        >
          <PartnersList />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
      >
        <ProjectSelection />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
      >
        <TestimonyList />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
      >
        <StartNewProject />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
      >
        <WhyChooseUs />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
      >
        <ContactInfo />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
      >
        <ShortNewsList />
      </motion.div>
    </main>
  );
}
