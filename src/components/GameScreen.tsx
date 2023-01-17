import "../css/GameScreen.css";

import { useContext } from "react";

import CardType from "../@types/Card";
import { CardsContext } from "../context/cardsContext";
import Card from "./Card";

const GameScreen = () => {
  const data                = useContext(CardsContext);
  const { shownComponents } = data;

  return (
    <div
      className="cards"
      data-testid="game-screen"
      hidden={!shownComponents.has("game screen")}
    >
      {data.currentCards.map((card: CardType) => (
        <Card
          card={card}
          key={card.id}
        />
      ))}
    </div>
  );
};

export default GameScreen;
