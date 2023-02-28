import { Interface } from 'readline/promises';

export async function *getElvesCaloriesList(lineReader: Interface) {
  let elfCalories = 0;

  for await (const line of lineReader) {
    if (line !== '') {
      elfCalories += Number(line);
    } else {
      yield elfCalories;
      elfCalories = 0;
    }
  }

  return elfCalories;
}
