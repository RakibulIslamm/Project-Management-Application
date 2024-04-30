"use client";
import {
  FieldTimeOutlined,
  PlusCircleOutlined,
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  return (
    <>
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
        <Tooltip title="Add member">
          <Button
            type="primary"
            shape="circle"
            icon={<PlusCircleOutlined />}
            size="small"
          />
        </Tooltip>
      </div>
      <div className="flex items-center gap-2">
        <Button
          onClick={() => router.push("/dashboard/projects/123")}
          type="primary"
          icon={<EyeOutlined />}
        >
          View
        </Button>
        <Button type="primary" icon={<EditOutlined />} />
        <Button type="primary" icon={<DeleteOutlined />} />
      </div>
    </>
  );
};

export default Footer;
