import { createContext, useMemo, useState } from "react";
import { Alert } from "react-native";

import { MealDietStorageDTO } from "@storage/meal/meal-diet-storage-dto";
import { mealGetAllAndGroupByDate } from "@storage/meal/meal-get-all-and-group-by-date";
import { MealGroupStorageDTO } from "@storage/meal/meal-group-storage-dto";
import { generateDietStatistics } from "@utils/diet-utils";

export interface DietContextData {
  mealList: MealGroupStorageDTO[];
  dietStatistics: MealDietStorageDTO;
  isLoading: boolean;
  fetchMealList: () => void;
}

export const DietContext = createContext<DietContextData>(
  {} as DietContextData
);

interface DietContextProvider {
  children: React.ReactNode;
}

export function DietContextProvider({
  children,
  ...props
}: DietContextProvider) {
  const [isLoading, setLoading] = useState(false);
  const [dietStatistics, setDietStatistic] = useState<MealDietStorageDTO>({
    bestSequenceOfMeals: "0",
    generalPercentage: "0%",
    totalMealOutsideDiet: "0",
    totalMealRegistered: "0",
    totalMealWithinDiet: "0",
    accomplishmentStatus: "NEUTRAL",
  });
  const [mealList, setMealList] = useState<MealGroupStorageDTO[]>([]);

  const fetchMealList = async () => {
    try {
      setLoading(true);
      const data = await mealGetAllAndGroupByDate();
      const dataDietStatistics = generateDietStatistics(data);

      setMealList(data);
      setDietStatistic(dataDietStatistics);
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Refeições",
        "Não foi possível carregar as refeições cadastradas."
      );
    } finally {
      setLoading(false);
    }
  };

  const memorizeReturn = useMemo(
    () => ({
      mealList,
      dietStatistics,
      isLoading,
      fetchMealList,
    }),
    [mealList, dietStatistics, isLoading]
  );

  return (
    <DietContext.Provider value={memorizeReturn} {...props}>
      {children}
    </DietContext.Provider>
  );
}
