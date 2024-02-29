import { AccomplishmentTypes } from "@utils/types/accomplishment-types";

export type MealDietStorageDTO = {
  generalPercentage: string;
  bestSequenceOfMeals: string;
  totalMealRegistered: string;
  totalMealWithinDiet: string;
  totalMealOutsideDiet: string;
  accomplishmentStatus: AccomplishmentTypes;
};
