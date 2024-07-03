import { Referent as TReferent } from "../api/referent/Referent";

export const REFERENT_TITLE_FIELD = "name";

export const ReferentTitle = (record: TReferent): string => {
  return record.name?.toString() || String(record.id);
};
