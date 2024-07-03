import { ProjectCreateNestedManyWithoutClientsInput } from "./ProjectCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  email?: string | null;
  name?: string | null;
  phone?: string | null;
  projects?: ProjectCreateNestedManyWithoutClientsInput;
};
