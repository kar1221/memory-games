import React, { useMemo } from "react";
import Text from "@components/Text";
import Title from "@components/Title";
import GetGameConfiguration, { Difficulty } from "@src/utils/Difficulty";
import SpriteMap, { defaultSprites, SpriteKey } from "@src/utils/SpriteMap";
import { AnimatePresence, motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import Card from "../Card";

function RandInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

function GetRandomItems<T>(array: T[], amounts: number): T[] {
  const arrayCopy = array.slice();
  if (amounts > arrayCopy.length) return arrayCopy;

  const tmpArray: T[] = [];

  for (let x = 0; x < amounts; x += 1) {
    const index = RandInt(0, arrayCopy.length);
    tmpArray.push(arrayCopy[index]);

    arrayCopy.splice(index, 1);
  }

  return tmpArray;
}

function Game({ difficulty }: GameProps): React.ReactElement {
  const storedHighScore = localStorage.getItem("highScore") || "0";

  const winningScore = useMemo(() => Object.keys(SpriteMap).length, []);

  const [highScore, setHighScore] = React.useState<number>(
    parseInt(storedHighScore, 10)
  );
  const [score, setScore] = React.useState<number>(0);
  const [isGameOver, setIsGameOver] = React.useState<boolean>(false);

  const [initialCards, setInitialCards] =
    React.useState<SpriteKey[]>(defaultSprites);
  const [clickedCards, setClickedCards] = React.useState<SpriteKey[]>([]);

  React.useEffect(() => {
    localStorage.setItem("highScore", highScore.toString());
  }, [highScore]);

  React.useEffect(() => {
    if (score > highScore) setHighScore(score);
  }, [score, highScore]);

  React.useEffect(() => {
    if (score >= winningScore) setIsGameOver(true);
  }, [score, winningScore]);

  function handleCardClick(sprite: SpriteKey) {
    return () => {
      if (clickedCards.includes(sprite)) {
        setIsGameOver(true);
        return;
      }

      setInitialCards(initialCards.filter((card) => card !== sprite));
      setClickedCards([...clickedCards, sprite]);
      setScore(score + 1);
    };
  }

  const gameConfig = GetGameConfiguration(difficulty, score);
  const duplicates = GetRandomItems(
    clickedCards,
    gameConfig.duplicateCardsAmount
  );

  const availableCards = initialCards.slice();
  let reservedSprites: SpriteKey[] = [];

  // Fill reservedSprites with initial cards until the required amount is reached
  while (
    reservedSprites.length < gameConfig.cardsAmounts - duplicates.length &&
    availableCards.length > 0
  ) {
    const index = RandInt(0, availableCards.length);
    reservedSprites.push(availableCards[index]);
    availableCards.splice(index, 1);
  }

  // Add duplicates to reservedSprites
  reservedSprites = reservedSprites.concat(duplicates);

  // If there are still not enough cards, add more from clickedCards
  while (reservedSprites.length < gameConfig.cardsAmounts) {
    const moreDuplicates = GetRandomItems(clickedCards, 1);
    reservedSprites = reservedSprites.concat(moreDuplicates);
  }

  // Perform a full reshuffle.
  const shuffledCards = GetRandomItems(reservedSprites, reservedSprites.length);

  const cards = shuffledCards.map((card) => ({
    spriteName: card,
    imgUrl: SpriteMap[card],
  }));

  return (
    <div className="flex flex-col gap-4 p-4 min-h-screen bg-black">
      <header className="flex flex-col gap-4 justify-around items-center sm:flex-row">
        <Title
          titleText="Memory Game"
          className="text-3xl text-center sm:text-4xl"
        />
        <div className="flex gap-8">
          <div className="flex flex-col items-center">
            <Text text="Score:" className="text-lg" />
            <Text text={score.toString()} className="text-3xl" />
          </div>
          <div className="flex flex-col items-center">
            <Text text="Highscore:" className="text-lg text-utYellow" />
            <Text
              text={highScore.toString()}
              className="text-3xl text-utYellow"
            />
          </div>
        </div>
      </header>
      <AnimatePresence>
        <motion.main className="flex flex-wrap flex-1 gap-4 justify-center items-center">
          <AnimatePresence mode="wait">
            {cards.map((card) => (
              <Card
                key={uuidv4()}
                spriteName={card.spriteName}
                imgSrc={card.imgUrl}
                onClick={handleCardClick(card.spriteName)}
              />
            ))}
          </AnimatePresence>
        </motion.main>
      </AnimatePresence>
    </div>
  );
}

interface GameProps {
  difficulty: Difficulty;
  resetDifficulty: () => void;
}

export default Game;
