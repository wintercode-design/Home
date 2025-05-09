"use client";

import Container from "@/components/base/Container";
import Badge from "@/components/ui/Badge";
import BlogCard from "@/components/ui/BlogCard";
import ButtonOpt from "@/components/ui/Button";
import SectionHead from "@/components/ui/SectionHead";
import { MagnifyingGlass } from "phosphor-react";
import React from "react";

const page = () => {
  return (
    <main>
      <Container className="flex justify-center items-start gap-[50px] py-[100px]">
        <div className="w-1/4">
          <div className="flex px-3 py-2 rounded-full w-full bg-[#373C44] gap-2">
            <MagnifyingGlass size={16} />
            <input type="text" placeholder="Search" className="w-full" />
          </div>
        </div>
        <div className="w-3/4 flex flex-col gap-10">
          <div className="w-full grid grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
              <BlogCard />
            ))}
          </div>
          <div className="flex justify-center items-center gap-3">
            <Badge icon={"prev"} />
            {[1, 2, 3, 4].map((item, index) => (
              <Badge icon={"number"} num={item} key={index} />
            ))}
            <Badge icon={"next"} />
          </div>
        </div>
      </Container>

      <Container
        stylebg="bg-[url('/bg/larg-logo.png')] bg-top-right bg-no-repeat"
        className="flex flex-col justify-center items-center gap-[50px] min-h-[60vh]"
      >
        <SectionHead
          sectionTitle={"Start now"}
          sectionSubtitle={"Let’s build your next project together."}
          sectionDescription={
            "Get in touch with us and get your own custom made website and push your company to success"
          }
        />

        <div className="flex flex-col justify-center items-center gap-3">
          <ButtonOpt title={"Start Project"} isSelected={true} />
          <caption>{"Contact us for details"}</caption>
        </div>
      </Container>
    </main>
  );
};

export default page;
