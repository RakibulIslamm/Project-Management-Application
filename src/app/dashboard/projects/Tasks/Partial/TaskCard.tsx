"use client";
import { Task } from "@/interface/task";
import {
  ClockCircleOutlined,
  DownOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { Dropdown, MenuProps, Space } from "antd";
import Image from "next/image";

const TaskCard = ({ task }: { task: Task }) => {
  const items: MenuProps["items"] = [
    {
      label: <button className=" text-xs">Edit</button>,
      key: "0",
    },
    {
      label: <button className=" text-xs">Delete</button>,
      key: "1",
    },
    {
      label: <button className=" text-xs">Complete</button>,
      key: "3",
    },
  ];

  return (
    <div
      draggable
      className={`rounded border shadow-sm ${
        task?.status.toLowerCase() == "to do"
          ? "bg-slate-50"
          : task?.status.toLowerCase() == "in progress"
          ? "bg-yellow-100"
          : "bg-green-100"
      } cursor-move h-[200px] flex flex-col justify-between`}
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

        <div className="flex items-center gap-2">
          <p>
            <ClockCircleOutlined />{" "}
            {new Date(task?.deadline * 1000).toDateString()}
          </p>
          <div className="flex items-center -space-x-2">
            <Image
              width={23}
              height={23}
              className="rounded-full"
              src="/images/user.png"
              alt=""
            />
            <Image
              width={23}
              height={23}
              className="rounded-full"
              src="/images/user.png"
              alt=""
            />
            <Image
              width={23}
              height={23}
              className="rounded-full"
              src="/images/user.png"
              alt=""
            />
            <Image
              width={23}
              height={23}
              className="rounded-full"
              src="/images/user.png"
              alt=""
            />
            <Image
              width={23}
              height={23}
              className="rounded-full"
              src="/images/user.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div
        className={`w-full h-2 rounded-b ${
          task.status.toLowerCase() == "To Do".toLowerCase()
            ? "bg-gray-300"
            : task.status.toLowerCase() == "In Progress".toLowerCase()
            ? "bg-yellow-300"
            : "bg-green-500"
        }`}
      ></div>
    </div>
  );
};

export default TaskCard;
