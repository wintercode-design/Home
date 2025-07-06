import React from "react";
import Container from "../base/Container";
import ButtonOpt from "../ui/Button";
import Link from "next/link";

const Hero = () => {
  return (
    <Container className="flex flex-col justify-center items-start gap-14 min-h-[80vh] py-[100px]">
      <div>
        <h1 className="hidden lg:block max-w-[581px]">
          Web Solutions That Empower Your Business.
        </h1>
        <h2 className="block lg:hidden max-w-[581px]">
          Web Solutions That Empower Your Business.
        </h2>
        <h5 className="max-w-[424px]">
          Custom websites, ERP systems, and digital tools that elevate your
          brand.
        </h5>
      </div>

      <div className="flex gap-6">
        <Link href={"/contact"}>
          <ButtonOpt title={"Contact us"} fill={true} icon={"arrow"} />
        </Link>
        <Link href={"/quote"}>
          <ButtonOpt title={"Start your Project"} icon={"contact"} />
        </Link>
      </div>
    </Container>
  );
};

export default Hero;
