import Container from "@/components/base/Container";
import StartNewProject from "@/components/blocs/StartNewProject";
import Accordion from "@/components/ui/Accordion";
import SectionHead from "@/components/ui/SectionHead";

const page = () => {
  return (
    <main>
      <Container
        stylebg="bg-[#1A202C]/50"
        className="flex flex-col justify-center items-center gap-[50px] min-h-[60vh] py-[100px]"
      >
        <SectionHead
          sectionTitle={"Services"}
          sectionSubtitle={"Got any question? we got you covered"}
          sectionDescription={
            "Get assistance to all your questions, we hope this is helpfull to you"
          }
        />

        <div className="flex flex-col lg:flex-row gap-14">
          <div className="flex flex-col gap-4 w-full lg:w-1/2">
            {[
              {
                title: "General & Services",
                description: "Questions on our general services",
                icon: "service",
              },
              {
                title: "Pricing & Payment",
                description: "Our pricing and payments",
                icon: "pricing",
              },
              {
                title: "Technical",
                description: "Quick iterations and fast delivery",
                icon: "tech",
              },
              {
                title: "Security & Ownership",
                description: "We speak both tech and business",
                icon: "lock",
              },
              {
                title: "Working With WinterCode",
                description: "High-quality service within budget",
                icon: "business",
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
          <div className="flex flex-col gap-11 p-3 w-full lg:w-1/2">
            <img
              src={"/fqa/fqa.jpeg"}
              alt="acordeon-bg"
              className=" bg-gray-200 max-h-[200px] h-full w-full rounded-xl object-cover"
            />

            {[
              {
                title: "What services do you offer at WinterCode?",
                answer:
                  "We offer custom web development, ERP system design, e-commerce platforms, web hosting, domain registration, and ongoing support packages.",
              },
              {
                title: "Do you only work with businesses in Cameroon?",
                answer:
                  "No, we work with businesses across Africa and beyond. Our services are fully remote-ready, and we adapt to each client's needs regardless of location.",
              },
              {
                title: "How long does it take to complete a website?",
                answer:
                  "Depending on complexity, most websites take between 2 to 4 weeks. More advanced platforms like ERPs or large e-commerce solutions may take longer.",
              },
            ].map((question, key) => {
              return (
                <div key={key} className="flex flex-col gap-2 flex-1">
                  <h6>{question.title}</h6>
                  {/* <article>
                  {"Solutions built specifically for your needs"}
                </article> */}
                  <p>{question.answer}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
      <StartNewProject />
    </main>
  );
};

export default page;
