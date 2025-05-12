import React from "react";
import ButtonOpt from "./Button";

const ContactForm = () => {
  return (
    <div className="flex flex-col gap-6 max-w-[700px] w-full p-6 bg-[#232C3D]/40 rounded-xl">
      <h2>Get in touch</h2>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="name">{"Name"}</label>
          <input
            type="text"
            id="name"
            placeholder="nom"
            className="border-b-[1px] border-[#8A8A8A]"
          />
        </div>
        <div className="flex flex-col gap-2  w-full">
          <label htmlFor="email">{"Email"}</label>
          <input
            type="text"
            id="email"
            placeholder="exmple@email.com"
            className="border-b-[1px] border-[#8A8A8A]"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2  w-full">
        <label htmlFor="subject">{"Subject"}</label>
        <input
          type="text"
          id="subject"
          placeholder="project title"
          className="border-b-[1px] border-[#8A8A8A]"
        />
      </div>

      <div className="flex flex-col gap-2  w-full">
        <label htmlFor="message">{"Message"}</label>
        <textarea
          id="message"
          placeholder="project title"
          className="border-b-[1px] border-[#8A8A8A] h-[150px]"
        />
      </div>
      <div className="flex flex-col gap-2  w-full">
        <label htmlFor="file">{"File"}</label>
        <input
          type="file"
          id="file"
          placeholder="project title"
          className="border-b-[1px] border-[#8A8A8A]"
        />
      </div>
      <div className="flex gap-4 py-4">
        <ButtonOpt
          title="send"
          fill={true}
          custom="w-full item-center justify-center"
        />
        <ButtonOpt title="Reset" custom="w-full item-center justify-center" />
      </div>
    </div>
  );
};

export default ContactForm;
