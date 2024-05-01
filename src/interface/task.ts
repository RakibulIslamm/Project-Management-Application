export interface Task {
  id: string;
  title: string;
  description: string;
  deadline: number;
  assignedMembers: string[];
  status: string;
}
