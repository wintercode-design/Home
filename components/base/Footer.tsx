"use client";
import Link from "next/link";
import Badge from "../ui/Badge";
import ButtonOpt from "../ui/Button";
import { useState } from "react";
import NewsletterQuery from "@/queries/newsletter";
import { Subscriber } from "@/types/types";
import { useMutation } from "@tanstack/react-query";

const Footer = () => {
  const newsletterQuery = new NewsletterQuery();
  const [email, setEmail] = useState("");

  const newsletterMutation = useMutation({
    mutationFn: (
      data: Omit<Subscriber, "id" | "status" | "subscribedAt" | "name">
    ) =>
      newsletterQuery.create({
        ...data,
        status: "ACTIVE",
        subscribedAt: new Date().toISOString(),
        name: "Newsletter Subscriber",
      }),
    onSuccess: () => {
      alert("Successfully subscribed to newsletter!");
      setEmail("");
    },
    onError: (error) => {
      alert("Failed to subscribe. Please try again.");
      console.error("Newsletter subscription error:", error);
    },
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      newsletterMutation.mutate({ email, source: "footer" });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-6  px-6 md:px-0 py-[100px]">
      <div className="w-full flex flex-col lg:flex-row items-start gap-10">
        <div className="w-full md:w-1/3">
          <div className="flex flex-col justify-center items-start max-w-[290px] gap-3 ">
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

            <p>
              {
                "WinterCode is your trusted partner for custom web solutions, ERP systems, e-commerce, and hosting services across Africa and beyond."
              }
            </p>
          </div>
        </div>

        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-3">
          <div className="flex flex-col gap-3">
            <h5>{"Quick Links"}</h5>
            <ol className="flex flex-col gap-3">
              {[
                {
                  title: "Home",
                  link: "/",
                },
                {
                  title: "About us",
                  link: "/about",
                },
                {
                  title: "Services",
                  link: "/services",
                },
                {
                  title: "Portfolio",
                  link: "/portfolio",
                },
                {
                  title: "Pricing",
                  link: "/pricing",
                },
                {
                  title: "Blog",
                  link: "/blog",
                },
                {
                  title: "FAQs",
                  link: "/faqs",
                },
                {
                  title: "Contact",
                  link: "/contact",
                },
                {
                  title: "Start a project",
                  link: "/quote",
                },
              ].map((item, key) => {
                return (
                  <li key={key}>
                    <Link href={`${item.link}`}>{item.title}</Link>
                  </li>
                );
              })}
            </ol>
          </div>
          <div className="flex flex-col gap-3">
            <h5>{"Services"}</h5>
            <ol className="flex flex-col gap-3">
              {[
                {
                  title: "Web Development",
                  link: "/services/web-development",
                },
                {
                  title: "E-commerce",
                  link: "/services/e-commerce",
                },
                {
                  title: "ERP Systems",
                  link: "/services/erp-systems",
                },
                {
                  title: "Hosting Services",
                  link: "/services/hosting-services",
                },
              ].map((item, key) => {
                return (
                  <li key={key}>
                    <Link href={`${item.link}`}>{item.title}</Link>
                  </li>
                );
              })}
            </ol>
          </div>
          <div className="flex flex-col gap-3">
            <h5>{"Contact Information"}</h5>
            <ol className="flex flex-col gap-3">
              {[
                {
                  title: "kenfackjordanjunior@gmail.com",
                  link: "mailto:kenfackjordanjunior@gmail.com",
                  badge: "mail",
                },
                {
                  title: "237657071178",
                  link: "https://wa.me/237657071178",
                  badge: "whatsapp",
                },
                {
                  title: "Douala, Cameroon",
                  link: "https://goo.gl/maps/4v7x5Z1g2kF2",
                  badge: "location",
                },
              ].map((item, key) => {
                return (
                  <li key={key} className="flex gap-3 items-center">
                    <Badge
                      icon={
                        item.badge as
                          | "whatsapp"
                          | "mail"
                          | "phone"
                          | "location"
                          | "GPT"
                          | "docker"
                          | "github"
                          | "figma"
                          | "nextjs"
                          | "nodejs"
                          | "tailwindcss"
                          | "visualstudio"
                          | "google"
                          | "kubernetes"
                          | "edge"
                          | null
                      }
                    />
                    <Link href={`${item.link}`}>{item.title}</Link>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 justify-between md:items-end w-full">
        <div className="flex flex-col gap-3 max-w-[260px]">
          <h5>{"Stay Connected"}</h5>
          <p>
            {
              "Subscribe to our newsletter and get the latest tech tips, industry insights, and project updates straight to your inbox."
            }
          </p>
        </div>

        <form
          onSubmit={handleSubscribe}
          className="flex gap-3 justify-between bg-white rounded-full pl-1 p-1 h-fit"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-full w-full text-black px-3 text-xl"
            placeholder="robert@gmail.com"
            required
          />

          <button
            type="submit"
            disabled={newsletterMutation.isPending}
            className="px-3 py-1 rounded-full bg-white text-black outline-1 outline-white"
          >
            {newsletterMutation.isPending ? "Subscribing..." : "Register"}
          </button>
        </form>
      </div>

      <div className="flex justify-between gap-3 w-full border-t border-[#474747] mt-3 pt-6 h-fit">
        <p>developed by wintercode 2025</p>
        <div className="flex gap-3">
          <Link href={"https://wa.me/237657071178"}>
            <Badge icon="whatsapp" />
          </Link>
          <Link href={"https://web.facebook.com/profile.php?id=61573766979448"}>
            <Badge icon="facebook" />
          </Link>
          {/* <Badge icon="linkedin" /> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
