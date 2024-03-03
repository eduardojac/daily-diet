import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEALS_COLLECTION, MealProps } from "@storage/storage.config";

import { getAllMeals } from "./getAllMeals";

export const removeMeal = async (mealDeleted: MealProps) => {
  try {
    const storedMeals = await getAllMeals();

    const meals = storedMeals.filter((meal) => meal.key !== mealDeleted.key);

    await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(meals));
  } catch (error) {
    throw error;
  }
};
