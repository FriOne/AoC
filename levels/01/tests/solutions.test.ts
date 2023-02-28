import { join } from 'path';

import {
  getMaxElvesCalories as getMaxElvesCalories01,
  getTopTreeElvesCaloriesList as getTopTreeElvesCaloriesList01,
} from '../solution.01';
import {
  getMaxElvesCalories as getMaxElvesCalories02,
  getTopTreeElvesCaloriesList as getTopTreeElvesCaloriesList02,
} from '../solution.02';

describe('Calories counting task: 01', () => {
  test('Count is correct with the first solution', async () => {
    expect(await getMaxElvesCalories01(join(__dirname, 'input.txt'))).toBe(70764);
  });

  test('Top tree count is correct with the first solution', async () => {
    expect(await getTopTreeElvesCaloriesList01(join(__dirname, 'input.txt'))).toBe(203905);
  });

  test('Count is correct with the second solution', async () => {
    expect(await getMaxElvesCalories02(join(__dirname, 'input.txt'))).toBe(70764);
  });

  test('Top tree count is correct with the second solution', async () => {
    expect(await getTopTreeElvesCaloriesList02(join(__dirname, 'input.txt'))).toBe(203905);
  });
});
