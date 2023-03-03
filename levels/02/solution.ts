import { Interface } from 'readline/promises';

import { getLineReader } from '../common/getLineReader';
import { isFirstColumnCorrect } from './utils/isFirstColumnCorrect';
import { isSecondColumnCorrect } from './utils/isSecondColumnCorrect';
import { getScore } from './utils/getScore';
import { getScoreByResult } from './utils/getScoreByResult';
import { RPSPair } from './types';

export async function calcRPSTotal(filePath: string) {
  const pairs = getRPSPairs(getLineReader(filePath));

  let score = 0;
  for await (const pair of pairs) {
    score = score + getScore(pair);
  }

  return score;
}

export async function calcRPSTotalByResultStrategy(filePath: string) {
  const pairs = getRPSPairs(getLineReader(filePath));

  let score = 0;
  for await (const pair of pairs) {
    score = score + getScoreByResult(pair);
  }

  return score;
}

async function *getRPSPairs(lineReader: Interface): AsyncGenerator<RPSPair> {
  for await (const line of lineReader) {
    const [firstColumn, secondColumn] = line.split(' ');

    if (isFirstColumnCorrect(firstColumn) && isSecondColumnCorrect(secondColumn)) {
      yield [firstColumn, secondColumn];
    } else {
      throw new Error('Wrong line format');
    }
  }
}
