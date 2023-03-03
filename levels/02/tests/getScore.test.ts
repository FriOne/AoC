import { getScore } from '../utils/getScore';

describe('get rps score', () => {
  test('score calculated correctly for win combination', async () => {
    expect(getScore(['C', 'X'])).toEqual(6 + 1);
    expect(getScore(['A', 'Y'])).toEqual(6 + 2);
    expect(getScore(['B', 'Z'])).toEqual(6 + 3);
  });

  test('score calculated correctly for loose combination', async () => {
    expect(getScore(['B', 'X'])).toEqual(1);
    expect(getScore(['C', 'Y'])).toEqual(2);
    expect(getScore(['A', 'Z'])).toEqual(3);
  });

  test('score calculated correctly for pat combination', async () => {
    expect(getScore(['A', 'X'])).toEqual(3 + 1);
    expect(getScore(['B', 'Y'])).toEqual(3 + 2);
    expect(getScore(['C', 'Z'])).toEqual(3 + 3);
  });
});
