import Container from "@/components/base/Container";
import Badge from "@/components/ui/Badge";
import ContactForm from "@/components/ui/ContactForm";
import QuoteForm from "@/components/ui/QuoteForm";
import SectionHead from "@/components/ui/SectionHead";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main>
      <Container className="flex flex-col justify-center items-center gap-[50px] min-h-[60vh] py-[100px]">
        <SectionHead
          sectionTitle={"Conract us"}
          sectionSubtitle={"Let's Build Something Great Together."}
          sectionDescription={
            "Reach out to us — we're excited to hear about your project"
          }
        />

        <p className="justify-center text-center">
          {`Thank you for choosing WinterCode Design. This brief helps us understand your vision so we can deliver a powerful, tailored website that fits your goals.`}
          <br />
          {`Please fill out the form below to the best of your ability. If you're unsure about anything, feel free to leave it blank—we’ll discuss it together!`}
        </p>

        <div className="flex justify-center items-center gap-3 w-full">
          <QuoteForm />
        </div>
      </Container>
    </main>
  );
};

export default page;
