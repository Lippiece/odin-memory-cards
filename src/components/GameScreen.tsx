import { useEffect, useState } from "react";

import CardType from "../@types/Card";
import shuffleArray from "../logic/shuffleArray";
import Card from "./Card";

type GameScreenProps = {
  inputCards: CardType[];
  incrementScore: () => void;
}

const GameScreen: React.FC<GameScreenProps> = ( {
  inputCards,
  incrementScore
} ) => {
  const [ cards, setCards ] = useState<CardType[]>(shuffleArray(inputCards));

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
            incrementScore={incrementScore}
          />
        ))}
    </div>
  );
};

export default GameScreen;
