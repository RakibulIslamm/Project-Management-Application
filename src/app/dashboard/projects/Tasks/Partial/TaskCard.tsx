"use client";
import AntModal from "@/app/components/Modal";
import { Task } from "@/interface/task";
import {
  ClockCircleOutlined,
  DownOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { Dropdown, MenuProps, Space } from "antd";
import Image from "next/image";
import Form from "./Form";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getSingleProject } from "@/reactQuery/api/projectApi";
import { Project } from "@/interface/project";
import { User } from "@/interface/user";
import useTaskStore from "@/store/TaskStore/taskStore";
import useCommonStore from "@/store/commonStore";

// const idSet = new Set(ids);
// const filteredUsers = users.filter(user => idSet.has(user.id));

const TaskCard = ({ task }: { task: Task }) => {
  const { changeTaskStatus } = useTaskStore();
  const { toggleModalOpen, mode, modalOpen } = useCommonStore();
  const { id } = useParams();
  const { data, isLoading } = useQuery<Project>({
    queryKey: ["project"],
    queryFn: () => getSingleProject(id as string),
  });

  if (isLoading) return;

  const items: MenuProps["items"] = [
    {
      label: "Edit",
      key: "0",
      onClick: () => toggleModalOpen("edit", task),
    },
    {
      label: "Delete",
      key: "1",
    },
    {
      label:
        task.status.toLowerCase() !== "Completed".toLowerCase() && "Complete",
      key: "3",
      onClick: () => changeTaskStatus(task.id, "Completed"),
    },
  ];

  return (
    <div
      className={`rounded border shadow-sm ${
        task?.status.toLowerCase() == "Pending".toLowerCase()
          ? "bg-slate-50"
          : task?.status.toLowerCase() == "in progress"
          ? "bg-yellow-100"
          : "bg-green-100"
      } h-[200px] flex flex-col justify-between`}
    >
      <div className="p-3 h-full flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-3">
            <h4 className="px-4 py-1 border rounded font-bold line-clamp-1">
              {task?.title}
            </h4>
            <Dropdown menu={{ items }} trigger={["click"]}>
              <a onClick={(e) => e.preventDefault()}>
                <Space size={"small"}>
                  <MoreOutlined className="text-lg" />
                </Space>
              </a>
            </Dropdown>
          </div>
          <p className="py-4 line-clamp-3">{task?.description}</p>
        </div>

        <div className="flex items-center justify-between gap-2">
          <p>
            <ClockCircleOutlined /> {new Date(task?.deadline).toDateString()}
          </p>
          <div className="flex items-center -space-x-2">
            {task.assignedMembers.slice(0, 4).map((m, idx) => (
              <Image
                key={idx}
                width={23}
                height={23}
                className="rounded-full"
                src="/images/user.png"
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
      <div
        className={`w-full h-2 rounded-b ${
          task.status.toLowerCase() == "Pending".toLowerCase()
            ? "bg-gray-300"
            : task.status.toLowerCase() == "In Progress".toLowerCase()
            ? "bg-yellow-300"
            : "bg-green-500"
        }`}
      ></div>
      {mode == "edit" && (
        <AntModal>
          <Form
            projectId={data?.id as string}
            members={data?.teamMembers as User[]}
          />
        </AntModal>
      )}
    </div>
  );
};

export default TaskCard;
