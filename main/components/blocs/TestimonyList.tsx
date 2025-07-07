"use client";
import React, { useState, useEffect } from "react";
import Container from "../base/Container";
import SectionHead from "../ui/SectionHead";
import TestimonyBadge from "../ui/TestimonyBadge";
import Testimony from "../ui/Testimony";
import ReviewQuery from "@/queries/review";
import { Review } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import Loading from "../ui/Loading";
import { useTranslations } from "@/hooks/useMessages";
import { motion } from "framer-motion";

const TestimonyList = () => {
  const reviewQuery = new ReviewQuery();
  const t = useTranslations("HomePage.testimonials");
  const loadingT = useTranslations("Common");
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const reviews = useQuery({
    queryKey: ["getAllReviews"],
    queryFn: () => reviewQuery.getAll(),
  });

  // Auto-advance carousel
  useEffect(() => {
    if (reviews.data && reviews.data.length > 1) {
      const interval = setInterval(() => {
        setCurrentReviewIndex((prev) =>
          prev === reviews.data.length - 1 ? 0 : prev + 1
        );
      }, 5000); // Change every 5 seconds

      return () => clearInterval(interval);
    }
  }, [reviews.data]);

  const handleDotClick = (index: number) => {
    setCurrentReviewIndex(index);
  };

  if (reviews.isLoading) {
    return <Loading status="loading" message={loadingT("loading")} />;
  }

  if (reviews.isError) {
    return <Loading status="failed" message={loadingT("loadFailed")} />;
  }

  const currentReview = reviews.data?.[currentReviewIndex];

  return (
    <Container
      stylebg="bg-[#1A202C]/50"
      className="flex flex-col justify-center items-center gap-[50px] min-h-[60vh] py-[100px]"
    >
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
      >
        <SectionHead
          sectionTitle={t("title")}
          sectionSubtitle={t("subtitle")}
          sectionDescription={t("description")}
        />
      </motion.div>
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="flex flex-wrap justify-center gap-3">
          {reviews.data?.slice(0, 4).map((review: Review, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.42, 0, 0.58, 1],
              }}
            >
              <TestimonyBadge
                title={review.clientName}
                subtitle={review.clientTitle}
                imageUrl={review.clientImage || "/partners/partner1.png"}
              />
            </motion.div>
          ))}
        </div>
        {currentReview && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.42, 0, 0.58, 1] }}
          >
            <Testimony
              title={`"${currentReview.review}"`}
              name={currentReview.clientName}
              role={`${currentReview.clientTitle} at ${currentReview.clientCompany}`}
              imageUrl={currentReview.clientImage}
            />
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.42, 0, 0.58, 1] }}
          className="flex justify-center items-center gap-3"
        >
          {reviews.data?.map((review: Review, index: number) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-16 h-[4px] transition-all duration-300 ${
                index === currentReviewIndex
                  ? "bg-white"
                  : "bg-gray-500 hover:bg-gray-400"
              }`}
            />
          ))}
        </motion.div>
      </div>
    </Container>
  );
};

export default TestimonyList;
