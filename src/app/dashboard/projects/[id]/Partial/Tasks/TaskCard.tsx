"use client";
import { DownOutlined, MoreOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps, Space } from "antd";

const TaskCard = () => {
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
    <div className="p-2 rounded bg-slate-50 border shadow-sm">
      <div>
        <h4 className="px-4 py-1 border rounded font-bold">
          Create wireframes
        </h4>
      </div>
      <p>Design wireframes for the new website layout.</p>
      <p>Deadline: {new Date(1687449600 * 1000).toUTCString()}</p>
      <div>Team members</div>
      <div>
        <Dropdown menu={{ items }} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <MoreOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
    </div>
  );
};

export default TaskCard;
