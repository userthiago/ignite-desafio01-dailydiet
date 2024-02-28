import { AccomplishmentTypes } from "@utils/types/accomplishment-types";

export type MealStorageDTO = {
  id: string;
  time: string;
  title: string;
  status: AccomplishmentTypes;
};
