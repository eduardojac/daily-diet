import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '@screens/Home';
import { MealForm } from '@screens/MealForm';
import { MealFeedback } from '@screens/MealFeedback';
import { MealDescription } from '@screens/MealDescription';
import { EditMeal } from '@screens/EditMeal';
import { MealStats } from '@screens/MealStats';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="home"
        component={Home}
      />
      <Screen
        name="form"
        component={MealForm}
      />
      <Screen
        name="stats"
        component={MealStats}
      />
      <Screen
        name="description"
        component={MealDescription}
      />
      <Screen
        name="edit"
        component={EditMeal}
      />
      <Screen
        name="feedback"
        component={MealFeedback}
      />
    </Navigator>
  );
}