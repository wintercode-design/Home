"use client";
import React, { useState } from "react";
import NewsletterQuery from "@/queries/newsletter";
import { Subscriber } from "@/types/types";
import { useMutation } from "@tanstack/react-query";
import { useAppContext } from "@/providers/appContext";

const BROCHURE_PDF_URL =
  "https://drive.google.com/file/d/1YRTexU6axAHAIDpZRhb4FoHvugJhqvRL/view?usp=sharing";
const BROCHURE_IMAGE_SRC = "/brochur/wintercode-brochur-img.webp";

/**
 * BrochureDownload component displays a brochure image as a book cover and a download button.
 * The component is full-width, content is centered, and the image has a book-like 3D effect.
 * Includes an email form to register users for the newsletter and send them the brochure.
 */
const BrochureDownload: React.FC = () => {
  const { baseURL } = useAppContext();
  const newsletterQuery = new NewsletterQuery(baseURL);
  const [email, setEmail] = useState("");
  const [showEmailForm, setShowEmailForm] = useState(false);

  const newsletterMutation = useMutation({
    mutationFn: (
      data: Omit<Subscriber, "id" | "status" | "subscribedAt" | "name">
    ) =>
      newsletterQuery.create({
        ...data,
        status: "ACTIVE",
        subscribedAt: new Date().toISOString(),
        name: "Brochure Downloader",
      }),
    onSuccess: () => {
      alert(
        "Thank you! We've sent the brochure to your email and added you to our newsletter."
      );
      setEmail("");
      setShowEmailForm(false);
    },
    onError: (error) => {
      alert("Failed to register. Please try again.");
      console.error("Newsletter subscription error:", error);
    },
  });

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      newsletterMutation.mutate({ email, source: "brochure_download" });
    }
  };

  return (
    <section className="w-full bg-white/5 py-12 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Decorative background (optional) */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-10 z-0">
        {/* You can add SVG or background patterns here if desired */}
      </div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-6xl mx-auto px-4">
        {/* Text Content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left max-w-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-blue-400">Discover</span> our company brochure
          </h2>
          <p className="text-white/80 text-base md:text-lg mb-6">
            Download our detailed brochure to learn more about our services,
            values, and what makes us unique.
          </p>

          {/* Email Form */}
          {showEmailForm ? (
            <div className="w-full max-w-md">
              <form
                onSubmit={handleEmailSubmit}
                className="flex flex-col gap-4"
              >
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-white text-sm font-medium"
                  >
                    Enter your email to receive the brochure:
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div className="flex gap-3">
                  <button
                    type="submit"
                    disabled={newsletterMutation.isPending}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-700 hover:bg-blue-800 disabled:bg-blue-600 text-white font-semibold rounded-full shadow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 text-base md:text-lg"
                  >
                    {newsletterMutation.isPending ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                          />
                        </svg>
                        Send to Email
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowEmailForm(false)}
                    className="px-4 py-3 text-white/80 hover:text-white border border-white/20 hover:border-white/40 rounded-full transition-colors duration-200"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <button
              onClick={() => setShowEmailForm(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-full shadow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 text-base md:text-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <span>Send to Email</span>
            </button>
          )}
        </div>
        {/* Book Cover Image */}
        <div className="flex-1 flex items-center justify-center w-full md:w-auto">
          <div className="relative group" style={{ perspective: 1200 }}>
            <img
              src={BROCHURE_IMAGE_SRC}
              alt="Wintercode Brochure Cover"
              className="w-56 h-80 md:w-64 md:h-96 object-cover rounded-lg shadow-2xl border border-white/10 transform group-hover:-rotate-y-6 group-hover:scale-105 transition-transform duration-500 bg-white"
              style={{
                boxShadow:
                  "0 8px 32px 0 rgba(14,28,54,0.25), 0 1.5px 0 0 #e2e8f0",
              }}
              loading="lazy"
            />
            {/* Book spine effect */}
            <div
              className="absolute left-0 top-0 h-full w-3 bg-gradient-to-r from-white/60 to-transparent rounded-l-lg shadow-md"
              style={{ filter: "blur(1px)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrochureDownload;
