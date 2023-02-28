import { Interface } from 'readline/promises';

import { getLineReader } from '../common/getLineReader';
import { sortNum } from './utils/sortNum';

export async function getMaxElvesCalories(filePath: string) {
  const caloriesList = await getElvesCaloriesList(getLineReader(filePath));

  return Math.max(...caloriesList);
}

export async function getTopTreeElvesCaloriesList(filePath: string) {
  const caloriesList = await getElvesCaloriesList(getLineReader(filePath));

  return caloriesList.sort(sortNum).slice(-3).reduce((sum, calories) => sum + calories);
}

async function getElvesCaloriesList(lineReader: Interface) {
  const caloriesList = [];
  let elfCalories = 0;

  for await (const line of lineReader) {
    if (line !== '') {
      elfCalories += Number(line);
    } else {
      caloriesList.push(elfCalories);
      elfCalories = 0;
    }
  }

  caloriesList.push(elfCalories);

  return caloriesList;
}
