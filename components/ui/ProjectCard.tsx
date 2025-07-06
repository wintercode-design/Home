import React from "react";
import ButtonOpt from "./Button";
import { Project } from "@/types/types";
import Link from "next/link";

const ProjectCard = (data: Project) => {
  const { title, description, imageUrl, category } = data;
  return (
    <div className="w-full max-w-[614px] h-fit p-3 rounded-xl border-2 bg-[#1A202C] border-white/10 flex flex-col lg:flex-row gap-6">
      <img
        src={imageUrl || "/projects/project1.png"}
        alt={title}
        className="w-full rounded-lg md:max-w-[341px] min-h-[256px] bg-gray-200 object-cover"
      />
      <div className="space-y-6 w-full min-w-[225px] flex flex-col">
        <h5>{title}</h5>
        <div className="flex flex-col justify-between h-full gap-3">
          <div className="space-y-2">
            <p>{description}</p>
            <small>{category}</small>
          </div>
          <Link href={`/portfolio/${data.slug}`}>
            <ButtonOpt title="Read more" icon={"arrow"} isNav={false} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
