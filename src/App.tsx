import React from "react";
import Game from "./components/Game";
import Text from "./components/Text";
import { Difficulty } from "./utils/Difficulty";
import Title from "./components/Title";
import Soul from "./components/Soul/Soul";

function App(): React.ReactElement {
  const [difficulty, setDifficulty] = React.useState<Difficulty | null>(null);

  const resetDifficulty = () => setDifficulty(null);

  return difficulty ? (
    <Game difficulty={difficulty} resetDifficulty={resetDifficulty} />
  ) : (
    <div className="flex flex-col gap-8 justify-center items-center min-h-screen bg-black">
      <Title titleText="Difficulty" className="text-3xl sm:text-5xl" />
      <div className="flex flex-col gap-2">
        <button
          type="button"
          aria-label="Easy"
          className="flex gap-4 justify-center items-center bg-transparent border-none group"
          onClick={() => setDifficulty(Difficulty.EASY)}
        >
          <Soul className="hidden h-4 sm:h-6 group-hover:block" />
          <Text
            text="Easy"
            className="text-2xl sm:text-4xl group-hover:text-utYellow"
          />
        </button>
        <button
          type="button"
          aria-label="Normal"
          className="flex gap-4 justify-center items-center bg-transparent border-none group"
          onClick={() => setDifficulty(Difficulty.NORMAL)}
        >
          <Soul className="hidden h-4 sm:h-6 group-hover:block" />
          <Text
            text="Normal"
            className="text-2xl sm:text-4xl group-hover:text-utYellow"
          />
        </button>
        <button
          type="button"
          aria-label="Hard"
          className="flex gap-4 justify-center items-center bg-transparent border-none group"
          onClick={() => setDifficulty(Difficulty.HARD)}
        >
          <Soul className="hidden h-4 sm:h-6 group-hover:block" />
          <Text
            text="Hard"
            className="text-2xl sm:text-4xl group-hover:text-utYellow"
          />
        </button>
      </div>
    </div>
  );
}

export default App;
