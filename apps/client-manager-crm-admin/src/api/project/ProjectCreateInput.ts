import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type ProjectCreateInput = {
  client?: ClientWhereUniqueInput | null;
  description?: string | null;
  status?: "Option1" | null;
  title?: string | null;
};
