import { getElvesCaloriesList } from './utils/getElvesCaloriesList';
import { getLineReader } from '../common/getLineReader';
import { sortNum } from './utils/sortNum';

export async function getMaxElvesCalories(filePath: string) {
  const caloriesList = getElvesCaloriesList(getLineReader(filePath));

  let max = 0;
  for await (const calories of caloriesList) {
    if (calories > max) {
      max = calories;
    }
  }

  return max;
}

export async function getTopTreeElvesCaloriesList(filePath: string) {
  const caloriesList = getElvesCaloriesList(getLineReader(filePath));

  const topTreeElvesList = [];
  for await (const calories of caloriesList) {
    if (topTreeElvesList.length < 3) {
      topTreeElvesList.push(calories);

      if (topTreeElvesList.length === 3) {
        topTreeElvesList.sort(sortNum);
      }

      continue;
    }

    if (calories > topTreeElvesList[0]) {
      topTreeElvesList[0] = calories;
      topTreeElvesList.sort(sortNum);
    }
  }

  return topTreeElvesList.reduce((sum, calories) => sum + calories, 0);
}
