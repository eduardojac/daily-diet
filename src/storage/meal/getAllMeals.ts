import AsyncStorage from '@react-native-async-storage/async-storage';

import { MEALS_COLLECTION, MealProps } from '@storage/storage.config';

export async function getAllMeals() {
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLLECTION);

    const meals: MealProps[] = storage ? JSON.parse(storage) : [];

    return meals;
  } catch (error) {
    throw error;
  }
}