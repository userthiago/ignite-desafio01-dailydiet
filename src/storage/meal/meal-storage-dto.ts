import { AccomplishmentTypes } from "@utils/types/accomplishment-types";

export type MealStorageDTO = {
  id: string;
  date: string;
  time: string;
  title: string;
  status: AccomplishmentTypes;
};
