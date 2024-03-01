import { AppError } from "@utils/app-error";
import { mealGetAll } from "./meal-get-all";

export async function mealGetById(id: string) {
  try {
    const storedMeals = await mealGetAll();
    const mealData = storedMeals.find((meal) => meal.id === id);

    if (!mealData) {
      throw new AppError(
        "Não foi possível encontrar os dados da refeição selecionada."
      );
    }

    return mealData;
  } catch (error) {
    throw error;
  }
}
