import ProjectCard from "./Partial/ProjectCard/ProjectCard";
import ProjectsHeader from "./Partial/ProjectsHeader";

const page = async () => {
  return (
    <div className="h-full">
      <ProjectsHeader />
      <div className="w-full h-[calc(100%_-_50px)] overflow-y-auto p-4">
        <div className="grid grid-cols-3 gap-3">
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default page;
