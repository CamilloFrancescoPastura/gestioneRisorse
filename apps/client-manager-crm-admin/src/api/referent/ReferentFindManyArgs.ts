import { ReferentWhereInput } from "./ReferentWhereInput";
import { ReferentOrderByInput } from "./ReferentOrderByInput";

export type ReferentFindManyArgs = {
  where?: ReferentWhereInput;
  orderBy?: Array<ReferentOrderByInput>;
  skip?: number;
  take?: number;
};
