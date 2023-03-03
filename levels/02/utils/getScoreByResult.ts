import { RPSPair } from '../types';
import { abcMap, resultScore, winCombinations } from '../constants';

export function getScoreByResult(pair: RPSPair) {
  return resultScore[pair[1]] + abcMap[getStepToAchieveResult(pair)];
}

function getStepToAchieveResult(pair: RPSPair) {
  const [opponentChoice, result] = pair;

  if (result === 'Y') {
    return opponentChoice;
  }

  if (result === 'Z') {
    return winCombinations[opponentChoice];
  }

  return winCombinations[winCombinations[opponentChoice]];
}
