import { User } from "./user";

export interface Project {
  id: string;
  name: string;
  description: string;
  teamMembers: User[];
  recentActivities: string[];
  img: string;
  startDate: number;
  deadline: number;
  createdAt: number;
  updatedAt: number;
}
