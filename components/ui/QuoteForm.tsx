import React from "react";
import ButtonOpt from "./Button";

const QuoteForm = () => {
  return (
    <div className="flex flex-col gap-[150px] max-w-[700px] w-full p-6 bg-[#232C3D]/40 rounded-xl">
      <div className="flex flex-col gap-6">
        <h2>{"Basic Information"}</h2>
        <div className="flex flex-col gap-2  w-full">
          <label htmlFor="company Name">{"Company Name"}</label>
          <input
            type="text"
            id="company Name"
            placeholder="project title"
            className="border-b-[1px] border-[#8A8A8A]"
          />
        </div>
        <div className="flex flex-col gap-2  w-full">
          <label htmlFor="contact Person (Full Name)">
            {"Contact Person (Full Name)"}
          </label>
          <input
            type="text"
            id="contact Person (Full Name)"
            placeholder="project title"
            className="border-b-[1px] border-[#8A8A8A]"
          />
        </div>
        <div className="flex flex-col gap-2  w-full">
          <label htmlFor="phone Number">{"Phone Number"}</label>
          <input
            type="text"
            id="phone Number"
            placeholder="project title"
            className="border-b-[1px] border-[#8A8A8A]"
          />
        </div>
        <div className="flex flex-col gap-2  w-full">
          <label htmlFor="email Address">{"Email Address"}</label>
          <input
            type="text"
            id="email Address"
            placeholder="project title"
            className="border-b-[1px] border-[#8A8A8A]"
          />
        </div>
        <div className="flex flex-col gap-2  w-full">
          <label htmlFor="location (City & Country)">
            {"Location (City & Country)"}
          </label>
          <input
            type="text"
            id="location (City & Country)"
            placeholder="project title"
            className="border-b-[1px] border-[#8A8A8A]"
          />
        </div>

        <h6>{" Do you already have a website?"}</h6>
        <div className="flex gap-2 w-full">
          <input
            type="checkbox"
            id="yes → [Enter your current website link]"
            placeholder="project title"
            className="border-b-[1px] border-[#8A8A8A]"
          />
          <label
            htmlFor="yes → [Enter your current website link]"
            className="w-full"
          >
            {"Yes → [Enter your current website link]"}
          </label>
          <input
            type="text"
            id="website"
            placeholder="project title"
            className="border-b-[1px] w-full border-[#8A8A8A]"
          />
        </div>
        <div className="flex gap-2  w-full">
          <input
            type="checkbox"
            id="yes → [Enter your current website link]"
            placeholder="project title"
            className="border-b-[1px] border-[#8A8A8A]"
          />
          <label htmlFor="no">{"No"}</label>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h2>{" Business Overview"}</h2>
        <div className="flex flex-col gap-2  w-full">
          <label htmlFor="description">
            {
              "Briefly describe your business: What do you do? What makes you unique?"
            }
          </label>
          <textarea
            id="description"
            placeholder="project title"
            className="border-b-[1px] border-[#8A8A8A] h-[150px]"
          />
        </div>
        <div className="flex flex-col gap-2  w-full">
          <label htmlFor="description">
            {
              "Who is your target audience or ideal client? (e.g., young professionals, students, corporate clients, etc.)"
            }
          </label>
          <textarea
            id="description"
            placeholder="project title"
            className="border-b-[1px] border-[#8A8A8A] h-[150px]"
          />
        </div>
        <div className="flex flex-col gap-2  w-full">
          <label htmlFor="description">
            {"What products/services do you offer?"}
          </label>
          <textarea
            id="description"
            placeholder="project title"
            className="border-b-[1px] border-[#8A8A8A] h-[150px]"
          />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h2>{"Project Goals & Purpose"}</h2>
        <p>{`What is the main purpose of this website?`}</p>
        <div className="flex gap-2  w-full">
          <input
            type="checkbox"
            id="Build online presence / Company showcase"
            className="border-b-[1px] border-[#8A8A8A]"
          />
          <label htmlFor="no">
            {"Build online presence / Company showcase"}
          </label>
        </div>
        <div className="flex gap-2  w-full">
          <input
            type="checkbox"
            id="Generate leads or inquiries"
            className="border-b-[1px] border-[#8A8A8A]"
          />
          <label htmlFor="no">{"Generate leads or inquiries"}</label>
        </div>
        <div className="flex gap-2  w-full">
          <input
            type="checkbox"
            id="Sell products online (eCommerce)"
            className="border-b-[1px] border-[#8A8A8A]"
          />
          <label htmlFor="no">{"Sell products online (eCommerce)"}</label>
        </div>
        <div className="flex gap-2  w-full">
          <input
            type="checkbox"
            id="Bookings or reservations"
            className="border-b-[1px] border-[#8A8A8A]"
          />
          <label htmlFor="no">{"Bookings or reservations"}</label>
        </div>
        <div className="flex gap-2  w-full">
          <input
            type="checkbox"
            id="Educational platform or blog"
            className="border-b-[1px] border-[#8A8A8A]"
          />
          <label htmlFor="no">{"Educational platform or blog"}</label>
        </div>
        <div className="flex gap-2 w-full">
          <input
            type="checkbox"
            id="other"
            placeholder="project title"
            className="border-b-[1px] border-[#8A8A8A]"
          />
          <label htmlFor="other" className="w-full">
            {"Other"}
          </label>
          <input
            type="text"
            id="website"
            placeholder="project title"
            className="border-b-[1px] w-full border-[#8A8A8A]"
          />
        </div>

        <div className="flex flex-col gap-2  w-full">
          <label htmlFor="What are your top 3 priorities for this project?">
            {"What are your top 3 priorities for this project?"}
          </label>
          <textarea
            id="What are your top 3 priorities for this project?"
            placeholder="project title"
            className="border-b-[1px] border-[#8A8A8A] h-[150px]"
          />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h2>{"Project Goals & Purpose"}</h2>
        <div className="flex items-center justify-between w-full">
          <p>{"Do you already have the following?"}</p>

          <div className="flex gap-2">
            <p>yes</p>
            <p>No</p>
          </div>
        </div>
        <div className="flex gap-3 w-full">
          <label htmlFor="Logo" className="w-full">
            {"Logo"}
          </label>
          <input
            type="radio"
            id="Logo"
            placeholder="Logo"
            className="border-b-[1px] border-[#8A8A8A]"
          />
          <input
            type="radio"
            id="Logo"
            placeholder="Logo"
            className="border-b-[1px] border-[#8A8A8A]"
          />
        </div>

        <div className="flex gap-3 w-full">
          <label htmlFor="Company Profile/Overview" className="w-full">
            {"Company Profile/Overview"}
          </label>
          <input
            type="radio"
            id="Company Profile/Overview"
            placeholder="Company Profile/Overview"
            className="border-b-[1px] border-[#8A8A8A]"
          />
          <input
            type="radio"
            id="Company Profile/Overview"
            placeholder="Company Profile/Overview"
            className="border-b-[1px] border-[#8A8A8A]"
          />
        </div>

        <div className="flex gap-3 w-full">
          <label htmlFor="Text Content" className="w-full">
            {"Text Content"}
          </label>
          <input
            type="radio"
            id="Text Content"
            placeholder="Text Content"
            className="border-b-[1px] border-[#8A8A8A]"
          />
          <input
            type="radio"
            id="Text Content"
            placeholder="Text Content"
            className="border-b-[1px] border-[#8A8A8A]"
          />
        </div>

        <div className="flex gap-3 w-full">
          <label htmlFor="Photos & Images" className="w-full">
            {"Photos & Images"}
          </label>
          <input
            type="radio"
            id="Photos & Images"
            placeholder="Photos & Images"
            className="border-b-[1px] border-[#8A8A8A]"
          />
          <input
            type="radio"
            id="Photos & Images"
            placeholder="Photos & Images"
            className="border-b-[1px] border-[#8A8A8A]"
          />
        </div>

        <div className="flex gap-3 w-full">
          <label htmlFor="Videos" className="w-full">
            {"Videos"}
          </label>
          <input
            type="radio"
            id="Videos"
            placeholder="Videos"
            className="border-b-[1px] border-[#8A8A8A]"
          />
          <input
            type="radio"
            id="Videos"
            placeholder="Videos"
            className="border-b-[1px] border-[#8A8A8A]"
          />
        </div>

        <p>{`Will you provide the content, or should we help with copywriting?`}</p>
        <div className="flex gap-2  w-full">
          <input
            type="checkbox"
            id="I will provide the content"
            className="border-b-[1px] border-[#8A8A8A]"
          />
          <label htmlFor="no">{"I will provide the content"}</label>
        </div>
        <div className="flex gap-2  w-full">
          <input
            type="checkbox"
            id="I need help with content creation"
            className="border-b-[1px] border-[#8A8A8A]"
          />
          <label htmlFor="no">{"I need help with content creation"}</label>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h2>{" Design Style"}</h2>
        <div className="flex items-center justify-between w-full">
          <p>{"Do you have brand colors or style guidelines?"}</p>

          <div className="flex gap-2">
            <p>yes</p>
            <p>No</p>
          </div>
        </div>
        <div className="flex gap-3 w-full">
          <label htmlFor="Logo" className="w-full">
            {"Logo"}
          </label>
          <input
            type="radio"
            id="Logo"
            placeholder="Logo"
            className="border-b-[1px] border-[#8A8A8A]"
          />
          <input
            type="radio"
            id="Logo"
            placeholder="Logo"
            className="border-b-[1px] border-[#8A8A8A]"
          />
        </div>

        <div className="flex flex-col gap-2  w-full">
          <label htmlFor="description">
            {`Are there any websites you admire (in design or functionality)? Please share links and what you like about them:`}
          </label>
          <textarea
            id="description"
            placeholder="project title"
            className="border-b-[1px] border-[#8A8A8A] h-[150px]"
          />
        </div>

        <p>{"What is the main purpose of this website?"}</p>
        <div className="flex gap-2  w-full">
          <input
            type="checkbox"
            id="Clean and minimal"
            className="border-b-[1px] border-[#8A8A8A]"
          />
          <label htmlFor="no">{"Clean and minimal"}</label>
        </div>

        <div className="flex gap-2  w-full">
          <input
            type="checkbox"
            id="Bold and creative"
            className="border-b-[1px] border-[#8A8A8A]"
          />
          <label htmlFor="no">{"Bold and creative"}</label>
        </div>

        <div className="flex gap-2  w-full">
          <input
            type="checkbox"
            id="Elegant and classic"
            className="border-b-[1px] border-[#8A8A8A]"
          />
          <label htmlFor="no">{"Elegant and classic"}</label>
        </div>

        <div className="flex gap-2  w-full">
          <input
            type="checkbox"
            id="Playful and fun"
            className="border-b-[1px] border-[#8A8A8A]"
          />
          <label htmlFor="no">{"Playful and fun"}</label>
        </div>

        <div className="flex gap-2  w-full">
          <input
            type="checkbox"
            id="I’m not sure"
            className="border-b-[1px] border-[#8A8A8A]"
          />
          <label htmlFor="no">{"I’m not sure"}</label>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h2>{"Features & Functionalities"}</h2>
        <p>{"What features should the website include?"}</p>
        <div className="flex gap-2  w-full">
          <input
            type="checkbox"
            id="Contact Form"
            className="border-b-[1px] border-[#8A8A8A]"
          />
          <label htmlFor="Contact Form">{"Contact Form"}</label>
        </div>
        <div className="flex gap-2  w-full">
          <input
            type="checkbox"
            id="Google Map"
            className="border-b-[1px] border-[#8A8A8A]"
          />
          <label htmlFor="Google Map">{"Google Map"}</label>
        </div>
        <div className="flex gap-2  w-full">
          <input
            type="checkbox"
            id="Blog or News Section"
            className="border-b-[1px] border-[#8A8A8A]"
          />
          <label htmlFor="Blog or News Section">{"Blog or News Section"}</label>
        </div>
        <div className="flex gap-2  w-full">
          <input
            type="checkbox"
            id="Product Gallery"
            className="border-b-[1px] border-[#8A8A8A]"
          />
          <label htmlFor="Product Gallery">{"Product Gallery"}</label>
        </div>
        <div className="flex gap-2  w-full">
          <input
            type="checkbox"
            id="Online Store"
            className="border-b-[1px] border-[#8A8A8A]"
          />
          <label htmlFor="Online Store">{"Online Store"}</label>
        </div>
        <div className="flex gap-2  w-full">
          <input
            type="checkbox"
            id="Reservation or Booking System"
            className="border-b-[1px] border-[#8A8A8A]"
          />
          <label htmlFor="Reservation or Booking System">
            {"Reservation or Booking System"}
          </label>
        </div>
        <div className="flex gap-2  w-full">
          <input
            type="checkbox"
            id="Live Chat"
            className="border-b-[1px] border-[#8A8A8A]"
          />
          <label htmlFor="Live Chat">{"Live Chat"}</label>
        </div>
        <div className="flex gap-2  w-full">
          <input
            type="checkbox"
            id="Social Media Integration"
            className="border-b-[1px] border-[#8A8A8A]"
          />
          <label htmlFor="Social Media Integration">
            {"Social Media Integration"}
          </label>
        </div>
        <div className="flex gap-2  w-full">
          <input
            type="checkbox"
            id="Newsletter Signup"
            className="border-b-[1px] border-[#8A8A8A]"
          />
          <label htmlFor="Newsletter Signup">{"Newsletter Signup"}</label>
        </div>
        <div className="flex gap-2  w-full">
          <input
            type="checkbox"
            id="User Login Area"
            className="border-b-[1px] border-[#8A8A8A]"
          />
          <label htmlFor="User Login Area">{"User Login Area"}</label>
        </div>
        <div className="flex gap-2  w-full">
          <input
            type="checkbox"
            id="Multi-language Support"
            className="border-b-[1px] border-[#8A8A8A]"
          />
          <label htmlFor="Multi-language Support">
            {"Multi-language Support"}
          </label>
        </div>
        <div className="flex gap-2 w-full">
          <input
            type="checkbox"
            id="other"
            className="border-b-[1px] border-[#8A8A8A]"
          />
          <label htmlFor="other" className="w-full">
            {"Other"}
          </label>
          <input
            type="text"
            id="Other"
            className="border-b-[1px] w-full border-[#8A8A8A]"
          />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h2>{"Technical Requirements"}</h2>
        <div className="flex gap-3 w-full">
          <label
            htmlFor="Do you already have a domain name?"
            className="w-full"
          >
            {"Do you already have a domain name?"}
          </label>
          <input
            type="radio"
            id="Logo"
            placeholder="Logo"
            className="border-b-[1px] border-[#8A8A8A]"
          />
          <input
            type="radio"
            id="Logo"
            placeholder="Logo"
            className="border-b-[1px] border-[#8A8A8A]"
          />
        </div>
        <div className="flex gap-3 w-full">
          <label htmlFor="Do you have hosting already?" className="w-full">
            {"Do you have hosting already?"}
          </label>
          <input
            type="radio"
            id="Logo"
            placeholder="Logo"
            className="border-b-[1px] border-[#8A8A8A]"
          />
          <input
            type="radio"
            id="Logo"
            placeholder="Logo"
            className="border-b-[1px] border-[#8A8A8A]"
          />
        </div>
        <div className="flex gap-3 w-full">
          <label
            htmlFor="Do you want ongoing maintenance/support after launch?"
            className="w-full"
          >
            {"Do you want ongoing maintenance/support after launch?"}
          </label>
          <input
            type="radio"
            id="Logo"
            placeholder="Logo"
            className="border-b-[1px] border-[#8A8A8A]"
          />
          <input
            type="radio"
            id="Logo"
            placeholder="Logo"
            className="border-b-[1px] border-[#8A8A8A]"
          />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h2>{"Timeline & Budget"}</h2>
        <div className="flex gap-3 w-full">
          <label
            htmlFor="Do you have a specific deadline or launch date in mind?"
            className="w-full"
          >
            {"Do you have a specific deadline or launch date in mind?"}
          </label>
          <input
            type="radio"
            id="Logo"
            placeholder="Logo"
            className="border-b-[1px] border-[#8A8A8A]"
          />
          <input
            type="radio"
            id="Logo"
            placeholder="Logo"
            className="border-b-[1px] border-[#8A8A8A]"
          />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h2>{"Additional Information"}</h2>
        <div className="flex flex-col gap-2  w-full">
          <label htmlFor="Is there anything else we should know?">
            {"Is there anything else we should know?"}
          </label>
          <textarea
            id="Is there anything else we should know?"
            placeholder="project title"
            className="border-b-[1px] border-[#8A8A8A] h-[150px]"
          />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h2>{"Submission"}</h2>
        <p>
          {
            "Thank you for filling out this brief. Once submitted, we’ll reach out within 24 to 48 hours to schedule a consultation or send a tailored proposal."
          }
        </p>
      </div>

      <div className="flex gap-10 py-4 max-w-[450px] w-full mx-auto">
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

export default QuoteForm;
