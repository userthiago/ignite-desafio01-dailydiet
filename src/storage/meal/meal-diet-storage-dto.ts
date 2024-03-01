import { AccomplishmentTypes } from "@utils/types/accomplishment-types";

export type MealDietStorageDTO = {
  generalPercentage: number;
  bestSequenceOfMeals: number;
  totalMealRegistered: number;
  totalMealWithinDiet: number;
  totalMealOutsideDiet: number;
  accomplishmentStatus: AccomplishmentTypes;
};
