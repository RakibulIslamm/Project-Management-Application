import { create } from "zustand";
import { Task } from "@/interface/task";

type State = {
  tasks: Task[];
  filteredByStatus: Task[];
  filteredByDue: Task[];
  filteredBySearch: Task[];
};

type Action = {
  setTasks: (tasks: Task[]) => void;
  addTask: (task: Task) => void;
  editTask: (taskId: string, editedTask: Task) => void;
  changeTaskStatus: (taskId: string, status: string) => void;
  assignMemberToTask: (taskId: string, member: string) => void;
  filterTaskByStatus: (status: string, projectId: string) => void;
  filterTaskByDue: (deadline: string, projectId: string) => void;
  searchTask: (searchText: string) => void;
  getFilteredTasks: () => Task[];
};

const useTaskStore = create<State & Action>((set, get) => ({
  tasks: [],
  filteredByStatus: [],
  filteredByDue: [],
  filteredBySearch: [],
  setTasks: (tasks) =>
    set(() => ({
      tasks: tasks,
      filteredByStatus: tasks,
      filteredByDue: tasks,
      filteredBySearch: tasks,
    })),
  addTask: (task) =>
    set((state) => ({
      tasks: [task, ...state.tasks],
      filteredByStatus: [task, ...state.filteredByStatus],
      filteredByDue: [task, ...state.filteredByDue],
      filteredBySearch: [task, ...state.filteredBySearch],
    })),
  editTask: (taskId, editedTask) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, ...editedTask } : task
      ),
    })),
  changeTaskStatus: (taskId, status) =>
    set((state) => ({
      tasks: state.tasks.map((t) => {
        if (t.id == taskId) {
          t.status = status;
        }
        return t;
      }),
      filteredTask: [...state.tasks],
    })),
  assignMemberToTask: (taskId, member) => set((state) => ({})),
  filterTaskByStatus: (status, projectId) =>
    set((state) => ({
      filteredByStatus: state.tasks.filter(
        (task) =>
          (status.toLowerCase() == "all status" ||
            task.status.toLowerCase() == status.toLowerCase()) &&
          task.projectId === projectId
      ),
    })),
  filterTaskByDue: (deadline, projectId) =>
    set((state) => ({
      filteredByDue: state.tasks.filter((task) => {
        const today = new Date();
        const taskDeadline = new Date(task.deadline);
        switch (deadline) {
          case "overdue":
            return taskDeadline < today && task.projectId === projectId;
          case "today":
            return (
              taskDeadline.toDateString() === today.toDateString() &&
              task.projectId === projectId
            );
          case "this_week":
            const endOfWeek = new Date(today);
            endOfWeek.setDate(endOfWeek.getDate() + 7);
            return (
              taskDeadline >= today &&
              taskDeadline <= endOfWeek &&
              task.projectId === projectId
            );
          default:
            return task.projectId === projectId;
        }
      }),
    })),
  searchTask: (searchText) =>
    set((state) => ({
      filteredBySearch: state.tasks.filter(
        (task) =>
          task.title.toLowerCase().includes(searchText.toLowerCase()) ||
          task.description.toLowerCase().includes(searchText.toLowerCase())
      ),
    })),
  getFilteredTasks: () => {
    const state = get();
    console.log(state.tasks);
    const filteredTasks = state.tasks.filter(
      (task) =>
        state.filteredByStatus.some(
          (filteredTask) => filteredTask.id === task.id
        ) &&
        state.filteredByDue.some(
          (filteredTask) => filteredTask.id === task.id
        ) &&
        state.filteredBySearch.some(
          (filteredTask) => filteredTask.id === task.id
        )
    );
    return filteredTasks;
  },
}));

export default useTaskStore;
