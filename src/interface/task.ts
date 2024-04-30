export interface Task {
  id: string;
  title: string;
  description: string;
  deadline: Date;
  assignedMembers: string[];
  completed: boolean;
}
