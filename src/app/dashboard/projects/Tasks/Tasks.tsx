"use client";
import React from "react";
import TaskCard from "./Partial/TaskCard";
import useTaskStore from "@/store/TaskStore/taskStore";

const Tasks = ({ status }: { status: string }) => {
  const tasks = useTaskStore((state) => state.tasks);

  return (
    <div className="w-full">
      <p className="text-lg font-semibold">{status}</p>
      <div className="p-5 bg-white rounded-lg space-y-5">
        {tasks.map(
          (task, index) =>
            task.status.toLowerCase() === status.toLowerCase() && (
              <TaskCard key={task.id} task={task} />
            )
        )}
      </div>
    </div>
  );
};

export default Tasks;
