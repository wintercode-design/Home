import React from "react";
import ButtonOpt from "./Button";

const ProjectCardFull = () => {
  return (
    <div className="w-full max-w-[614px] h-fit p-3 rounded-xl border-2 bg-[#1A202C] border-white/10 flex flex-col gap-6">
      <div className="flex w-full gap-6">
        <img
          src="/"
          alt="image"
          className="w-full rounded-lg min-w-[341px] min-h-[256px] bg-gray-200 object-cover"
        />
        <div className="space-y-6 w-full min-w-[225px] flex flex-col">
          <h5>Cotraf – Intercity Transport Booking System</h5>
          <div className="flex flex-col justify-between h-full">
            <div className="space-y-2">
              <p>
                Cotraf is a digital platform designed to manage and centralize
                the booking of inter-urban transport across multiple agencies in
                Cameroon.
              </p>

              <small>Cotraf cooperative</small>
            </div>
            <ButtonOpt
              title="Read more"
              hasIcon={true}
              icon={"arrow"}
              isNav={false}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-3 p-3 border-t-[1px] border-white/10">
        {[1, 2, 3, 4, 5].map((item) => (
          <img
            src="/"
            alt="image"
            className="bg-gray-200 w-[100px] h-[75px] rounded-lg"
          />
        ))}
      </div>
      <div className="flex gap-6 p-3 border-t-[1px] border-white/10">
        <div className="flex flex-col gap-4">
          <h5>Solution</h5>
          <ul className="list-disc pl-4">
            <li>
              A modern website and admin dashboard with multi-agency support.
            </li>
            <li>
              Passengers can check schedules, book tickets online, and receive
              SMS confirmations.
            </li>
            <li>
              Staff interface includes route creation, bus management, and
              ticket validation.
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h5>Features</h5>
          <ul className="list-disc pl-4">
            <li>Mobile-first design</li>
            <li>Role-based admin access</li>
            <li>Payment gateway integration (Mobile Money & Orange Money)</li>
            <li>Custom reporting tools for sales and seat occupancy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardFull;
