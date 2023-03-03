import { FirstColumn } from '../types';

export function isFirstColumnCorrect(letter?: string): letter is FirstColumn {
  if (!letter) {
    return false;
  }

  return ['A', 'B', 'C'].includes(letter);
}
