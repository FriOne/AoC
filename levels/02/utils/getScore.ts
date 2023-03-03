import { RPSPair } from '../types';
import { abcMap, xyzToAbcMap } from '../constants';

export function getScore(pair: RPSPair) {
  return getWinLooseScore(pair) + abcMap[xyzToAbcMap[pair[1]]];
}

export function getWinLooseScore(pair: RPSPair) {
  const [opponentChoice, myChoice] = pair;
  const choicesDiff = abcMap[xyzToAbcMap[myChoice]] - abcMap[opponentChoice];

  if (choicesDiff === 0) {
    return 3;
  }

  if (choicesDiff === 1 || choicesDiff === -2) {
    return 6;
  }

  return 0;
}
