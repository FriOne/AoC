import { getScoreByResult } from '../utils/getScoreByResult';

describe('get rps score by result', () => {
  test('score calculated correctly for win combination', async () => {
    expect(getScoreByResult(['A', 'Z'])).toEqual(6 + 2);
    expect(getScoreByResult(['B', 'Z'])).toEqual(6 + 3);
    expect(getScoreByResult(['C', 'Z'])).toEqual(6 + 1);
  });

  test('score calculated correctly for loose combination', async () => {
    expect(getScoreByResult(['A', 'X'])).toEqual(3);
    expect(getScoreByResult(['B', 'X'])).toEqual(1);
    expect(getScoreByResult(['C', 'X'])).toEqual(2);
  });

  test('score calculated correctly for pat combination', async () => {
    expect(getScoreByResult(['A', 'Y'])).toEqual(3 + 1);
    expect(getScoreByResult(['B', 'Y'])).toEqual(3 + 2);
    expect(getScoreByResult(['C', 'Y'])).toEqual(3 + 3);
  });
});
