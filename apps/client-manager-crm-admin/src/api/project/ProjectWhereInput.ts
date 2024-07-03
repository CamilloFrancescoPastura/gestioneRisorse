import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ProjectWhereInput = {
  client?: ClientWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  status?: "Option1";
  title?: StringNullableFilter;
};
