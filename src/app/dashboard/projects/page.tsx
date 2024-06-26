import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import ProjectCard from "./Partial/ProjectCard/ProjectCard";
import ProjectsHeader from "./Partial/ProjectsHeader";
import { getProjects } from "@/reactQuery/api/projectApi";
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
          <div className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-3">
            {projects.map((project: Project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </HydrationBoundary>
      </div>
    </div>
  );
};

export default page;
