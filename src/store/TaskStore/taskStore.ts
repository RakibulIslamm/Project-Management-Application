import { create } from "zustand";
import { Task } from "@/interface/task";
import { tasks } from "@/mockData/tasks";

type State = {
  tasks: Task[];
};

type Action = {
  addTask: (projectId: string, task: Task) => void;
  editTask: (projectId: string, taskId: string, editedTask: Task) => void;
  changeTaskStatus: (projectId: string, taskId: string, status: string) => void;
  assignMemberToTask: (
    projectId: string,
    taskId: string,
    member: string
  ) => void;
};

const useTaskStore = create<State & Action>((set) => ({
  tasks: [...tasks],
  addTask: (projectId, task) => set((state) => ({})),
  editTask: (projectId, taskId, editedTask) => set((state) => ({})),
  changeTaskStatus: (projectId, taskId, status) => set((state) => ({})),
  assignMemberToTask: (projectId, taskId, member) => set((state) => ({})),
}));

export default useTaskStore;
