"use client";
import Container from "@/components/base/Container";
import StartNewProject from "@/components/blocs/StartNewProject";
import MyIcons from "@/components/ui/MyIcons";
import { motion } from "framer-motion";

const page = () => {
  return (
    <main className=" overflow-hidden">
      <Container className="py-[50px] flex flex-col justify-center items-center">
        <motion.div
          initial="offscreen"
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
        >
          <div className="flex flex-col lg:flex-row justify-between gap-4 items-start w-full py-6 max-w-[900px]">
            <p>Web Development Packages Overview</p>

            <div className="flex flex-col p-4 gap-3 w-full max-w-[472px] bg-white text-black rounded-xl">
              <article>{"Important Note"}</article>
              <h5>
                {"For any feature not mentioned here feel free to contact us"}
              </h5>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
        >
          <div className="w-full overflow-x-scroll">
            <table className="w-fit rounded-xl overflow-hidden">
              <thead>
                <tr>
                  <th className="border border-white px-2 py-1 bg-white text-black">
                    <h5>NO</h5>
                  </th>
                  <th className="border px-2 py-1 w-[475px]">
                    <h5>Feature / Package</h5>
                  </th>
                  <th className="border border-white px-2 py-1 bg-[#1098F7] text-black">
                    <h5>
                      Starter <br /> 230,000 FCFA{" "}
                    </h5>
                  </th>
                  <th className="border px-2 py-1">
                    <h5>
                      Professional <br /> 450,000 FCFA
                    </h5>
                  </th>
                  <th className="border border-white px-2 py-1 bg-[#1098F7] text-black">
                    <h5>
                      Business+ <br /> 900,000 FCFA
                    </h5>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    index: "01",
                    feature: "Number of Pages",
                    start: ["Up to 5"],
                    pro: ["Up to 10"],
                    busi: ["Unlimited"],
                  },
                  {
                    index: "02",
                    feature: "Custom Design (UI/UX)",
                    start: ["Basic Layout"],
                    pro: ["Custom Layout with UX"],
                    busi: ["Fully Custom UI + Branding"],
                  },
                  {
                    index: "03",
                    feature: "Responsive Design",
                    start: ["ok"],
                    pro: ["ok"],
                    busi: ["ok"],
                  },
                  {
                    index: "04",
                    feature: "Contact Form",
                    start: ["Simple Form"],
                    pro: ["Form with Email Routing"],
                    busi: ["Advanced Forms + Validation"],
                  },
                  {
                    index: "05",
                    feature: "SEO Setup",
                    start: ["Basic Meta Setup"],
                    pro: ["Keyword Setup + SEO Tags"],
                    busi: ["Advanced SEO Tools"],
                  },
                  {
                    index: "06",
                    feature: "CMS Integration",
                    start: ["no"],
                    pro: ["Basic Admin Panel"],
                    busi: ["Full CMS / Custom Backend"],
                  },
                  {
                    index: "07",
                    feature: "Blog / News Section",
                    start: ["no"],
                    pro: ["ok"],
                    busi: ["ok"],
                  },
                  {
                    index: "08",
                    feature: "Gallery / Portfolio",
                    start: ["no"],
                    pro: ["ok"],
                    busi: ["ok"],
                  },
                  {
                    index: "09",
                    feature: "User Authentication",
                    start: ["no"],
                    pro: ["no"],
                    busi: ["(Login / Signup / Admin)"],
                  },
                  {
                    index: "10",
                    feature: "Multilingual Support",
                    start: ["no"],
                    pro: ["ok", "Optional Add-on"],
                    busi: ["ok"],
                  },
                  {
                    index: "11",
                    feature: "Performance Optimization",
                    start: ["no"],
                    pro: ["ok"],
                    busi: ["ok", "Speed Boosts"],
                  },
                  {
                    index: "12",
                    feature: "Google Analytics Setup",
                    start: ["no"],
                    pro: ["ok"],
                    busi: ["ok", "Insights"],
                  },
                  {
                    index: "13",
                    feature: "Security Features (SSL, Protection)",
                    start: ["Basic"],
                    pro: ["Standard"],
                    busi: ["Advanced (Firewall, Login)"],
                  },
                  {
                    index: "14",
                    feature: "Revision Rounds",
                    start: ["2"],
                    pro: ["3"],
                    busi: ["Unlimited (within reason)"],
                  },
                  {
                    index: "15",
                    feature: "Support Period",
                    start: ["7 days post-launch"],
                    pro: ["60 days", "Optional Plan"],
                    busi: ["ok"],
                  },
                  {
                    index: "16",
                    feature: "Estimated Delivery Time",
                    start: ["10–14 days"],
                    pro: ["14–18 days"],
                    busi: ["3–4 weeks"],
                  },
                  {
                    index: "17",
                    feature: "Maintenance Plan (Optional)",
                    start: ["From 15,000 FCFA/mo"],
                    pro: ["From 25,000 FCFA/mo"],
                    busi: ["From 50,000 FCFA/mo"],
                  },
                  {
                    index: "18",
                    feature: "Price (Estimated)",
                    start: ["230,000 FCFA"],
                    pro: ["450,000 FCFA"],
                    busi: ["900,000 FCFA"],
                  },
                ].map((feature, index) => {
                  return (
                    <tr key={index}>
                      <td className="border border-white px-2 py-4">
                        <p>{feature.index}</p>
                      </td>
                      <td className="border px-2 py-4 w-[475px]">
                        <p>{feature.feature}</p>
                      </td>
                      <td className="border border-black px-2 py-4 bg-white text-black">
                        <span className="flex gap-2">
                          {feature.start.some((x) => x == "no") && (
                            <MyIcons value="no" />
                          )}
                          {feature.start.some((x) => x == "ok") && (
                            <MyIcons value="ok" />
                          )}
                          <p>
                            {feature.start
                              .filter((x) => x !== "no" && x !== "ok")
                              .pop()}
                          </p>
                        </span>
                      </td>
                      <td className="border px-2 py-4">
                        <span className="flex gap-2">
                          {feature.pro.some((x) => x == "no") && (
                            <MyIcons value="no" />
                          )}
                          {feature.pro.some((x) => x == "ok") && (
                            <MyIcons value="ok" />
                          )}
                          <p>
                            {feature.pro
                              .filter((x) => x !== "no" && x !== "ok")
                              .pop()}
                          </p>
                        </span>
                      </td>
                      <td className="border border-black px-2 py-4 bg-white text-black">
                        <span className="flex gap-2">
                          {feature.busi.some((x) => x == "no") && (
                            <MyIcons value="no" />
                          )}
                          {feature.busi.some((x) => x == "ok") && (
                            <MyIcons value="ok" />
                          )}
                          <p>
                            {feature.busi
                              .filter((x) => x !== "no" && x !== "ok")
                              .pop()}
                          </p>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </motion.div>
      </Container>
      <motion.div
        initial="offscreen"
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
      >
        <StartNewProject />
      </motion.div>
    </main>
  );
};

export default page;
