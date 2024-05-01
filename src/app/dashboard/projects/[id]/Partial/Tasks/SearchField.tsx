import { SearchOutlined } from "@ant-design/icons";
import React, { ChangeEvent } from "react";

interface Props {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchField = ({ onChange }: Props) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search tasks..."
        onChange={onChange}
        className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      />
      <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <SearchOutlined />
      </div>
    </div>
  );
};

export default SearchField;
