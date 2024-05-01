"use client";
import useTaskStore from "@/store/TaskStore/taskStore";
import { DownOutlined } from "@ant-design/icons";
import { useParams } from "next/navigation";
import { ChangeEvent } from "react";

interface Option {
  value: string;
  label: string;
}

interface TaskFilterDropdownProps {
  options: Option[];
  placeholder: string;
  filterFor: string;
}

const TaskFilterDropdown = ({
  options,
  placeholder,
  filterFor,
}: TaskFilterDropdownProps) => {
  // const [filterText, setFilterText] = useState<string>('');
  const { id } = useParams();
  const filterByStatus = useTaskStore((state) => state.filterTaskByStatus);
  const filterByDue = useTaskStore((state) => state.filterTaskByDue);

  const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (filterFor == "status") {
      filterByStatus(e.target.value.toLowerCase(), id as string);
      // console.log(e.target.value);
    }
    if (filterFor == "due") {
      filterByDue(e.target.value, id as string);
    }
  };

  return (
    <div className="relative">
      <select
        onChange={handleFilterChange}
        className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value={placeholder}>{placeholder}</option>
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
