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
