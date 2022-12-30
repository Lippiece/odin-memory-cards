import { useEffect, useState } from "react";

import CardType from "../@types/Card";
import shuffleArray from "../logic/shuffleArray";
import Card from "./Card";

type GameScreenProps = {
  inputCards: CardType[];
  score: number;
  setScore: (score: number) => void;
}

const GameScreen: React.FC<GameScreenProps> = ( {
  inputCards,
  score,
  setScore,
} ) => {
  const [ cards, setCards ] = useState<CardType[]>([]);

  useEffect(() => {
    setCards(shuffleArray(inputCards));
  }, [ inputCards ]);

  return (
    <div
      className="cards"
      data-testid="game-screen"
    >
      {shuffleArray(cards).map((card:CardType) =>
        (
          <Card
            card={card}
            key={card.id}
            cards={cards}
            setCards={setCards}
            onClick={() =>
              setScore(score + 1)}
          />
        ))}
    </div>
  );
};

export default GameScreen;
