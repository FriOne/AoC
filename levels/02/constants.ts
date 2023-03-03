import { FirstColumn, SecondColumn } from './types';

export const abcMap: Record<FirstColumn, number> = {
  A: 1, // Rock
  B: 2, // Paper
  C: 3, // Scissors
};

export const xyzToAbcMap: Record<SecondColumn, FirstColumn> = {
  X: 'A',
  Y: 'B',
  Z: 'C',
};

export const resultScore = {
  X: 0, // Loose
  Y: 3, // In draw
  Z: 6, // Win
};

export const winCombinations: Record<FirstColumn, FirstColumn> = {
  A: 'B',
  B: 'C',
  C: 'A',
};
