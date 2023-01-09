import { useContext } from "react";
import { CardsContext } from "../context/cardsContext";

import CardType from "../@types/Card";
import Card from "./Card";

const GameScreen = () => {
  const data = useContext(CardsContext);
  const won = data.toShow.length === data.score;

  return (
    <div
      className="cards"
      data-testid="game-screen"
      hidden={won}
    >
      {data.toShow.map((card: CardType) => (
        <Card
          card={card}
          key={card.id}
        />
      ))}
    </div>
  );
};

export default GameScreen;
