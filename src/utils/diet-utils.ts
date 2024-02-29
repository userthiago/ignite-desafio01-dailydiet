import { MealDietStorageDTO } from "@storage/meal/meal-diet-storage-dto";
import { MealGroupStorageDTO } from "@storage/meal/meal-group-storage-dto";
import { MealStorageDTO } from "@storage/meal/meal-storage-dto";

export function getBestSequenceOfMeals(lista: MealStorageDTO[]) {
  let currentSequence = 0;
  let bestSequence = 0;

  for (let i = 0; i < lista.length; i++) {
    if (lista[i].status === "SUCCESS") {
      currentSequence++;
      bestSequence = Math.max(bestSequence, currentSequence);
    } else {
      currentSequence = 0;
    }
  }

  return bestSequence;
}

export function generateDietStatistics(data: MealGroupStorageDTO[]) {
  const mealList = data.flatMap((dayData) => dayData.data);

  const totalMealRegistered = mealList.length;
  const totalMealWithinDiet = mealList.filter(
    (meal) => meal.status === "SUCCESS"
  ).length;
  const totalMealOutsideDiet = mealList.filter(
    (meal) => meal.status === "FAILURE"
  ).length;

  const generalPercentage =
    totalMealRegistered > 0
      ? (totalMealWithinDiet * 100) / totalMealRegistered
      : 0;

  const bestSequenceOfMeals = getBestSequenceOfMeals(mealList);
  const accomplishmentStatus =
    totalMealRegistered === 0
      ? "NEUTRAL"
      : totalMealWithinDiet <= totalMealOutsideDiet
      ? "FAILURE"
      : "SUCCESS";

  const dietStatistics: MealDietStorageDTO = {
    generalPercentage: generalPercentage,
    bestSequenceOfMeals: bestSequenceOfMeals,
    totalMealRegistered: totalMealRegistered,
    totalMealWithinDiet: totalMealWithinDiet,
    totalMealOutsideDiet: totalMealOutsideDiet,
    accomplishmentStatus: accomplishmentStatus,
  };

  return dietStatistics;
}
