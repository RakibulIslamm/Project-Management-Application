"use client";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import Tasks from "./Tasks";
import useTaskStore from "@/store/TaskStore/taskStore";
import { Task } from "@/interface/task";

const TaskDragDrop = () => {
  const { changeTaskStatus, setTasks } = useTaskStore();
  const allTasks = useTaskStore((state) => state.getFilteredTasks());
  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    // If the destination is null or the draggable is dropped back to its original position
    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }

    const pendingTasks = allTasks.filter(
      (task) => task.status.toLowerCase() === "pending"
    );
    const InProgressTasks = allTasks.filter(
      (task) => task.status.toLowerCase() === "in progress"
    );
    const CompletedTasks = allTasks.filter(
      (task) => task.status.toLowerCase() === "completed"
    );

    // Find the task being dragged
    const draggedTask = allTasks.find((task) => task.id === draggableId);

    console.log(destination.index);

    changeTaskStatus(draggedTask?.id as string, destination.droppableId);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4">
        <Tasks status="Pending" />
        <Tasks status="In Progress" />
        <Tasks status="Completed" />
      </div>
    </DragDropContext>
  );
};

export default TaskDragDrop;
