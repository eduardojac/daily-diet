const MEALS_COLLECTION = "meals";

type MealGroupProps = {
  date: string;
  meals: MealProps[];
};

type MealProps = {
  name: string;
  description: string;
  date: string;
  time: string;
  key: string;
  isInDiet: boolean;
};

export { MEALS_COLLECTION, MealProps, MealGroupProps };
