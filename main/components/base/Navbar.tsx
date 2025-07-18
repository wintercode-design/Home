"use client";
// import { useTranslations } from "@/hooks/useMessages";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ButtonOpt from "../ui/Button";
import LanguageSelector from "../ui/LanguageSelector";
import Container from "./Container";
import { AnimatePresence, motion } from "framer-motion";

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

  const menuItems = [
    { key: "home", path: "/" },
    { key: "about", path: "/about" },
    { key: "services", path: "/services" },
    { key: "portfolio", path: "/portfolio" },
    { key: "pricing", path: "/pricing" },
    { key: "blog", path: "/blog" },
    { key: "faqs", path: "/faqs" },
  ];

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

          {/* Hamburger Icon and Language Selector */}
          <div className="flex items-center gap-6">
            <LanguageSelector />
            <span
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
            </span>
          </div>

          {/* Mobile Dropdown */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.25, ease: [0.42, 0, 0.58, 1] }}
                className={
                  "absolute top-[88px] left-0 w-full shadow-md flex flex-col px-6 py-4 gap-2 lg:hidden z-50 justify-center items-center bg-[#0E1C36]/80"
                }
              >
                {menuItems.map((item, key) => {
                  const active =
                    pathname.includes(item.key) ||
                    (item.key === "home" ? pathname === "/" : false);
                  return (
                    <motion.div
                      key={item.key}
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.05 * key,
                        ease: [0.42, 0, 0.58, 1],
                      }}
                      className="w-full"
                    >
                      <Link
                        href={item.path}
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
                    </motion.div>
                  );
                })}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.05 * menuItems.length,
                    ease: [0.42, 0, 0.58, 1],
                  }}
                  className="w-full"
                >
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
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.05 * (menuItems.length + 1),
                    ease: [0.42, 0, 0.58, 1],
                  }}
                  className="w-full"
                >
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
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.05 * (menuItems.length + 2),
                    ease: [0.42, 0, 0.58, 1],
                  }}
                  className="w-full flex justify-center mt-4"
                >
                  <LanguageSelector />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </Container>
  );
};

export default Navbar;
