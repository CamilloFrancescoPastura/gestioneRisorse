import { ProjectUpdateManyWithoutClientsInput } from "./ProjectUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  email?: string | null;
  name?: string | null;
  phone?: string | null;
  projects?: ProjectUpdateManyWithoutClientsInput;
};
