import { AppError } from "@utils/app-error";
import { mealGetAll } from "./meal-get-all";
import { MealStorageDTO } from "./meal-storage-dto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storage-config";

export async function mealUpdate(updatedMeal: MealStorageDTO) {
  try {
    const storedMeal = await mealGetAll();
    const mealToUpdateIndex = storedMeal.findIndex(
      (meal) => meal.id === updatedMeal.id
    );

    if (mealToUpdateIndex < 0) {
      throw new AppError(
        "Não foi possível encontrar o cadastro dos dados da refeição."
      );
    }

    storedMeal[mealToUpdateIndex] = updatedMeal;

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(storedMeal));
  } catch (error) {
    throw error;
  }
}
