"use client";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import Tasks from "./Tasks";
import useTaskStore from "@/store/TaskStore/taskStore";
import { Task } from "@/interface/task";
import { addItemAtIndex } from "@/app/utils/addItemAtIndex";

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

    let pendingTasks = allTasks.filter(
      (task) => task.status.toLowerCase() === "pending"
    );
    let InProgressTasks = allTasks.filter(
      (task) => task.status.toLowerCase() === "in progress"
    );
    let CompletedTasks = allTasks.filter(
      (task) => task.status.toLowerCase() === "completed"
    );
    const draggedTask = allTasks.find((task) => task.id === draggableId);

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
