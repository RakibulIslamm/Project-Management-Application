import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
  useQuery,
} from "@tanstack/react-query";
import ProjectCard from "./Partial/ProjectCard/ProjectCard";
import ProjectsHeader from "./Partial/ProjectsHeader";
import { getProjects } from "@/reactQuery/api/projectApi";
import { Suspense } from "react";
import { Project } from "@/interface/project";

const page = async () => {
  const queryClient = new QueryClient();
  const projects = await queryClient.fetchQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  // console.log(projects);

  return (
    <div className="h-full">
      <ProjectsHeader />
      <div className="w-full h-[calc(100%_-_50px)] overflow-y-auto p-4">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <div className="grid grid-cols-3 gap-3">
            <Suspense fallback={<p>Loading...</p>}>
              {projects.map((project: Project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </Suspense>
          </div>
        </HydrationBoundary>
      </div>
    </div>
  );
};

export default page;
