import { Divider } from "antd";
import Activity from "./Partial/Activity";
import Member from "./Partial/Member";
import Header from "./Partial/Header";
import { Poppins } from "next/font/google";
import Tasks from "../Tasks/Tasks";
import TaskFilterDropdown from "../Tasks/Partial/TaskFilterDropdown";
import SearchField from "../Tasks/Partial/SearchField";
import { QueryClient } from "@tanstack/react-query";
import { getSingleProject } from "@/reactQuery/api/projectApi";
import { Project } from "@/interface/project";
import { User } from "@/interface/user";
import { DragDropContext } from "react-beautiful-dnd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Link from "next/link";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const page = async ({ params }: { params: { id: string } }) => {
  const queryClient = new QueryClient();
  const project = await queryClient.fetchQuery<Project>({
    queryKey: ["projects"],
    queryFn: () => getSingleProject(params.id),
  });

  return (
    <div className={`p-6 xs:p-3 text-gray-600 space-y-5 ${poppins.className}`}>
      <Link
        href={"/dashboard/projects"}
        className="flex items-center gap-2 text-lg xs:text-base"
      >
        <ArrowLeftOutlined />
        Back
      </Link>
      {/* Project details */}
      <div className="w-full p-5 bg-white rounded-lg">
        <Header project={project as Project} />
        <Divider />
        <div>
          <h4 className="text-lg font-bold py-3 uppercase">
            Project Description
          </h4>
          <p className=" text-base ">{project?.description}</p>
        </div>
      </div>
      {/* Team members and recent activities */}
      <div className="flex items-start xs:flex-col gap-5 w-full sm">
        <div className="w-full p-3 rounded-lg border shadow-sm bg-white">
          <h4 className="text-lg font-bold pb-3">Team members</h4>
          <div className=" h-[300px] overflow-hidden overflow-y-auto scrollbar-none space-y-3">
            {project?.teamMembers?.map((member: User) => (
              <Member key={member.id} member={member} />
            ))}
          </div>
        </div>
        <div className="w-full p-3 rounded-lg border shadow-sm bg-white">
          <h4 className="text-lg font-bold pb-3">Recent Activities</h4>
          <div className=" h-[300px] overflow-hidden overflow-y-auto scrollbar-none">
            <Activity activities={project?.recentActivities as string[]} />
          </div>
        </div>
        <div className="w-full sm:hidden xs:hidden">
          {/* <h4 className="text-lg font-bold pb-3">Recent Activities</h4>
          <div className=" h-[300px] overflow-hidden overflow-y-auto scrollbar-none">
            <Activity />
          </div> */}
        </div>
      </div>
      {/* Task management */}
      <Divider />
      <div>
        <div className="my-6 space-y-3">
          <h2 className="text-2xl font-bold">Task management</h2>
          <div className="flex items-center xs:flex-col xs:w-full space-x-4 xs:space-x-0 xs:space-y-3">
            <TaskFilterDropdown
              filterFor={"status"}
              options={[
                { value: "in progress", label: "In Progress" },
                { value: "completed", label: "Completed" },
                { value: "pending", label: "Pending" },
              ]}
              placeholder="All Status"
            />
            <TaskFilterDropdown
              filterFor={"due"}
              options={[
                { value: "overdue", label: "Overdue" },
                { value: "today", label: "Due Today" },
                { value: "this_week", label: "Due This Week" },
              ]}
              placeholder="All Due dates"
            />

            <SearchField />
          </div>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4">
          <Tasks status="Pending" />
          <Tasks status="In Progress" />
          <Tasks status="Completed" />
        </div>
      </div>
    </div>
  );
};

export default page;
