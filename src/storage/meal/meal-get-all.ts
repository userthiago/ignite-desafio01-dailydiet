import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storage-config";
import { MealStorageDTO } from "./meal-storage-dto";

export async function mealGetAll() {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);
    const mealList: MealStorageDTO[] = storage ? JSON.parse(storage) : [];

    return mealList;
  } catch (error) {
    throw error;
  }
}
