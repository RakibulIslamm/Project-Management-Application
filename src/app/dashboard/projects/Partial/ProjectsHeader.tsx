import { Button } from "antd";
import React from "react";
import { PlusCircleOutlined } from "@ant-design/icons";

const ProjectsHeader = () => {
  return (
    <div className="w-full h-[50px] px-4 bg-gray-200 flex items-center justify-between rounded-t-lg">
      <h2 className="text-2xl font-bold">Projects</h2>
      <Button
        type="primary"
        shape="round"
        icon={<PlusCircleOutlined />}
        size={"small"}
        className="h-[30px]"
      >
        Add new
      </Button>
    </div>
  );
};

export default ProjectsHeader;
