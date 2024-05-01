"use client";
import { Project } from "@/interface/project";
import {
  PlusCircleOutlined,
  EyeOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, MenuProps, Space, Tooltip } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Footer = ({ project }: { project: Project }) => {
  const router = useRouter();

  const items: MenuProps["items"] = [
    {
      label: <button>Edit</button>,
      key: "0",
    },
    {
      label: <button>Delete</button>,
      key: "1",
    },
  ];

  return (
    <>
      <div className="flex items-center -space-x-2">
        {project?.teamMembers?.slice(0, 4)?.map((member, idx) => (
          <Image
            key={idx}
            width={23}
            height={23}
            className="rounded-full"
            src="/images/user.png"
            alt=""
          />
        ))}
        <Tooltip title="Add member">
          <Button
            type="primary"
            shape="circle"
            icon={<PlusCircleOutlined />}
            size="small"
          />
        </Tooltip>
      </div>
      <div className="flex items-center gap-3">
        <Button
          onClick={() => router.push(`/dashboard/projects/${project.id}`)}
          type="primary"
          icon={<EyeOutlined />}
        >
          View
        </Button>
        <Dropdown menu={{ items }} placement="top" trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <MoreOutlined className="text-xl" />
            </Space>
          </a>
        </Dropdown>
      </div>
    </>
  );
};

export default Footer;
