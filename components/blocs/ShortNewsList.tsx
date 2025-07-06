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
import { useTranslations } from "@/hooks/useMessages";

const ShortNewsList = () => {
  const blogQuery = new BlogQuery();
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
      <SectionHead
        sectionTitle={t("title")}
        sectionSubtitle={t("subtitle")}
        sectionDescription={t("description")}
      />

      <div className="flex flex-wrap flex-col md:flex-row justify-center items-center w-full gap-4">
        {blogs.data?.slice(0, 4).map((blog: Blog, index: number) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Link href="/blog">
          <ButtonOpt title={t("viewMore")} icon={"arrow"} isNav={false} />
        </Link>
      </div>
    </Container>
  );
};

export default ShortNewsList;
