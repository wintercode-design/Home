"use client";
import React from "react";
import Container from "../base/Container";
import SectionHead from "../ui/SectionHead";
import BlogCard from "../ui/BlogCard";
import BlogQuery from "@/queries/blog";
import { Blog } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import ButtonOpt from "../ui/Button";
import Link from "next/link";
import Loading from "../ui/Loading";
// import { useTranslations } from "@/hooks/useMessages";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useAppContext } from "@/providers/appContext";

const ShortNewsList = () => {
  const { baseURL } = useAppContext();
  const blogQuery = new BlogQuery(baseURL);
  const t = useTranslations("HomePage.news");

  const blogs = useQuery({
    queryKey: ["getHomeBlogs"],
    queryFn: () => blogQuery.getAll(),
  });

  if (blogs.isLoading) {
    return (
      <Container className="flex flex-col justify-center items-center gap-[50px] min-h-[60vh] py-[100px]">
        <Loading status="loading" message="Loading latest news..." />
      </Container>
    );
  }

  if (blogs.isError) {
    return (
      <Container className="flex flex-col justify-center items-center gap-[50px] min-h-[60vh] py-[100px]">
        <Loading status="failed" message="Failed to load latest news" />
      </Container>
    );
  }

  return (
    <Container className="flex flex-col justify-center items-center gap-[50px] min-h-[60vh] py-[100px]">
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
      <div className="flex flex-wrap flex-col md:flex-row justify-center items-center w-full gap-4">
        {blogs.data?.slice(0, 4).map((blog: Blog, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.7,
              delay: index * 0.12,
              ease: [0.42, 0, 0.58, 1],
            }}
          >
            <BlogCard {...blog} />
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.42, 0, 0.58, 1] }}
        className="flex justify-center mt-8"
      >
        <Link href="/blog">
          <ButtonOpt title={t("viewMore")} icon={"arrow"} isNav={false} />
        </Link>
      </motion.div>
    </Container>
  );
};

export default ShortNewsList;
