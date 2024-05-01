"use client";
import { Divider } from "antd";
import React from "react";
import Activity from "./Partial/Activity";
import Member from "./Partial/Member";
import Header from "./Partial/Header";
import { Poppins } from "next/font/google";
import Tasks from "./Partial/Tasks/Tasks";
import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import TaskFilterDropdown from "./Partial/Tasks/TaskFilterDropdown";
import SearchField from "./Partial/Tasks/SearchField";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const page = () => {
  return (
    <div className={`p-6 text-gray-600 space-y-5 ${poppins.className}`}>
      {/* Project details */}
      <div className="w-full p-5 bg-white rounded-lg">
        <Header />
        <Divider />
        <div>
          <h4 className="text-lg font-bold py-3 uppercase">
            Project Description
          </h4>
          <p className=" text-base ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      {/* Team members and recent activities */}
      <div className="flex items-start gap-5 w-full">
        <div className="w-full p-3 rounded-lg border shadow-sm bg-white">
          <h4 className="text-lg font-bold pb-3">Team members</h4>
          <div className=" h-[300px] overflow-hidden overflow-y-auto scrollbar-none space-y-3">
            <Member />
          </div>
        </div>
        <div className="w-full p-3 rounded-lg border shadow-sm bg-white">
          <h4 className="text-lg font-bold pb-3">Recent Activities</h4>
          <div className=" h-[300px] overflow-hidden overflow-y-auto scrollbar-none">
            <Activity />
          </div>
        </div>
        <div className="w-full">
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
          <div className="flex items-center space-x-4">
            <TaskFilterDropdown
              onChange={(e) => console.log(e.target.value)}
              options={[
                { value: "in progress", label: "In Progress" },
                { value: "completed", label: "Completed" },
                { value: "pending", label: "pending" },
              ]}
              placeholder="All Status"
            />
            <TaskFilterDropdown
              onChange={(e) => console.log(e.target.value)}
              options={[
                { value: "overdue", label: "Overdue" },
                { value: "today", label: "Due Today" },
                { value: "this_week", label: "Due This Week" },
              ]}
              placeholder="All Due dates"
            />

            <SearchField onChange={(e) => console.log(e.target.value)} />
          </div>
        </div>
        <div className="flex justify-between items-start gap-4">
          <Tasks status="To Do" />
          <Tasks status="In Progress" />
          <Tasks status="Completed" />
        </div>
      </div>
    </div>
  );
};

export default page;
