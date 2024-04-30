import React from "react";
import Task from "./Task";

const Tasks = ({ status }: { status: string }) => {
  return (
    <div className="w-full">
      <p className="text-lg font-semibold">{status}</p>
      <div className="p-5 bg-white rounded-lg">
        <Task />
      </div>
    </div>
  );
};

export default Tasks;
