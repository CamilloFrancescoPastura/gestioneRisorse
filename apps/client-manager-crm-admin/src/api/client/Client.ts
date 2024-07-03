import { Project } from "../project/Project";

export type Client = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phone: string | null;
  projects?: Array<Project>;
  updatedAt: Date;
};
