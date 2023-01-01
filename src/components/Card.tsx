import Button from "@mui/material/Button";
import { useReducer, useState } from "react";
import {
  find,
  fromMaybe,
  Just,
  map,
  mapMaybe,
  Maybe,
  maybe,
  Nothing,
  pipe,
} from "sanctuary";

import CardType from "../@types/Card";
import shuffleArray from "../logic/shuffleArray";

interface CardProps {
  card: CardType;
  cards: CardType[];
  setCards: (cards: CardType[]) => void;
  incrementScore: () => void;
}
const Card: React.FC<CardProps> = ({
  card,
  cards,
  setCards,
  incrementScore,
}) => {

  return (
    <Button
      className="card"
      data-testid={`card-${card.id}`}
      onClick={clicked ? handleSecondClick : handleClick}
    >
      <div
        className="card-image">
        <img
          alt={`card-${card.id}`}
          src={card.image}
          id={String(card.id)}
          data-testid="card-image"
        />
      </div>
    </Button>
  );
};
export default Card;
