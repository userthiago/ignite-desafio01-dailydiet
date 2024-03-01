import AsyncStorage from "@react-native-async-storage/async-storage";

import { mealGetAll } from "./meal-get-all";
import { MealStorageDTO } from "./meal-storage-dto";

import { MEAL_COLLECTION } from "@storage/storage-config";

export async function mealRemoveById(id: string) {
  try {
    const storedMeal = await mealGetAll();
    const newStorageMeal = storedMeal.filter((meal) => meal.id !== id);

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(newStorageMeal));
  } catch (error) {
    throw error;
  }
}
