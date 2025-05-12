import React from "react";
import ButtonOpt from "./Button";

interface serviceCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
}

const ServiceCard = ({ title, description, imageUrl }: serviceCardProps) => {
  return (
    <div className="w-full md:max-w-[400px] h-fit p-3 rounded-xl flex flex-col gap-4 border-2 border-white/10">
      <img
        src={imageUrl}
        alt="image"
        className="w-full rounded-lg h-full min-h-[200px] bg-gray-200 object-cover"
      />
      <div className="space-y-2">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
      <ButtonOpt title="Read more" icon={"arrow"} isNav={false} />
    </div>
  );
};

export default ServiceCard;
