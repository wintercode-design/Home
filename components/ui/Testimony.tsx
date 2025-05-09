import React from "react";

interface testimonyProps {
  title?: string;
  name?: string;
  role?: string;
  imageUrl?: string;
}

const Testimony = ({ title, name, role, imageUrl }: testimonyProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 max-w-[650px]">
      <div className="p-3 flex justify-center items-center">
        <h5 className=" text-center">{title}</h5>
      </div>
      <div className="flex flex-col justify-center items-center gap-3 p-3 w-fit">
        <img
          src="/"
          alt={imageUrl}
          className="rounded-full size-[30px] bg-gray-200"
        />
        <div className="flex flex-col justify-center items-center">
          <strong>{name}</strong>
          <caption className="text-[#79808C]">{role}</caption>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
