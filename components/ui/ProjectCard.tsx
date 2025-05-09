import React from "react";
import ButtonOpt from "./Button";

interface projectCardProps {
  title: string;
  description: string;
  subtitle?: string;
  imageUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  imageUrl,
  subtitle,
}: projectCardProps) => {
  return (
    <div className="w-full max-w-[614px] h-fit p-3 rounded-xl border-2 bg-[#1A202C] border-white/10 flex gap-6">
      <img
        src="/"
        alt={imageUrl}
        className="w-full rounded-lg min-w-[341px] min-h-[256px] bg-gray-200 object-cover"
      />
      <div className="space-y-6 w-full min-w-[225px] flex flex-col">
        <h5>{title}</h5>
        <div className="flex flex-col justify-between h-full">
          <div className="space-y-2">
            <p>{description}</p>

            <small>{subtitle}</small>
          </div>
          <ButtonOpt title="Read more" icon={"arrow"} isNav={false} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
