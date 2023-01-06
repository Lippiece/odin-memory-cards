import Button from "@mui/material/Button";
import { useContext, useState } from "react";

import CardType from "../@types/Card";
import { CardsDispatchContext } from "../context/cardsContext";

interface CardProps {
  card: CardType;
}
const Card: React.FC<CardProps> = ({ card }) => {
  const [ clicked, setClicked ] = useState(false);
  const dispatch                = useContext(CardsDispatchContext);
  const handleClick             = () => {
    setClicked(true);
    dispatch({
      payload: card,
      type   : "clicked first time",
    });
  };
  const handleSecondClick       = () => {
    dispatch({
      payload: card,
      type   : "clicked second time",
    });
  };

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
