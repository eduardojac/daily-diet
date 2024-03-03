import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEALS_COLLECTION, MealProps } from "@storage/storage.config";
import { getAllMeals } from "./getAllMeals";

export const addNewMeal = async (meal: MealProps) => {
  try {
    const storedMeals = await getAllMeals();

    const mealAlreadyExists = storedMeals.includes(meal);

    if (mealAlreadyExists) {
      throw new Error("Já existe uma refeição com esse nome.");
    }

    await AsyncStorage.setItem(
      MEALS_COLLECTION,
      JSON.stringify([...storedMeals, meal])
    );
  } catch (error) {
    throw error;
  }
};
