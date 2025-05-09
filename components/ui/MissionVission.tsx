import React from "react";

interface missionVissionProps {
  title: string;
  description: string;
  image: string;
}

const MissionVission = ({ title, image, description }: missionVissionProps) => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-[400px]">
      <h3>{title}</h3>
      <div className="flex flex-col gap-4">
        <img
          src={image}
          alt="Mission and Vision"
          className="w-full h-[175px] rounded-xl"
        />
        <p>{description}</p>
      </div>
    </div>
  );
};

export default MissionVission;
