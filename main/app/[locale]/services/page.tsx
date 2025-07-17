"use client";
import Services from "@/components/blocs/Services";
import StartNewProject from "@/components/blocs/StartNewProject";
import ToolsUsed from "@/components/blocs/ToolsUsed";
import { motion } from "framer-motion";

const page = () => {
  return (
    <main className="overflow-hidden">
      {[
        {
          title: "webDevelopment.title",
          imgurl: "/services/web.jpeg",
          text: ["webDevelopment.description1", "webDevelopment.description2"],
          subTitle: "webDevelopment.keyFeatures",
          icons: [
            {
              title: "webDevelopment.customDesign",
              link: "webDevelopment.customDesign",
              badge: "figma",
            },
            {
              title: "webDevelopment.fastLoadTimes",
              link: "webDevelopment.fastLoadTimes",
              badge: "nextjs",
            },
            {
              title: "webDevelopment.mobileResponsive",
              link: "webDevelopment.mobileResponsive",
              badge: "nextjs",
            },
            {
              title: "webDevelopment.seoBestPractices",
              link: "webDevelopment.seoBestPractices",
              badge: "edge",
            },
            {
              title: "webDevelopment.easyCMS",
              link: "webDevelopment.easyCMS",
              badge: "seo",
            },
          ],
          detail: {
            link: "",
            linkTitle: "webDevelopment.discoverPackages",
          },
        },
        {
          title: "ecommerce.title",
          imgurl: "/services/ecom.jpeg",
          text: ["ecommerce.description1", "ecommerce.description2"],
          subTitle: "webDevelopment.keyFeatures",
          icons: [
            {
              title: "webDevelopment.customDesign",
              link: "webDevelopment.customDesign",
              badge: "figma",
            },
            {
              title: "webDevelopment.fastLoadTimes",
              link: "webDevelopment.fastLoadTimes",
              badge: "nextjs",
            },
            {
              title: "webDevelopment.mobileResponsive",
              link: "webDevelopment.mobileResponsive",
              badge: "nextjs",
            },
            {
              title: "webDevelopment.seoBestPractices",
              link: "webDevelopment.seoBestPractices",
              badge: "edge",
            },
            {
              title: "webDevelopment.easyCMS",
              link: "webDevelopment.easyCMS",
              badge: "seo",
            },
          ],
          detail: {
            link: "",
            linkTitle: "ecommerce.scheduleConsultation",
          },
        },
        {
          title: "erpSystems.title",
          imgurl: "/services/erp.jpeg",
          text: ["erpSystems.description1", "erpSystems.description2"],
          subTitle: "webDevelopment.keyFeatures",
          icons: [
            {
              title: "webDevelopment.customDesign",
              link: "webDevelopment.customDesign",
              badge: "figma",
            },
            {
              title: "webDevelopment.fastLoadTimes",
              link: "webDevelopment.fastLoadTimes",
              badge: "nextjs",
            },
            {
              title: "webDevelopment.mobileResponsive",
              link: "webDevelopment.mobileResponsive",
              badge: "nextjs",
            },
            {
              title: "webDevelopment.seoBestPractices",
              link: "webDevelopment.seoBestPractices",
              badge: "edge",
            },
            {
              title: "webDevelopment.easyCMS",
              link: "webDevelopment.easyCMS",
              badge: "seo",
            },
          ],
          detail: {
            link: "",
            linkTitle: "erpSystems.scheduleConsultation",
          },
        },
      ].map((service, key) => {
        const revers = key === 1;
        return (
          <motion.div
            key={key}
            initial={{ opacity: 0, x: key % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
          >
            <Services revers={revers} service={service} />
          </motion.div>
        );
      })}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
      >
        <ToolsUsed />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
      >
        <StartNewProject />
      </motion.div>
    </main>
  );
};

export default page;
