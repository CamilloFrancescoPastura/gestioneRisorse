import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type ProjectUpdateInput = {
  client?: ClientWhereUniqueInput | null;
  description?: string | null;
  status?: "Option1" | null;
  title?: string | null;
};
