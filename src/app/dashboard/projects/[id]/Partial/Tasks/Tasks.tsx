import React from "react";
import TaskCard from "./TaskCard";

const Tasks = ({ status }: { status: string }) => {
  return (
    <div className="w-full">
      <p className="text-lg font-semibold">{status}</p>
      <div className="p-5 bg-white rounded-lg">
        <TaskCard />
      </div>
    </div>
  );
};

export default Tasks;
