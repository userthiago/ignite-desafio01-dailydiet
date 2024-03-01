import { mealGetAll } from "./meal-get-all";

export async function mealGetByDate(date: string) {
  try {
    const storage = await mealGetAll();
    const mealList = storage.filter((meal) => meal.date === date);

    return mealList;
  } catch (error) {
    throw error;
  }
}
