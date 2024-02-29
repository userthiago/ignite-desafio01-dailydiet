import uuid from "react-native-uuid";
import { AppError } from "@utils/app-error";

import { mealGetAll } from "./meal-get-all";
import { MealStorageDTO } from "./meal-storage-dto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storage-config";
import moment from "moment";
import { dateFormat, dateInputFormat } from "src/config/data-config";

export async function mealCreate(newMeal: Omit<MealStorageDTO, "id">) {
  try {
    const storedMeals = await mealGetAll();
    const mealAlreadyExists = storedMeals.find(
      (meal) => meal.date === newMeal.date && meal.time === newMeal.time
    );

    if (mealAlreadyExists) {
      throw new AppError(
        "Essa refeição já foi cadastrada com o mesma data e horário."
      );
    }

    const mealData: MealStorageDTO = {
      ...newMeal,
      id: uuid.v4() as string,
      date: moment(newMeal.date, dateInputFormat).format(dateFormat),
    };
    const storage = JSON.stringify([...storedMeals, mealData]);

    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
