import moment from "moment";

import { mealGetAll } from "./meal-get-all";
import { MealGroupStorageDTO } from "./meal-group-storage-dto";

import { dateFormat, dateInputFormat, timeFormat } from "@config/data-config";

export async function mealGetAllAndGroupByDate() {
  try {
    const storage = await mealGetAll();
    const storedDateList = [...new Set(storage.map((meal) => meal.date))];
    const storedDataListSortedByDate = storedDateList.sort((dateA, dateB) =>
      moment(dateB, dateInputFormat).diff(moment(dateA, dateInputFormat))
    );

    const mealGroup: MealGroupStorageDTO[] = storedDataListSortedByDate.map(
      (date) => ({
        title: moment(date, dateInputFormat).format(dateFormat),
        data: storage
          .filter((meal) => meal.date === date)
          .sort((mealA, mealB) =>
            moment(mealB.time, timeFormat).diff(moment(mealA.time, timeFormat))
          ),
      })
    );

    return mealGroup;
  } catch (error) {
    throw error;
  }
}
