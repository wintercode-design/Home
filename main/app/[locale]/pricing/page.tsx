"use client";
import Container from "@/components/base/Container";
import BrochureDownload from "@/components/blocs/BrochureDownload";
import StartNewProject from "@/components/blocs/StartNewProject";
import ButtonOpt from "@/components/ui/Button";
import ContactForm from "@/components/ui/ContactForm";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { CheckCircle, MinusCircle } from "phosphor-react";
import { useState } from "react";

const Page = () => {
  const t = useTranslations("PricingPage");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<null | string>(null);

  const handleGetStarted = (pkg: string) => {
    setSelectedPackage(pkg);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setSelectedPackage(null);
  };
  return (
    <main className="bg-[#0E1C36]">
      <Container className="py-[50px] flex flex-col justify-center items-center">
        <motion.div
          initial="offscreen"
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
        >
          <div className="flex flex-col lg:flex-row justify-between gap-4 items-start w-full py-6 max-w-[900px]">
            <h3 className="text-gray-100">{t("introTitle")}</h3>
          </div>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
        >
          {/* Pricing Cards */}
          <div className="w-full flex flex-col lg:flex-row gap-6 justify-center items-stretch mb-10 max-w-[1100px] px-4">
            {/* Starter Card */}
            <div className="flex-1 bg-[#162447] rounded-2xl border border-[#233554] shadow-sm p-6 flex flex-col items-center min-w-[260px] text-gray-100">
              <h4 className="text-lg font-semibold mb-2">{t("starter")}</h4>
              <div className="text-3xl font-bold mb-1 text-white">
                {t("tableValues.price.0")}
              </div>
              <div className="text-gray-300 text-sm mb-4">
                {t("forSmallProjects")}
              </div>
              <ButtonOpt
                title={t("getStarted")}
                fill
                onClick={() => handleGetStarted(t("starter"))}
              />
            </div>
            {/* Professional Card (Highlighted) */}
            <div className="flex-1 bg-[#233554] border-2 border-[#1098F7] rounded-2xl shadow-lg p-6 flex flex-col items-center min-w-[260px] relative text-gray-100">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1098F7] text-white text-xs font-bold px-4 py-1 rounded-full shadow">
                {t("recommended")}
              </span>
              <h4 className="text-lg font-semibold mb-2">
                {t("professional")}
              </h4>
              <div className="text-3xl font-bold mb-1 text-white">
                {t("tableValues.price.1")}
              </div>
              <div className="text-gray-300 text-sm mb-4">
                {t("forGrowingBusinesses")}
              </div>
              <ButtonOpt
                title={t("getStarted")}
                fill
                onClick={() => handleGetStarted(t("professional"))}
              />
            </div>
            {/* Business+ Card */}
            <div className="flex-1 bg-[#162447] rounded-2xl border border-[#233554] shadow-sm p-6 flex flex-col items-center min-w-[260px] text-gray-100">
              <h4 className="text-lg font-semibold mb-2">
                {t("businessPlus")}
              </h4>
              <div className="text-3xl font-bold mb-1 text-white">
                {t("tableValues.price.2")}
              </div>
              <div className="text-gray-300 text-sm mb-4">
                {t("forEnterprises")}
              </div>
              <ButtonOpt
                title={t("getStarted")}
                fill
                onClick={() => handleGetStarted(t("businessPlus"))}
              />
            </div>
          </div>

          {/* Comparison Table */}
          <div className="flex flex-col items-center max-w-screen overflow-x-auto">
            <table className="min-w-fit max-w-full rounded-xl border border-[#233554] bg-[#162447] shadow-md">
              <thead className="bg-[#233554]">
                <tr>
                  <th className="border border-[#233554] px-2 py-2 text-left w-[220px] text-gray-100">
                    {t("table.feature")}
                  </th>
                  <th className="border border-[#233554] px-2 py-2 text-center text-gray-100">
                    {t("table.starter")}
                  </th>
                  <th className="border border-[#233554] px-2 py-2 text-center text-gray-100">
                    {t("table.professional")}
                  </th>
                  <th className="border border-[#233554] px-2 py-2 text-center text-gray-100">
                    {t("table.businessPlus")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    key: "numberOfPages",
                    start: true,
                    pro: true,
                    busi: true,
                    values: [
                      t("tableValues.pages.0"),
                      t("tableValues.pages.1"),
                      t("tableValues.pages.2"),
                    ],
                  },
                  {
                    key: "customDesign",
                    start: true,
                    pro: true,
                    busi: true,
                    values: [
                      t("tableValues.customDesign.0"),
                      t("tableValues.customDesign.1"),
                      t("tableValues.customDesign.2"),
                    ],
                  },
                  {
                    key: "responsiveDesign",
                    start: true,
                    pro: true,
                    busi: true,
                  },
                  {
                    key: "contactForm",
                    start: true,
                    pro: true,
                    busi: true,
                    values: [
                      t("tableValues.contactForm.0"),
                      t("tableValues.contactForm.1"),
                      t("tableValues.contactForm.2"),
                    ],
                  },
                  {
                    key: "seoSetup",
                    start: true,
                    pro: true,
                    busi: true,
                    values: [
                      t("tableValues.seo.0"),
                      t("tableValues.seo.1"),
                      t("tableValues.seo.2"),
                    ],
                  },
                  {
                    key: "cmsIntegration",
                    start: false,
                    pro: true,
                    busi: true,
                    values: [
                      null,
                      t("tableValues.cms.1"),
                      t("tableValues.cms.2"),
                    ],
                  },
                  { key: "blogNews", start: false, pro: true, busi: true },
                  {
                    key: "galleryPortfolio",
                    start: false,
                    pro: true,
                    busi: true,
                  },
                  {
                    key: "userAuth",
                    start: false,
                    pro: false,
                    busi: true,
                    values: [null, null, t("tableValues.userAuth.2")],
                  },
                  {
                    key: "multilingual",
                    start: false,
                    pro: true,
                    busi: true,
                    values: [null, t("tableValues.multilingual.1"), null],
                  },
                  {
                    key: "performance",
                    start: false,
                    pro: true,
                    busi: true,
                    values: [null, null, t("tableValues.performance.2")],
                  },
                  {
                    key: "analytics",
                    start: false,
                    pro: true,
                    busi: true,
                    values: [null, null, t("tableValues.analytics.2")],
                  },
                  {
                    key: "security",
                    start: true,
                    pro: true,
                    busi: true,
                    values: [
                      t("tableValues.security.0"),
                      t("tableValues.security.1"),
                      t("tableValues.security.2"),
                    ],
                  },
                  {
                    key: "revisions",
                    start: true,
                    pro: true,
                    busi: true,
                    values: [
                      t("tableValues.revisions.0"),
                      t("tableValues.revisions.1"),
                      t("tableValues.revisions.2"),
                    ],
                  },
                  {
                    key: "supportPeriod",
                    start: true,
                    pro: true,
                    busi: true,
                    values: [
                      t("tableValues.supportPeriod.0"),
                      t("tableValues.supportPeriod.1"),
                      t("tableValues.supportPeriod.2"),
                    ],
                  },
                  {
                    key: "deliveryTime",
                    start: true,
                    pro: true,
                    busi: true,
                    values: [
                      t("tableValues.deliveryTime.0"),
                      t("tableValues.deliveryTime.1"),
                      t("tableValues.deliveryTime.2"),
                    ],
                  },
                  {
                    key: "maintenance",
                    start: true,
                    pro: true,
                    busi: true,
                    values: [
                      t("tableValues.maintenance.0"),
                      t("tableValues.maintenance.1"),
                      t("tableValues.maintenance.2"),
                    ],
                  },
                  {
                    key: "price",
                    start: true,
                    pro: true,
                    busi: true,
                    values: [
                      t("tableValues.price.0"),
                      t("tableValues.price.1"),
                      t("tableValues.price.2"),
                    ],
                  },
                ].map((row, idx) => (
                  <tr key={idx} className="even:bg-[#1a2742]">
                    <td className="border border-[#233554] px-2 py-3 font-medium text-gray-100 w-[220px]">
                      {t(`table.${row.key}`)}
                    </td>
                    {/* Starter */}
                    <td className="border border-[#233554] px-2 py-3 text-center">
                      {typeof row.start === "boolean" ? (
                        row.start ? (
                          <CheckCircle
                            size={22}
                            weight="fill"
                            className="mx-auto text-green-400"
                          />
                        ) : (
                          <MinusCircle
                            size={22}
                            weight="fill"
                            className="mx-auto text-gray-500"
                          />
                        )
                      ) : (
                        <span className="text-gray-200">
                          {row.values && row.values[0]}
                        </span>
                      )}
                      {row.values &&
                        row.values[0] &&
                        typeof row.start === "boolean" && (
                          <div className="text-xs text-gray-400 mt-1">
                            {row.values[0]}
                          </div>
                        )}
                    </td>
                    {/* Professional */}
                    <td className="border border-[#233554] px-2 py-3 text-center">
                      {typeof row.pro === "boolean" ? (
                        row.pro ? (
                          <CheckCircle
                            size={22}
                            weight="fill"
                            className="mx-auto text-green-400"
                          />
                        ) : (
                          <MinusCircle
                            size={22}
                            weight="fill"
                            className="mx-auto text-gray-500"
                          />
                        )
                      ) : (
                        <span className="text-gray-200">
                          {row.values && row.values[1]}
                        </span>
                      )}
                      {row.values &&
                        row.values[1] &&
                        typeof row.pro === "boolean" && (
                          <div className="text-xs text-gray-400 mt-1">
                            {row.values[1]}
                          </div>
                        )}
                    </td>
                    {/* Business+ */}
                    <td className="border border-[#233554] px-2 py-3 text-center">
                      {typeof row.busi === "boolean" ? (
                        row.busi ? (
                          <CheckCircle
                            size={22}
                            weight="fill"
                            className="mx-auto text-green-400"
                          />
                        ) : (
                          <MinusCircle
                            size={22}
                            weight="fill"
                            className="mx-auto text-gray-500"
                          />
                        )
                      ) : (
                        <span className="text-gray-200">
                          {row.values && row.values[2]}
                        </span>
                      )}
                      {row.values &&
                        row.values[2] &&
                        typeof row.busi === "boolean" && (
                          <div className="text-xs text-gray-400 mt-1">
                            {row.values[2]}
                          </div>
                        )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
        <div className="m-4 flex flex-col py-4 px-8 gap-3 w-fit max-w-full bg-[#162447] text-gray-100 rounded-xl">
          <article>{t("introNote")}</article>
          <h6>{t("introContact")}</h6>
          <div className="flex gap-8">
            <Link href={"/contact"}>
              <ButtonOpt title={t("contact")} icon="contact" />
            </Link>
          </div>
        </div>
      </Container>
      <BrochureDownload />
      <motion.div
        initial="offscreen"
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
      >
        <StartNewProject />
      </motion.div>

      {/* Modal for Contact Form */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-[#162447] rounded-xl p-6 max-w-lg w-full relative shadow-2xl">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-300 hover:text-white text-2xl"
              aria-label="Close"
            >
              &times;
            </button>
            <ContactForm
              initialSubject={
                selectedPackage ? `${t("getStarted")} - ${selectedPackage}` : ""
              }
              initialMessage={
                selectedPackage
                  ? `Je suis intéressé par le forfait ${selectedPackage}. Merci de me contacter avec plus d'informations.`
                  : ""
              }
            />
          </div>
        </div>
      )}
    </main>
  );
};

export default Page;
