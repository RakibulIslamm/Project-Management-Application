export interface Task {
  id: string;
  projectId: string;
  title: string;
  description: string;
  deadline: number;
  assignedMembers: string[];
  status: string;
}
