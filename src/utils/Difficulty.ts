enum Difficulty {
  EASY = "Easy",
  NORMAL = "Normal",
  HARD = "Hard",
}

type GameRules = {
  maxScore: number;
  duplicates: number;
};

type ConfigDetail = {
  cardsAmounts: number;
  duplicateRules: GameRules[];
};

type GameConfigType = {
  [K in Difficulty]: ConfigDetail;
};

const gameConfig: GameConfigType = {
  [Difficulty.EASY]: {
    cardsAmounts: 4,
    duplicateRules: [
      { maxScore: 15, duplicates: 1 },
      { maxScore: Infinity, duplicates: 2 },
    ],
  },
  [Difficulty.NORMAL]: {
    cardsAmounts: 5,
    duplicateRules: [
      { maxScore: 13, duplicates: 2 },
      { maxScore: Infinity, duplicates: 3 },
    ],
  },
  [Difficulty.HARD]: {
    cardsAmounts: 6,
    duplicateRules: [
      { maxScore: 11, duplicates: 4 },
      { maxScore: Infinity, duplicates: 5 },
    ],
  },
};

function GetGameConfiguration(difficulty: Difficulty, currentScore: number) {
  const config = gameConfig[difficulty];

  if (!config) {
    throw new Error("Invalid difficulty");
  }

  const { cardsAmounts, duplicateRules } = config;

  let duplicateCardsAmount = 0;

  for (let x = 0; x < duplicateRules.length; x += 1) {
    if (currentScore < duplicateRules[x].maxScore) {
      duplicateCardsAmount = duplicateRules[x].duplicates;
      break;
    }
  }

  return {
    cardsAmounts,
    duplicateCardsAmount,
  };
}

export default GetGameConfiguration;
export { Difficulty };
