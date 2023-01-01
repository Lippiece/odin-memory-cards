import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import {
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
interface CardState {
  old: true | false | null;
}
const Card: React.FC<CardProps> = ({
  card,
  cards,
  setCards,
  incrementScore,
}) => {
  const [ old, setOld ] = useState<CardState["old"]>(null); // prettier-ignore
  useEffect(() => {
    const updateCards = () =>
      pipe([
        map((c: CardType) => (c.id === card.id ? { ...c, clicked: true } : c)),
        shuffleArray,
        setCards,
      ])(cards);

    if (old === false) {
      incrementScore();
    }
    updateCards();
  }, [old]);
  const handleClick = () => {
    cards.find(c => c.id === card.id)?.clicked ? setOld(true) : setOld(false);
  };

  return (
    <Button
      className="card"
      data-testid={`card-${card.id}`}
      onClick={handleClick}
    >
      <div className="card-image">
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
