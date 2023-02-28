import { join } from 'path';

import { getElvesCaloriesList } from '../utils/getElvesCaloriesList';
import { getLineReader } from '../../common/getLineReader';

describe('Calories list getter', () => {
  test('List contains correct groups of calories', async () => {
    const caloriesListGenerator = await getElvesCaloriesList(
      getLineReader(join(__dirname, 'list-input.txt'))
    );

    expect(await caloriesListGenerator.next()).toStrictEqual({ value: 14245, done: false });
    expect(await caloriesListGenerator.next()).toStrictEqual({ value: 12413, done: false });
    expect(await caloriesListGenerator.next()).toStrictEqual({ value: 4015, done: true });
  });
});
