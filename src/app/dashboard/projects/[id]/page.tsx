import { ClockCircleOutlined } from "@ant-design/icons";
import { Divider, Progress } from "antd";
import Image from "next/image";
import React from "react";
import Activity from "./Partial/Activity";
import Member from "./Partial/Member";
import Header from "./Partial/Header";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const page = () => {
  return (
    <div className={`p-6 text-gray-600 ${poppins.className}`}>
      <Header />
      <Divider />
      <div>
        <h4 className="text-lg font-bold py-3 uppercase">
          Project Description
        </h4>
        <p className=" text-base ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <Divider />
      <div className="flex items-start gap-5 w-full">
        <div className="w-full p-3 rounded-lg border shadow-sm">
          <h4 className="text-lg font-bold pb-3">Team members</h4>
          <div className=" h-[300px] overflow-hidden overflow-y-auto scrollbar-none">
            <Member />
          </div>
        </div>
        <div className="w-full p-3 rounded-lg border shadow-sm">
          <h4 className="text-lg font-bold pb-3">Recent Activities</h4>
          <div className=" h-[300px] overflow-hidden overflow-y-auto scrollbar-none">
            <Activity />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h1 className="text-3xl font-bold">Task Management</h1>
        <div className="flex justify-between items-start">
          <div>To do</div>
          <div>In Progress</div>
          <div>Done</div>
        </div>
      </div>
    </div>
  );
};

export default page;
