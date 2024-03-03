import { MealProps } from "@storage/storage.config";

import { addNewMeal } from "./addMeal";
import { removeMeal } from "./removeMeal";

export const editMeal = async (meal: MealProps, mealEdited: MealProps) => {
  try {
    await removeMeal(meal);
    await addNewMeal(mealEdited);
  } catch (error) {
    throw error;
  }
};
