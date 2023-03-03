import { join } from 'path';

import { calcRPSTotal } from '../solution';

describe('Rock, Paper, Scissors game task: 02', () => {
  test('Score calculates correctly', async () => {
    expect(await calcRPSTotal(join(__dirname, 'input.txt'))).toBe(14531);
  });
  test('Wrong formats causes error', async () => {
    try {
      await calcRPSTotal(join(__dirname, 'wrong-format.txt'))
    } catch (error) {
      expect((error as Error).message).toMatch('Wrong line format');
    }
  });
});
