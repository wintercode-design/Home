"use client";

import Container from "@/components/base/Container";
import StartNewProject from "@/components/blocs/StartNewProject";
import ProjectCardFull from "@/components/ui/ProjectCardFull";
import { getProjects } from "@/requests/ApiRequests";
import { useQuery } from "@tanstack/react-query";

const page = () => {
  const query = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });
  return (
    <main>
      <Container>
        <div className="py-[100px] grid grid-cols-1 lg:grid-cols-2 gap-6">
          {query.data?.map((project, index) => (
            <ProjectCardFull {...project} key={index} />
          ))}
        </div>
      </Container>

      <StartNewProject />
    </main>
  );
};

export default page;
