"use client";
import useTaskStore from "@/store/TaskStore/taskStore";
import { SearchOutlined } from "@ant-design/icons";

const SearchField = () => {
  const searchTask = useTaskStore((state) => state.searchTask);
  return (
    <div className="relative xs:w-full">
      <input
        type="text"
        onChange={(e) => searchTask(e.target.value)}
        placeholder="Search tasks..."
        className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      />
      <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <SearchOutlined />
      </div>
    </div>
  );
};

export default SearchField;
