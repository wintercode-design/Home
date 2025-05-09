import React from "react";
import ButtonOpt from "./Button";

const BlogCard = ({ img }: { img: string }) => {
  return (
    <div className="w-full max-w-[300px] h-fit rounded-xl border-2 bg-[#1A202C] border-white/10 flex flex-col gap-6">
      <img
        src={img}
        alt="image"
        className="w-full rounded-t-lg min-h-[189px] bg-gray-200 object-cover"
      />
      <div className="w-full flex flex-col gap-3 p-3">
        <small>Jordan Junior - April 25, 2025</small>
        <div className="flex flex-col gap-2 h-full">
          <h5>Why Every African Business Needs a Website in 2025</h5>
          <p>
            Cotraf is a digital platform designed to manage and centralize the
            booking of inter-urban transport across multiple agencies in
            Cameroon.
          </p>
        </div>
        <caption>Digital Strategy, Business Growth</caption>
        <ButtonOpt title="Read more" icon={"arrow"} isNav={false} />
      </div>
    </div>
  );
};

export default BlogCard;
