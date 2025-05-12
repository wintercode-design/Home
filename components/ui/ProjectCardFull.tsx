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

const project: ProjectProps = {
  title: "Cotraf – Intercity Transport Booking System",
  desc: "Cotraf is a digital platform designed to manage and centralize the booking of inter-urban transport across multiple agencies in Cameroon.",
  company: "Cotraf cooperative",
  cover: "/",
  images: ["/"],
  design:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quaerat sint ex iusto esse tempore molestiae necessitatibus quibusdam. Amet ullam sint similique numquam. Maiores, numquam voluptatibus? Ducimus delectus ad minima.",
  dev: "string Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla minus magnam voluptatem deleniti inventore nam, perspiciatis pariatur fuga, exercitationem rerum blanditiis praesentium nostrum ab dolorem, doloremque illo dignissimos esse eveniet.",
  deploy:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id maxime voluptatem, fugit facere illum commodi magnam rem animi, officiis accusamus sequi est provident? Quod excepturi consectetur magnam id illo eos.",
  link: "/",
};

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
