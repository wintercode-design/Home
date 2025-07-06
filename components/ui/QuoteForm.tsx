"use client";
import React, { useState, useRef, useEffect } from "react";
import ButtonOpt from "./Button";
import { useTranslations } from "@/hooks/useMessages";
import { motion } from "framer-motion";

const QuoteForm = () => {
  const t = useTranslations("QuotePage");
  const [step, setStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState<{
    companyName: string;
    contactPerson: string;
    phone: string;
    email: string;
    location: string;
    hasWebsite: boolean;
    website: string;
    businessDescription: string;
    targetAudience: string;
    products: string;
    goals: string[];
    otherGoal: string;
    priorities: string;
    designLikes: string;
    designDislikes: string;
    colorPreferences: string;
    referenceWebsites: string;
    competitors: string;
    budget: string;
    timeline: string;
    additional: string;
  }>({
    companyName: "",
    contactPerson: "",
    phone: "",
    email: "",
    location: "",
    hasWebsite: false,
    website: "",
    businessDescription: "",
    targetAudience: "",
    products: "",
    goals: [],
    otherGoal: "",
    priorities: "",
    designLikes: "",
    designDislikes: "",
    colorPreferences: "",
    referenceWebsites: "",
    competitors: "",
    budget: "",
    timeline: "",
    additional: "",
  });

  const steps = [
    t("steps").basicInfo,
    t("steps").businessOverview,
    t("steps").projectGoals,
    t("steps").designPreferences,
    t("steps").competitors,
    t("steps").budgetTimeline,
    t("steps").additionalComments,
  ];

  // Auto-scroll to current step
  useEffect(() => {
    const currentStepElement = stepRefs.current[step];
    const container = containerRef.current;

    if (currentStepElement && container) {
      const containerRect = container.getBoundingClientRect();
      const stepRect = currentStepElement.getBoundingClientRect();

      const scrollLeft =
        currentStepElement.offsetLeft -
        containerRect.width / 2 +
        stepRect.width / 2;

      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  }, [step]);

  // Step indicator
  const StepIndicator = () => (
    <div
      ref={containerRef}
      className="flex overflow-x-auto no-scrollbar gap-8 sm:gap-4 mb-8 px-2 sm:px-0"
    >
      {steps.map((label, idx) => (
        <div
          key={idx}
          ref={(el) => {
            stepRefs.current[idx] = el;
          }}
          className="flex flex-col items-center min-w-[90px] sm:min-w-[70px] flex-shrink-0"
          aria-label={`Step ${idx + 1}: ${label}`}
        >
          <div
            className={`w-8 h-8 flex items-center justify-center rounded-full border-2 transition-colors duration-200 ${
              idx === step
                ? "border-blue-500 bg-blue-500 text-white"
                : "border-gray-400 bg-[#232C3D] text-gray-300"
            }`}
          >
            {idx + 1}
          </div>
          <span
            className={`mt-3 sm:mt-2 text-xs sm:text-xs text-center whitespace-normal break-words max-w-[80px] sm:max-w-[60px] ${
              idx === step ? "text-blue-500 font-semibold" : "text-gray-400"
            }`}
            style={{ wordBreak: "break-word" }}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );

  // Navigation
  const handleNext = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const handleBack = () => setStep((s) => Math.max(s - 1, 0));

  const goalOptions = t("form").goals
    ? [
        t("form").goals.onlinePresence,
        t("form").goals.generateLeads,
        t("form").goals.ecommerce,
        t("form").goals.bookings,
        t("form").goals.educational,
      ]
    : [];

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.42, 0, 0.58, 1] }}
      className="flex flex-col gap-[50px] max-w-[700px] w-full p-6 bg-[#232C3D]/40 rounded-xl"
    >
      <StepIndicator />
      {step === 0 && (
        <div className="flex flex-col gap-6">
          <h2>{t("steps").basicInfo}</h2>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="companyName">{t("form").companyName}</label>
            <input
              type="text"
              id="companyName"
              value={form.companyName}
              onChange={(e) =>
                setForm((f) => ({ ...f, companyName: e.target.value }))
              }
              className="border-b-[1px] border-[#8A8A8A]"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="contactPerson">{t("form").contactPerson}</label>
            <input
              type="text"
              id="contactPerson"
              value={form.contactPerson}
              onChange={(e) =>
                setForm((f) => ({ ...f, contactPerson: e.target.value }))
              }
              className="border-b-[1px] border-[#8A8A8A]"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="phone">{t("form.phone")}</label>
            <input
              type="text"
              id="phone"
              value={form.phone}
              onChange={(e) =>
                setForm((f) => ({ ...f, phone: e.target.value }))
              }
              className="border-b-[1px] border-[#8A8A8A]"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="email">{t("form").email}</label>
            <input
              type="text"
              id="email"
              value={form.email}
              onChange={(e) =>
                setForm((f) => ({ ...f, email: e.target.value }))
              }
              className="border-b-[1px] border-[#8A8A8A]"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="location">{t("form").location}</label>
            <input
              type="text"
              id="location"
              value={form.location}
              onChange={(e) =>
                setForm((f) => ({ ...f, location: e.target.value }))
              }
              className="border-b-[1px] border-[#8A8A8A]"
            />
          </div>
          <h6>{t("form").hasWebsite}</h6>
          <div className="flex gap-2 w-full items-center">
            <input
              type="checkbox"
              id="hasWebsite"
              checked={form.hasWebsite}
              onChange={(e) =>
                setForm((f) => ({ ...f, hasWebsite: e.target.checked }))
              }
            />
            <label htmlFor="hasWebsite">{t("form").yes}</label>
            {form.hasWebsite && (
              <input
                type="text"
                id="website"
                value={form.website}
                onChange={(e) =>
                  setForm((f) => ({ ...f, website: e.target.value }))
                }
                placeholder={t("form").websitePlaceholder}
                className="border-b-[1px] w-full border-[#8A8A8A]"
              />
            )}
            <input
              type="checkbox"
              id="noWebsite"
              checked={!form.hasWebsite}
              onChange={(e) =>
                setForm((f) => ({ ...f, hasWebsite: !e.target.checked }))
              }
            />
            <label htmlFor="noWebsite">{t("form").no}</label>
          </div>
        </div>
      )}
      {step === 1 && (
        <div className="flex flex-col gap-6">
          <h2>{t("steps").businessOverview}</h2>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="businessDescription">
              {t("form").businessDescription}
            </label>
            <textarea
              id="businessDescription"
              value={form.businessDescription}
              onChange={(e) =>
                setForm((f) => ({ ...f, businessDescription: e.target.value }))
              }
              className="border-b-[1px] border-[#8A8A8A] h-[100px]"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="targetAudience">{t("form").targetAudience}</label>
            <textarea
              id="targetAudience"
              value={form.targetAudience}
              onChange={(e) =>
                setForm((f) => ({ ...f, targetAudience: e.target.value }))
              }
              className="border-b-[1px] border-[#8A8A8A] h-[100px]"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="products">{t("form").products}</label>
            <textarea
              id="products"
              value={form.products}
              onChange={(e) =>
                setForm((f) => ({ ...f, products: e.target.value }))
              }
              className="border-b-[1px] border-[#8A8A8A] h-[100px]"
            />
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="flex flex-col gap-6">
          <h2>{t("steps").projectGoals}</h2>
          <p>{t("form").mainPurpose}</p>
          <div className="flex flex-col gap-2 w-full">
            {goalOptions.map((goal, idx) => (
              <label key={goal} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={form.goals.includes(goal)}
                  onChange={(e) => {
                    setForm((f) => {
                      const goals = f.goals.includes(goal)
                        ? f.goals.filter((g) => g !== goal)
                        : [...f.goals, goal];
                      return { ...f, goals };
                    });
                  }}
                />
                {goal}
              </label>
            ))}
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={!!form.otherGoal}
                onChange={(e) =>
                  setForm((f) => ({
                    ...f,
                    otherGoal: e.target.checked ? f.otherGoal : "",
                  }))
                }
              />
              {t("form").goals.other}
              <input
                type="text"
                value={form.otherGoal}
                onChange={(e) =>
                  setForm((f) => ({ ...f, otherGoal: e.target.value }))
                }
                placeholder={t("form").otherGoalPlaceholder}
                className="border-b-[1px] w-full border-[#8A8A8A]"
              />
            </label>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="priorities">{t("form").priorities}</label>
            <textarea
              id="priorities"
              value={form.priorities}
              onChange={(e) =>
                setForm((f) => ({ ...f, priorities: e.target.value }))
              }
              className="border-b-[1px] border-[#8A8A8A] h-[100px]"
            />
          </div>
        </div>
      )}
      {step === 3 && (
        <div className="flex flex-col gap-6">
          <h2>{t("steps").designPreferences}</h2>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="designLikes">{t("form").designLikes}</label>
            <textarea
              id="designLikes"
              value={form.designLikes}
              onChange={(e) =>
                setForm((f) => ({ ...f, designLikes: e.target.value }))
              }
              className="border-b-[1px] border-[#8A8A8A] h-[100px]"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="designDislikes">{t("form").designDislikes}</label>
            <textarea
              id="designDislikes"
              value={form.designDislikes}
              onChange={(e) =>
                setForm((f) => ({ ...f, designDislikes: e.target.value }))
              }
              className="border-b-[1px] border-[#8A8A8A] h-[100px]"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="colorPreferences">
              {t("form").colorPreferences}
            </label>
            <input
              id="colorPreferences"
              value={form.colorPreferences}
              onChange={(e) =>
                setForm((f) => ({ ...f, colorPreferences: e.target.value }))
              }
              className="border-b-[1px] border-[#8A8A8A]"
            />
          </div>
        </div>
      )}
      {step === 4 && (
        <div className="flex flex-col gap-6">
          <h2>{t("steps").competitors}</h2>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="referenceWebsites">
              {t("form").referenceWebsites}
            </label>
            <textarea
              id="referenceWebsites"
              value={form.referenceWebsites}
              onChange={(e) =>
                setForm((f) => ({ ...f, referenceWebsites: e.target.value }))
              }
              className="border-b-[1px] border-[#8A8A8A] h-[100px]"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="competitors">{t("form").competitors}</label>
            <textarea
              id="competitors"
              value={form.competitors}
              onChange={(e) =>
                setForm((f) => ({ ...f, competitors: e.target.value }))
              }
              className="border-b-[1px] border-[#8A8A8A] h-[100px]"
            />
          </div>
        </div>
      )}
      {step === 5 && (
        <div className="flex flex-col gap-6">
          <h2>{t("steps").budgetTimeline}</h2>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="budget">{t("form").budget}</label>
            <input
              id="budget"
              value={form.budget}
              onChange={(e) =>
                setForm((f) => ({ ...f, budget: e.target.value }))
              }
              className="border-b-[1px] border-[#8A8A8A]"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="timeline">{t("form").timeline}</label>
            <input
              id="timeline"
              value={form.timeline}
              onChange={(e) =>
                setForm((f) => ({ ...f, timeline: e.target.value }))
              }
              className="border-b-[1px] border-[#8A8A8A]"
            />
          </div>
        </div>
      )}
      {step === 6 && (
        <div className="flex flex-col gap-6">
          <h2>{t("steps").additionalComments}</h2>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="additional">{t("form").additional}</label>
            <textarea
              id="additional"
              value={form.additional}
              onChange={(e) =>
                setForm((f) => ({ ...f, additional: e.target.value }))
              }
              className="border-b-[1px] border-[#8A8A8A] h-[100px]"
            />
          </div>
        </div>
      )}
      <div className="flex justify-between mt-8">
        <ButtonOpt
          title={t("buttons").back}
          icon="arrow"
          fill={false}
          onClick={handleBack}
          disabled={step === 0}
        />
        {step < steps.length - 1 ? (
          <ButtonOpt
            title={t("buttons").next}
            icon="arrow"
            fill={true}
            onClick={handleNext}
          />
        ) : (
          <ButtonOpt
            title={t("buttons").submit}
            icon="arrow"
            fill={true}
            onClick={() => alert(t("submitMessage"))}
          />
        )}
      </div>
    </motion.form>
  );
};

export default QuoteForm;
