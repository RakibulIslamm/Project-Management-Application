import { Task } from "@/interface/task";
import { create } from "zustand";
type State = {
  modalOpen: boolean;
  mode: string;
  data: Task | null;
};

type Action = {
  toggleModalOpen: (mode: string, data?: Task | null) => void;
};

const useCommonStore = create<State & Action>((set) => ({
  modalOpen: false,
  mode: "",
  data: null,
  toggleModalOpen: (mode, data = null) =>
    set((state) => ({
      mode: mode,
      modalOpen: !state.modalOpen,
      data: data,
    })),
}));

export default useCommonStore;
