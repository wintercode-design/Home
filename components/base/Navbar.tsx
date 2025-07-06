"use client";
import { useTranslations } from "@/hooks/useMessages";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ButtonOpt from "../ui/Button";
import LanguageSelector from "../ui/LanguageSelector";
import Container from "./Container";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("Navigation");

  const [isOpen, setIsOpen] = useState(false);

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
        scrolled || isOpen
          ? "bg-[#0E1C36]/50 shadow-md backdrop-blur-lg"
          : "bg-transparent"
      )}
    >
      <div className="py-4">
        {/* desktop */}
        <nav className="w-full hidden lg:flex justify-between items-center">
          <Link href={"/"} className="flex gap-3">
            <img
              src="/Logo_wintercode_design.png"
              alt=""
              className=" size-11 rounded-full"
            />
            <h6>
              Wintercode <br />
              Design
            </h6>
          </Link>

          <div className="flex justify-center items-center py-3 gap-3">
            {[
              { key: "home", path: "/" },
              { key: "about", path: "/about" },
              { key: "services", path: "/services" },
              { key: "portfolio", path: "/portfolio" },
              { key: "pricing", path: "/pricing" },
              { key: "blog", path: "/blog" },
              { key: "faqs", path: "/faqs" },
            ].map((item, key) => {
              const active =
                pathname.includes(item.key) ||
                (item.key === "home" ? pathname === "/" : false);

              return (
                <Link href={item.path} key={key}>
                  <ButtonOpt
                    title={t(item.key)}
                    isNav={true}
                    isSelected={active}
                  />
                </Link>
              );
            })}
            <Link href={`/contact`}>
              <ButtonOpt
                title={t("contact")}
                fill={true}
                isNav={true}
                icon={"contact"}
              />
            </Link>
            <Link href={`/quote`}>
              <ButtonOpt
                title={t("quote")}
                isNav={true}
                icon={"quote"}
                custom="outline-[1px] rounded-full"
              />
            </Link>
            <LanguageSelector />
          </div>
        </nav>

        {/* mobile */}
        <nav className="w-full lg:hidden flex justify-between items-center px-4 py-3">
          {/* Logo and Brand */}
          <Link href={"/"} className="flex gap-3 items-center">
            <img
              src="/Logo_wintercode_design.png"
              alt="Wintercode Design Logo"
              className="size-11 rounded-full"
            />
            <h6 className="text-sm font-semibold leading-tight">
              Wintercode <br />
              Design
            </h6>
          </Link>

          {/* Hamburger Icon */}
          <button
            className="lg:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Mobile Dropdown */}
          {isOpen && (
            <div
              className={
                "absolute top-[88px] left-0 w-full shadow-md flex flex-col px-6 py-4 gap-2 lg:hidden z-50 duration-300 justify-center items-center bg-[#0E1C36]/80"
              }
            >
              {[
                { key: "home", path: "/" },
                { key: "about", path: "/about" },
                { key: "services", path: "/services" },
                { key: "portfolio", path: "/portfolio" },
                { key: "pricing", path: "/pricing" },
                { key: "blog", path: "/blog" },
                { key: "faqs", path: "/faqs" },
              ].map((item, key) => {
                const active =
                  pathname.includes(item.key) ||
                  (item.key === "home" ? pathname === "/" : false);

                return (
                  <Link
                    href={item.path}
                    key={key}
                    onClick={() => setIsOpen(false)}
                    className="container"
                  >
                    <ButtonOpt
                      title={t(item.key)}
                      isNav={true}
                      isSelected={active}
                      custom="w-full! py-3"
                    />
                  </Link>
                );
              })}
              <Link
                href={`/contact`}
                onClick={() => setIsOpen(false)}
                className="w-full container"
              >
                <ButtonOpt
                  title={t("contact")}
                  custom="w-full!"
                  fill={true}
                  isNav={true}
                  icon="contact"
                />
              </Link>
              <Link
                href={`/quote`}
                onClick={() => setIsOpen(false)}
                className="w-full container"
              >
                <ButtonOpt
                  title={t("quote")}
                  isNav={true}
                  icon="quote"
                  custom="w-full outline-[1px] rounded-full"
                />
              </Link>
              <div className="w-full flex justify-center mt-4">
                <LanguageSelector />
              </div>
            </div>
          )}
        </nav>
      </div>
    </Container>
  );
};

export default Navbar;
