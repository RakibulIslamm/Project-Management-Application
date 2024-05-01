import { Project } from "@/interface/project";
import { Task } from "@/interface/task";
import { create } from "zustand";

type State = {
  projects: Project[];
};

type Action = {
  setProjects: (projects: Project[]) => void;
  editProject: (projectId: string, project: Project) => void;
  deleteProject: (id: string) => void;
  addTask: (projectId: string, task: Task) => void;
  editTask: (projectId: string, taskId: string, editedTask: Task) => void;
  changeTaskStatus: (projectId: string, taskId: string, status: string) => void;
  assignMemberToTask: (
    projectId: string,
    taskId: string,
    member: string
  ) => void;
};

const useProjectStore = create<State & Action>((set) => ({
  projects: [],
  setProjects: (projects) => set((state) => ({})),
  editProject: (projectId, project) => set((state) => ({})),
  deleteProject: (projectId) => set((state) => ({})),
  addTask: (projectId, task) => set((state) => ({})),
  editTask: (projectId, taskId, editedTask) => set((state) => ({})),
  changeTaskStatus: (projectId, taskId, status) => set((state) => ({})),
  assignMemberToTask: (projectId, taskId, member) => set((state) => ({})),
}));

export default useProjectStore;
