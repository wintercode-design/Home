import Container from "@/components/base/Container";
import ContactInfo from "@/components/blocs/ContactInfo";
import Badge from "@/components/ui/Badge";
import ContactForm from "@/components/ui/ContactForm";
import SectionHead from "@/components/ui/SectionHead";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main>
      <ContactInfo />
    </main>
  );
};

export default page;
