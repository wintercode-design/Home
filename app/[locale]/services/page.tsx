import Services from "@/components/blocs/Services";
import StartNewProject from "@/components/blocs/StartNewProject";
import ToolsUsed from "@/components/blocs/ToolsUsed";

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
        return <Services revers={revers} service={service} key={key} />;
      })}

      <ToolsUsed />

      <StartNewProject />
    </main>
  );
};

export default page;
