"use client";
import { Lightning } from "phosphor-react";
import React from "react";
import ButtonOpt from "./Button";

const AboutTop = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center p-4 gap-10 h-[400px]">
      <img
        src="/about/aboutwinter.jpeg"
        alt="about wintercode"
        className="w-full h-full max-h-[400px] bg-gray-200 rounded-xl object-cover"
      />

      <div className="flex flex-col gap-4 max-w-[500px] h-full justify-between">
        <div className="w-full h-full flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <div className="flex justify-center items-center gap-4 bg-gradient-to-b from-[#444444] to-[#8A8A8A] rounded-full px-3 py-0.5 w-fit">
              <Lightning
                weight="fill"
                size={16}
                // className="bg-gradient-to-b from-[#1098F7] to-white text-transparent bg-clip-border"
                color="#1098F7"
              />
              <h6 className="text-center">{"About wintercode"}</h6>
            </div>

            <div className="flex flex-col items-start justify-center gap-2">
              <h3 className="text-center">
                {"Builders of Your Digital Future."}
              </h3>
            </div>
          </div>

          <p>
            {`
          At WinterCode, we don't just build websites and systems. We craft experiences, solve problems, and fuel growth through innovation, passion, and technology.      
          `}
          </p>
          <p>
            {`From our first line of code to our latest project launch, one thing remains constant: a deep commitment to helping businesses thrive in the digital age.`}
          </p>
          <p>
            {`Whether you're a startup, a growing SME, or an established brand, WinterCode becomes part of your journey — your challenges become our mission, your dreams, our blueprint.`}
          </p>
        </div>

        <ButtonOpt title="Contact us" fill={true} />
      </div>
    </div>
  );
};

export default AboutTop;
