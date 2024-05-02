"use client";
import { Task } from "@/interface/task";
import {
  ClockCircleOutlined,
  MoreOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, MenuProps, Space, Tooltip } from "antd";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getSingleProject } from "@/reactQuery/api/projectApi";
import { Project } from "@/interface/project";
import { User } from "@/interface/user";
import useTaskStore from "@/store/TaskStore/taskStore";
import useCommonStore from "@/store/commonStore";
import ViewTask from "./ViewTask";
import EditTask from "./EditTask";
import AddMembers from "./AddMembers";
import { Draggable } from "@hello-pangea/dnd";

const TaskCard = ({ task, index }: { task: Task; index: number }) => {
  const { changeTaskStatus, removeTask } = useTaskStore();
  const {
    toggleModalOpen,
    mode,
    modalOpen,
    data: singleTask,
  } = useCommonStore();
  const { id } = useParams();
  const { data, isLoading } = useQuery<Project>({
    queryKey: ["project"],
    queryFn: () => getSingleProject(id as string),
  });

  if (isLoading) return;

  const idSet = new Set(task.assignedMembers);
  const filteredUsers = data?.teamMembers?.filter((user) => idSet.has(user.id));

  const items: MenuProps["items"] = [
    {
      label: "Open",
      key: "2",
      onClick: () => toggleModalOpen("view_task", task),
    },
    {
      label: "Edit",
      key: "0",
      onClick: () => toggleModalOpen("edit", task),
    },
    {
      label: "Delete",
      key: "1",
      onClick: () => removeTask(task.id),
    },

    {
      label:
        task.status.toLowerCase() !== "Completed".toLowerCase() && "Complete",
      key: "3",
      onClick: () => changeTaskStatus(task.id, "Completed"),
    },
  ];

  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            ...provided.draggableProps.style,
          }}
          className={`rounded border shadow-sm ${
            task?.status.toLowerCase() == "pending"
              ? "bg-slate-50"
              : task?.status.toLowerCase() == "in progress"
              ? "bg-yellow-100"
              : "bg-green-100"
          } h-[200px] flex flex-col justify-between select-none`}
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
                <ClockCircleOutlined />{" "}
                {new Date(task?.deadline).toDateString()}
              </p>
              <div className="flex items-center -space-x-2">
                {filteredUsers?.slice(0, 6)?.map((m, idx) => (
                  <Tooltip key={idx} title={m.name}>
                    <Image
                      width={23}
                      height={23}
                      className="rounded-full"
                      src="/images/user.png"
                      alt=""
                    />
                  </Tooltip>
                ))}
                <Tooltip title="Add member">
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<PlusCircleOutlined />}
                    size="small"
                    onClick={() => toggleModalOpen("add_member", task)}
                  />
                  {mode == "add_member" && modalOpen && (
                    <AddMembers
                      task={singleTask as Task}
                      teamMembers={data?.teamMembers as User[]}
                    />
                  )}
                </Tooltip>
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
            <EditTask
              projectId={data?.id as string}
              teamMembers={data?.teamMembers as User[]}
            />
          )}

          {mode == "view_task" && modalOpen && (
            <ViewTask
              task={singleTask as Task}
              teamMembers={data?.teamMembers as User[]}
            />
          )}
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
