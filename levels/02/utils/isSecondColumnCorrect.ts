import { SecondColumn } from '../types';

export function isSecondColumnCorrect(letter?: string): letter is SecondColumn {
  if (!letter) {
    return false;
  }

  return ['X', 'Y', 'Z'].includes(letter);
}
