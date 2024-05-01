"use client";
import {
  ClockCircleOutlined,
  DownOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { Dropdown, MenuProps, Space } from "antd";
import Image from "next/image";

const TaskCard = () => {
  let status = "to do";
  const items: MenuProps["items"] = [
    {
      label: <button>Edit</button>,
      key: "0",
    },
    {
      label: <button>Delete</button>,
      key: "1",
    },
    {
      label: <button>Mark as complete</button>,
      key: "3",
    },
  ];

  return (
    <div
      draggable
      className={`rounded border shadow-sm ${
        status == "to do"
          ? "bg-slate-50"
          : status == "in progress"
          ? "bg-yellow-100"
          : "bg-green-100"
      } cursor-move`}
    >
      <div className="p-3">
        <div className="flex items-center justify-between gap-3">
          <h4 className="px-4 py-1 border rounded font-bold line-clamp-1">
            Create wireframes
          </h4>
          <Dropdown menu={{ items }} trigger={["click"]}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <MoreOutlined className="text-lg" />
              </Space>
            </a>
          </Dropdown>
        </div>
        <p className="py-4">Design wireframes for the new website layout.</p>

        <div className="flex items-center gap-2">
          <p>
            <ClockCircleOutlined /> {new Date(1687449600 * 1000).toDateString()}
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
      <div className="w-full h-2 bg-green-500 rounded-b"></div>
    </div>
  );
};

export default TaskCard;
