import AsyncStorage from '@react-native-async-storage/async-storage';

import { MEALS_COLLECTION, MealProps } from '@storage/storage.config';

export async function getMealStats() {
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLLECTION);

    const meals: MealProps[] = storage ? JSON.parse(storage) : [];

    const outDietMeals = meals.filter(meal => !meal.isInDiet);

    const mealStats = meals.length > 0 ? (100 - (outDietMeals.length / meals.length) * 100).toFixed(2).toString() : 0;

    return mealStats + '%';
  } catch (error) {
    throw error;
  }
}