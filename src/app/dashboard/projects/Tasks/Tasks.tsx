"use client";
import React, { useEffect, useMemo, useState } from "react";
import TaskCard from "./Partial/TaskCard";
import useTaskStore from "@/store/TaskStore/taskStore";
import { Droppable } from "@hello-pangea/dnd";
import { useParams } from "next/navigation";
import { tasks } from "@/mockData/tasks";

const Tasks = ({
  status,
}: {
  status: "Pending" | "In Progress" | "Completed";
}) => {
  const allTasks = useTaskStore((state) => state.getFilteredTasks());
  const setTasks = useTaskStore((state) => state.setTasks);
  const [enabled, setEnabled] = useState(false);
  const { id } = useParams();

  useMemo(() => {
    const allTasks = tasks.filter((task) => task.projectId == id);
    setTasks(allTasks);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));
    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  // console.log(tasks);

  const droppableId = status.toLowerCase();

  return (
    <div className="w-full">
      <p className="text-lg font-semibold">{status}</p>
      <Droppable droppableId={droppableId}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="p-5 bg-white rounded-lg space-y-5"
          >
            {allTasks.map(
              (task, index) =>
                task.status.toLowerCase() === status.toLowerCase() && (
                  <TaskCard key={task.id} task={task} index={index} />
                )
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Tasks;
