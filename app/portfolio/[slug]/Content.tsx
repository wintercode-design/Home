"use client";
import Container from "@/components/base/Container";
import ShortNewsList from "@/components/blocs/ShortNewsList";
import StartNewProject from "@/components/blocs/StartNewProject";
import MyIcons from "@/components/ui/MyIcons";
import Loading from "@/components/ui/Loading";
import ProjectQuery from "@/queries/project";
import { Project } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

interface ContentProps {
  slug: string;
}

const Content = ({ slug }: ContentProps) => {
  const projectQuery = new ProjectQuery();

  const project = useQuery({
    queryKey: ["getProjectBySlug", slug],
    queryFn: () => projectQuery.getOneSlug(slug),
    enabled: !!slug,
  });

  const projects = useQuery({
    queryKey: ["getAllProjects"],
    queryFn: () => projectQuery.getAll(),
  });

  // Get unique categories from projects
  const getUniqueCategories = (): string[] => {
    if (!projects.data) return [];
    const categories = projects.data.map(
      (project: Project) => project.category
    );
    return Array.from(new Set(categories));
  };

  if (project.isLoading || projects.isLoading) {
    return <Loading status="loading" message="Loading project..." />;
  }

  if (project.isError) {
    return <Loading status="failed" message="Failed to load project" />;
  }

  if (!project.data) {
    return <Loading status="failed" message="Project not found" />;
  }

  return (
    <main>
      <Container className="flex flex-col-reverse lg:flex-row justify-center items-start gap-[50px] py-[100px]">
        <div className="w-full lg:w-1/4 flex flex-col gap-10">
          <div className="hidden lg:flex px-3 py-2 rounded-full w-full bg-[#373C44] gap-2">
            <MyIcons value="lens" />
            <input type="text" placeholder="Search" className="w-full" />
          </div>

          <div className="hidden lg:flex flex-col gap-6 px-4 py-3 rounded-2xl w-full bg-[#373C44]">
            <h4>{"Categories"}</h4>

            <div className="flex flex-col gap-2">
              {projects.isSuccess && getUniqueCategories().length > 0
                ? getUniqueCategories().map(
                    (category: string, index: number) => {
                      const last = index + 1 === getUniqueCategories().length;
                      return (
                        <span
                          key={index}
                          className={`p-2 ${
                            !last && "border-b border-b-white/10"
                          }`}
                        >
                          <h6>{category}</h6>
                        </span>
                      );
                    }
                  )
                : [
                    "Web Design",
                    "Hosting",
                    "Coding",
                    "SEO",
                    "Development tools",
                  ].map((category, index) => {
                    const last = category == "Development tools";
                    return (
                      <span
                        key={index}
                        className={`p-2 ${
                          !last && "border-b border-b-white/10"
                        }`}
                      >
                        <h6>{category}</h6>
                      </span>
                    );
                  })}
            </div>
          </div>

          <div className="flex flex-col gap-6 px-4 py-3 rounded-2xl w-full bg-[#373C44]">
            <h4>{"Recent Projects"}</h4>

            <div className="flex flex-col gap-2">
              {projects.isSuccess &&
                projects.data
                  .slice(0, 4)
                  .map((project: Project, index: number) => {
                    const last = index == 3;
                    return (
                      <span
                        key={index}
                        className={`p-2 flex flex-col gap-2 ${
                          !last && "border-b"
                        }`}
                      >
                        <h6>{project.title}</h6>
                        <p>{project.description.substring(0, 100)}...</p>
                      </span>
                    );
                  })}
            </div>
          </div>

          <div className="grid grid-cols-1 w-full h-fit gap-6 py-3">
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
        </div>

        <div className="w-full lg:w-3/4 flex flex-col gap-10 -mt-[250px]">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <img
                src="/Logo_wintercode_design.png"
                alt="wintercode"
                className="w-6 h-6 rounded-full object-cover"
              />
              <article>{`${project.data.startDate} - ${project.data.endDate} | by WinterCode Design`}</article>
            </div>
            <img
              src={project.data.imageUrl || "/projects/project1.png"}
              alt={project.data.title}
              className="w-full h-[350px] object-cover"
            />
          </div>

          <div className="flex flex-col gap-3">
            <h5>{project.data.title}</h5>
            {project.data.description ? (
              <div
                dangerouslySetInnerHTML={{ __html: project.data.description }}
              />
            ) : (
              <>
                <p>{`
            In an age where 70% of customers look online before making a purchase, having a digital presence isn't optional. Here's why a website is your business's most powerful sales tool.

In 2025, having a website is not optional—it's essential. With mobile internet usage dominating the continent and online competition rising fast, your business's survival and growth depend on your online visibility.

Why it matters:
First impressions are now digital.
You can reach clients 24/7, even when you're asleep.
A well-structured website gives you authority in your niche.

What a website gives you:
A custom domain and email address
SEO advantages and online discoverability
Integration with payment systems, WhatsApp, maps, and social media

"At WinterCode, we help African entrepreneurs build powerful digital brands that speak and sell."
            `}</p>
                <img
                  src="/ads/ads4.jpeg"
                  alt="business"
                  className="w-full h-[300px] object-cover"
                />
                <p>{`
            In an age where 70% of customers look online before making a purchase, having a digital presence isn't optional. Here's why a website is your business's most powerful sales tool.

In 2025, having a website is not optional—it's essential. With mobile internet usage dominating the continent and online competition rising fast, your business's survival and growth depend on your online visibility.

Why it matters:
First impressions are now digital.
You can reach clients 24/7, even when you're asleep.
A well-structured website gives you authority in your niche.

What a website gives you:
A custom domain and email address
SEO advantages and online discoverability
Integration with payment systems, WhatsApp, maps, and social media

"At WinterCode, we help African entrepreneurs build powerful digital brands that speak and sell."
            `}</p>
              </>
            )}
          </div>
        </div>
      </Container>

      <ShortNewsList />

      <StartNewProject />
    </main>
  );
};

export default Content;
