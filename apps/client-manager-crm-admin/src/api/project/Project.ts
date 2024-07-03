import { Client } from "../client/Client";

export type Project = {
  client?: Client | null;
  createdAt: Date;
  description: string | null;
  id: string;
  status?: "Option1" | null;
  title: string | null;
  updatedAt: Date;
};
