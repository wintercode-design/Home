"use client";
import ContactQuery from "@/queries/contact";
import { Contact } from "@/types/types";
import { useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Loading from "./Loading";
import { useAppContext } from "@/providers/appContext";

interface ContactFormProps {
  initialName?: string;
  initialEmail?: string;
  initialSubject?: string;
  initialMessage?: string;
  initialPhone?: string;
}

const ContactForm = ({
  initialName = "",
  initialEmail = "",
  initialSubject = "",
  initialMessage = "",
  initialPhone = "",
}: ContactFormProps) => {
  const { baseURL } = useAppContext();
  const contactQuery = new ContactQuery(baseURL);
  const [formData, setFormData] = useState({
    name: initialName,
    email: initialEmail,
    subject: initialSubject,
    message: initialMessage,
    phone: initialPhone,
  });

  const contactMutation = useMutation({
    mutationFn: (
      data: Omit<
        Contact,
        "id" | "status" | "createdAt" | "priority" | "replied"
      >
    ) =>
      contactQuery.create({
        ...data,
        status: "PENDING",
        createdAt: new Date().toISOString(),
        priority: "MEDIUM",
        replied: false,
      }),
    onSuccess: () => {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "", phone: "" });
    },
    onError: (error) => {
      alert("Failed to send message. Please try again.");
      console.error("Contact form error:", error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", subject: "", message: "", phone: "" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (contactMutation.isPending) {
    return <Loading status="loading" message="Sending message..." />;
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.42, 0, 0.58, 1] }}
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 max-w-[700px] w-full p-6 bg-[#232C3D]/40 rounded-xl"
    >
      <h2>Get in touch</h2>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="name">{"Name"}</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="nom"
            className="border-b-[1px] border-[#8A8A8A]"
            required
          />
        </div>
        <div className="flex flex-col gap-2  w-full">
          <label htmlFor="email">{"Email"}</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="exmple@email.com"
            className="border-b-[1px] border-[#8A8A8A]"
            required
          />
        </div>
      </div>
      <div className="flex flex-col gap-2  w-full">
        <label htmlFor="subject">{"Subject"}</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          placeholder="project title"
          className="border-b-[1px] border-[#8A8A8A]"
          required
        />
      </div>

      <div className="flex flex-col gap-2  w-full">
        <label htmlFor="message">{"Message"}</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="project title"
          className="border-b-[1px] border-[#8A8A8A] h-[150px]"
          required
        />
      </div>
      <div className="flex flex-col gap-2  w-full">
        <label htmlFor="phone">{"Phone"}</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="phone number"
          className="border-b-[1px] border-[#8A8A8A]"
        />
      </div>
      <div className="flex gap-4 py-4">
        <button
          type="submit"
          className="w-full item-center justify-center px-3 py-1 rounded-full bg-white text-black outline-1 outline-white"
        >
          send
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="w-full item-center justify-center px-3 py-2 rounded-full outline-1 outline-white"
        >
          Reset
        </button>
      </div>
    </motion.form>
  );
};

export default ContactForm;
