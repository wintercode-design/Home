"use client";
import React, { useEffect, useState } from "react";
import ButtonOpt from "../ui/Button";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Container from "./Container";
import clsx from "clsx";

const Navbar = ({ local }: { local: string }) => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      return window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container
      stylebg={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-[#0E1C36]/50 shadow-md backdrop-blur-lg"
          : "bg-transparent"
      )}
    >
      <div className="py-4">
        {/* desktop */}
        <nav className="w-full flex justify-between items-center">
          <div className="flex gap-3">
            <img
              src="/Logo_wintercode_design.png"
              alt=""
              className=" size-11 rounded-full"
            />
            <h6>
              Wintercode <br />
              Design
            </h6>
          </div>

          <div className="flex justify-center items-center py-3 gap-3">
            {[
              "Home",
              "About",
              "Services",
              "Portfolio",
              "Pricing",
              "Blog",
              "FAQs",
            ].map((item, key) => {
              const active =
                pathname.includes(item.toLowerCase()) || item === "Home"
                  ? pathname === `/${local}`
                  : false;

              return (
                <Link
                  href={`/${key === 0 ? "/" : item.toLowerCase()}`}
                  key={key}
                >
                  <ButtonOpt
                    key={key}
                    title={item}
                    isNav={true}
                    isSelected={active}
                  />
                </Link>
              );
            })}
            <Link href={`/contact`}>
              <ButtonOpt
                title="Contact"
                fill={true}
                isNav={true}
                icon={"contact"}
              />
            </Link>
            <Link href={`/quote`}>
              <ButtonOpt
                title="Start a project"
                isNav={true}
                icon={"quote"}
                custom="outline-[1px] rounded-full"
              />
            </Link>
          </div>
        </nav>
        {/* mobile */}
      </div>
    </Container>
  );
};

export default Navbar;
