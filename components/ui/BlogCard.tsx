"use client";

import React from "react";
import ButtonOpt from "./Button";
import { ChatCircleDots, Circle, Star, ThumbsUp } from "phosphor-react";
import Link from "next/link";
import { Blog } from "@/types/dataTypes";

const BlogCard = (data: Blog) => {
  const {
    imageurl,
    slug,
    // author,
    // date,
    title,
    summary,
    description,
    tags,
    // rating,
  } = data;
  return (
    <div className="w-full max-w-[300px] h-fit rounded-xl border-2 bg-[#1A202C] border-white/10 flex flex-col gap-6">
      <img
        src={`${process.env.NEXT_PUBLIC_API_IMG}${imageurl}`}
        alt="image"
        className="w-full rounded-t-lg h-[220px] bg-gray-200 object-cover"
      />
      <div className="w-full flex flex-col gap-3 p-3">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-2">
            <img
              src="/Logo_wintercode_design.png"
              alt="wintercode"
              className="w-6 h-6 rounded-full object-cover"
            />
            <small>
              {"Jordan Junior"} - <br />{" "}
              <span className="">{"April 25, 2025"}</span>
            </small>
          </div>
          <div className="flex items-center gap-2 outline-1 px-1.5 py-0.5 rounded-full outline-green-400">
            <Circle weight="fill" size={16} color="#23e03c" />
            <span>
              <p>new</p>
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2 h-full">
          <h5>
            {title ?? "Why Every African Business Needs a Website in 2025"}
          </h5>
          <p>
            {summary ??
              `Cotraf is a digital platform designed to manage and centralize the
            booking of inter-urban transport across multiple agencies in
            Cameroon.`}
          </p>
        </div>
        <article>Digital Strategy, Business Growth</article>
        <div className="flex flex-wrap gap-2">
          {tags
            ? tags.split(";").map((tag, index) => (
                <span
                  key={index}
                  className="hover:outline-1 hover:outline-[#6d6d6d] text-[#6d6d6d] p-1 flex justify-center items-center rounded-full w-fit cursor-pointer"
                >
                  <article>#{tag}</article>
                </span>
              ))
            : ["Development", "Hosting", "design"].map((tag, index) => (
                <span
                  key={index}
                  className="hover:outline-1 hover:outline-[#6d6d6d] text-[#6d6d6d] p-1 flex justify-center items-center rounded-full w-fit cursor-pointer"
                >
                  <article>#{tag}</article>
                </span>
              ))}
        </div>
        <div className="flex flex-wrap gap-4 justify-between items-center">
          <div className="flex gap-3">
            <div className="flex justify-center items-center gap-1">
              <Star weight="fill" color="#ecdf1d" size={16} />
              <h6>4.5</h6>
            </div>
            <div className="flex justify-center items-center gap-1">
              <ChatCircleDots weight="fill" size={16} />
              <h6>4</h6>
            </div>
            <div className="flex justify-center items-center gap-1">
              <ThumbsUp weight="fill" size={16} />
              <h6>1k</h6>
            </div>
          </div>
          <Link href={`blog/${slug}`}>
            <ButtonOpt title="Read more" icon={"arrow"} isNav={false} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
