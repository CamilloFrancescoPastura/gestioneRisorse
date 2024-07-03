import { SortOrder } from "../../util/SortOrder";

export type ProjectOrderByInput = {
  clientId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
