"use client";
import { DownOutlined } from "@ant-design/icons";
import { ChangeEvent } from "react";

interface Option {
  value: string;
  label: string;
}

interface TaskFilterDropdownProps {
  options: Option[];
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const TaskFilterDropdown = ({
  options,
  placeholder,
  onChange,
}: TaskFilterDropdownProps) => {
  return (
    <div className="relative">
      <select
        onChange={onChange}
        className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <DownOutlined />
      </div>
    </div>
  );
};

export default TaskFilterDropdown;
