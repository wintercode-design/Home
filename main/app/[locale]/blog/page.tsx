"use client";
import Container from "@/components/base/Container";
import StartNewProject from "@/components/blocs/StartNewProject";
import BlogCard from "@/components/ui/BlogCard";
import Loading from "@/components/ui/Loading";
import MyIcons from "@/components/ui/MyIcons";
import PageIntro from "@/components/ui/PageIntro";
// import { useTranslations } from "@/hooks/useMessages";
import { useTranslations } from "next-intl";
import BlogQuery from "@/queries/blog";
import { Blog } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useAppContext } from "@/providers/appContext";

const Page = () => {
  const { baseURL } = useAppContext();
  const blogQuery = new BlogQuery(baseURL);
  const t = useTranslations("BlogPage");
  const loadingT = useTranslations("Common");
  const navT = useTranslations("Navigation");

  const blogs = useQuery({
    queryKey: ["getCategories"],
    queryFn: async () => {
      const fetchedblogs = await blogQuery.getAll();
      setfilteredBlogs(fetchedblogs);
      return fetchedblogs;
    },
  });

  const [filteredBlogs, setfilteredBlogs] = useState<Blog[]>([]);

  // Get unique categories from blogs
  const getUniqueCategories = (): string[] => {
    if (!blogs.data) return [];
    const categories = blogs.data.map((blog: Blog) => blog.category);
    return Array.from(new Set(categories));
  };

  const handleFilter = (filterType: string) => {
    const filtered = filterBlogs(filterType);
    console.log("filtering", filtered, filterType);
    setfilteredBlogs(filtered ?? []);
  };

  const filterBlogs = (filter: string) => {
    if (filter == "all") return blogs.data;
    return blogs.data?.filter((blog: Blog) => blog.category === filter);
  };

  if (blogs.isLoading) {
    return (
      <>
        <motion.div
          initial="offscreen"
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
        >
          <PageIntro
            title="blog"
            img="/titles/blog.webp"
            links={[
              { key: "home", title: navT("home"), link: "/" },
              { key: "blog", title: navT("blog"), link: "/blog" },
            ]}
          />
        </motion.div>
        <Loading status="loading" message={loadingT("loading")} />
      </>
    );
  }

  if (blogs.isError) {
    return (
      <>
        <motion.div
          initial="offscreen"
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
        >
          <PageIntro
            title="blog"
            img="/titles/blog.webp"
            links={[
              { key: "home", title: navT("home"), link: "/" },
              { key: "blog", title: navT("blog"), link: "/blog" },
            ]}
          />
        </motion.div>
        <Loading status="loading" message={loadingT("loadFailed")} />
      </>
    );
  }

  return (
    <>
      <motion.div
        initial="offscreen"
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
      >
        <PageIntro
          title={navT("blog")}
          img="/titles/blog.webp"
          links={[
            { key: "home", title: navT("home"), link: "/" },
            { key: "blog", title: navT("blog"), link: "/blog" },
          ]}
        />
      </motion.div>
      <main className=" overflow-hidden">
        <Container className="flex flex-col md:flex-row justify-center items-start gap-[50px] py-[100px]">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
            className="w-full px-6 md:px-0 md:w-1/4 flex flex-col gap-10"
          >
            <div className="flex px-3 py-2 rounded-full w-full bg-[#373C44] gap-2">
              <MyIcons value="lens" />
              <input type="text" placeholder={t("search")} className="w-full" />
            </div>

            <div className="flex flex-col gap-6 px-4 py-3 rounded-2xl w-full md:bg-[#373C44]">
              <h4>{t("categories")}</h4>

              <div className="flex flex-wrap md:flex-col gap-2">
                <span
                  onClick={() => handleFilter("all")}
                  className={`p-2 outline-1 md:outline-none rounded-full md:rounded-none py-2 cursor-pointer flex gap-2
                          hover:bg-[var(--secondary)] hover:text-black hover:rounded-full`}
                >
                  <img
                    src={"/"}
                    alt={"/"}
                    className="h-8 w-8 rounded-full bg-gray-200"
                  />
                  <h6>{t("all")}</h6>
                </span>
                {blogs.data &&
                  getUniqueCategories().map((category, index: number) => {
                    return (
                      <span
                        onClick={() => handleFilter(category)}
                        key={index}
                        className={`p-2 outline-1 md:outline-none rounded-full md:rounded-none py-2 cursor-pointer flex gap-2
                          hover:bg-[var(--secondary)] hover:text-black hover:rounded-full`}
                      >
                        <img
                          src="/"
                          alt={category}
                          className="h-8 w-8 rounded-full bg-gray-200"
                        />
                        <h6>{category}</h6>
                      </span>
                    );
                  })}
              </div>
            </div>

            <div className="hidden md:flex flex-col gap-6 px-4 py-3 rounded-2xl w-full bg-[#373C44]">
              <h4>{t("topPosts")}</h4>

              <div className="flex flex-col gap-2">
                {blogs.isSuccess &&
                  blogs.data
                    .slice(0, 4) // Show first 4 posts instead of filtering by headline
                    .map((post: Blog, index: number) => {
                      const last = index == 3;
                      return (
                        <Link
                          href={`/blog/${post.slug}`}
                          key={index}
                          className={`p-2 flex flex-col gap-2 ${
                            !last && "border-b"
                          }`}
                        >
                          <h6>{post.title}</h6>
                          <p>{post.content.substring(0, 100)}...</p>
                        </Link>
                      );
                    })}
              </div>
            </div>

            <div className="hidden md:grid grid-cols-1 w-full h-fit gap-6 py-3">
              {[
                "/ads/ads0.jpeg",
                "/ads/ads2.jpeg",
                "/ads/ads3.jpeg",
                "/ads/ads4.jpeg",
              ].map((ads, index) => (
                <img
                  key={index}
                  alt={ads.split("/").pop()}
                  src={ads}
                  className="rounded-xl h-[150px] w-full object-cover bg-gray-200"
                />
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
            className="w-full justify-center items-center md:w-3/4 flex flex-col gap-10"
          >
            <div className="w-fit p-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {blogs.isSuccess &&
                filteredBlogs.map((blog, index) => {
                  return <BlogCard key={index} {...blog} />;
                })}
            </div>
            {/* <div className="flex justify-center items-center gap-3">
              <Badge icon={"prev"} />
              {[1, 2, 3, 4].map((item, index) => (
                <Badge icon={"number"} num={item} key={index} />
              ))}
              <Badge icon={"next"} />
            </div> */}
          </motion.div>
        </Container>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
        >
          <StartNewProject />
        </motion.div>
      </main>
    </>
  );
};

export default Page;
