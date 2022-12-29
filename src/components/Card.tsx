import Button from "@mui/material/Button";
import { pipe } from "sanctuary";

import CardType from "../@types/Card";
import shuffleArray from "../logic/shuffleArray";

interface CardProps {
  card: CardType;
  cards: CardType[];
  setCards: (cards: CardType[]) => void;
}
const Card: React.FC<CardProps> = ({ card, cards, setCards }) => {
  const setClicked = (cards_: CardType[]) => {
    return cards_.map(card_ => {
      if (card_.id === card.id) {
        return {
          ...card_,
          clicked: true,
        };
      }
      return card_;
    });
  };
  const handleClick = () => pipe([shuffleArray, setClicked, setCards])(cards);

  return (
    <Button
      className="card"
      data-testid="card"
      onClick={handleClick}
    >
      <div className="card-image">
        <img
          alt="card"
          src={card.image}
        />
      </div>
    </Button>
  );
};
export default Card;
