"use client";
import React, { useMemo } from "react";
import TaskCard from "./Partial/TaskCard";
import useTaskStore from "@/store/TaskStore/taskStore";
import { useParams } from "next/navigation";
import { tasks } from "@/mockData/tasks";

const Tasks = ({ status }: { status: string }) => {
  const allTasks = useTaskStore((state) => state.getFilteredTasks());
  const setTask = useTaskStore((state) => state.setTasks);
  const { id } = useParams();

  // console.log(tasks);

  useMemo(() => {
    const allTasks = tasks.filter((task) => task.projectId == id);
    setTask(allTasks);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="w-full">
      <p className="text-lg font-semibold">{status}</p>
      <div className="p-5 bg-white rounded-lg space-y-5">
        {allTasks.map(
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
