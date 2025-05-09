import React from "react";

interface testimonyBadgeProps {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
}

const TestimonyBadge = ({ title, subtitle, imageUrl }: testimonyBadgeProps) => {
  return (
    <div className="flex gap-3 p-3 rounded-xl w-fit border-[1px] border-white/20">
      <img
        src="/"
        alt={imageUrl}
        className="rounded-full size-[30px] bg-gray-200"
      />
      <div className="flex flex-col">
        <strong>{title}</strong>
        <caption className="text-[#79808C]">{subtitle}</caption>
      </div>
    </div>
  );
};

export default TestimonyBadge;
