import Button from "@mui/material/Button";
import { pipe } from "sanctuary";

import setClicked from "../logic/setClicked";
import shuffleArray from "../logic/shuffleArray";

const Card = ( {
  card,
  cards,
  setCards,
  renderCards,
} ) => {

  const handleClick = () =>
    pipe( [
      shuffleArray,
      setClicked,
      setCards,
    ] )( cards );

  return (
    <Button
      className="card"
      data-testid="card"
      onClick={handleClick}
    >
      <div
        className="card-image">
        <img
          alt="card"
          src={card.image} />
      </div>
      <div
        className="card-content">
        <h2
          className="card-title">
          {card.title}
        </h2>
      </div>
    </Button> );

};

export default Card;
