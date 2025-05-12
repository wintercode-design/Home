"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface PageIntroProps {
  title: string;
  img?: string;
  links: Array<{ title: string; link: string }> | null;
  className?: string;
}

const PageIntro = ({ title, img, links, className }: PageIntroProps) => {
  const pathname = usePathname();

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,0.3),rgba(26,32,44,1)),url('${img}')`,
      }}
      className={clsx(
        `h-[40vh] flex justify-center items-center bg-center bg-cover`,
        className
      )}
    >
      <div className="flex flex-col gap-4 w-fit justify-center items-center">
        <h1>{title}</h1>
        <div className="flex gap-3 text-[#79808C]">
          {links?.map((item, key) => {
            return (
              <Link
                key={key}
                href={`${item.link}`}
                className="flex gap-3 items-center"
              >
                <h5
                  className={
                    pathname
                      .split("/")
                      .pop()
                      ?.toLocaleLowerCase()
                      .includes(item.title.toLocaleLowerCase())
                      ? "text-white"
                      : ""
                  }
                >
                  {item.title}
                </h5>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PageIntro;
