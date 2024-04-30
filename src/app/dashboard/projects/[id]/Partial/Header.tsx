import { ClockCircleOutlined } from "@ant-design/icons";
import { Progress } from "antd";
import React from "react";

const Header = () => {
  return (
    <div className="">
      <h1 className="text-3xl font-bold w-8/12 uppercase">
        Workload Company Profile Websites Development
      </h1>
      <p>Created by Rakibul Islam on April 31, 2024</p>
      <div className="flex justify-between items-start gap-5 my-5">
        <div className="w-full flex items-start gap-8">
          <div className="flex items-start gap-2">
            <ClockCircleOutlined className="text-lg text-blue-600" />
            <div>
              <h3 className="font-semibold text-lg p-0 m-0 leading-4 mb-3">
                Project Create
              </h3>
              <p>Monday, October 31th, 2020</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <ClockCircleOutlined className="text-lg text-blue-600" />
            <div>
              <h3 className="font-semibold text-lg p-0 m-0 leading-4 mb-3">
                Due date
              </h3>
              <p>Monday, October 31th, 2020</p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <h3 className="font-semibold text-lg p-0 m-0 leading-4 mb-3">
            Total Progress 60%
          </h3>
          <Progress
            percent={50}
            size={[400, 15]}
            showInfo={false}
            status="active"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
