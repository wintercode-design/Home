import React from "react";
import ButtonOpt from "./Button";

interface ProjectProps {
  title: string;
  desc: string;
  company: string;
  cover: string;
  images: Array<string>;
  design: string;
  dev: string;
  deploy: string;
  link: string;
}

const ProjectCardFull = ({ title, desc, company }: ProjectProps) => {
  return (
    <div className="w-full max-w-[614px] h-fit p-3 rounded-xl border-2 bg-[#1A202C] border-white/10 flex flex-col gap-6">
      <div className="flex flex-col lg:flex-row w-full gap-6">
        <img
          src="/"
          alt="image"
          className="w-full rounded-lg min-w-[341px] min-h-[256px] bg-gray-200 object-cover"
        />
        <div className="space-y-6 w-full min-w-[225px] flex flex-col">
          <h5>{title}</h5>
          <div className="flex flex-col justify-between h-full gap-2">
            <div className="space-y-2">
              <p>{desc}</p>

              <small>{company}</small>
            </div>
            <ButtonOpt title="Read more" icon={"arrow"} isNav={false} />
          </div>
        </div>
      </div>

      <div className="flex gap-6 p-3 border-t-[1px] border-white/10">
        <img
          src={"/"}
          className="w-full h-[175px] bg-gray-200 object-cover rounded-xl"
        />
        <img
          src={"/"}
          className="w-full h-[175px] bg-gray-200 object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default ProjectCardFull;
