import { Task } from "./task";

export interface Project {
  id: string;
  name: string;
  description: string;
  tasks: Task[];
  teamMembers: string[];
  recentActivities: string[];
}