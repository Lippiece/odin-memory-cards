import { useEffect, useState } from "react";

import shuffleArray from "../logic/shuffleArray";
import Card from "./Card";

const GameScreen = ( {
  cards: globalCards,
} ) => {

  const [
    cards,
    setCards,
  ] = useState( [] );

  useEffect(
    () => {

      setCards( shuffleArray( globalCards ) );

      return [];

    },
    [
      cards,
      globalCards,
    ]
  );

  const renderCards = () =>
    shuffleArray( cards )
      .map( card =>
      (
        <Card
          card={ card }
          key={ card.id }
          cards={ cards }
          setCards={ setCards }
        />
      ) );

  return (
    <div
      className="cards"
      data-testid="game-screen"
    >
      { cards }
    </div>
  );

};

export default GameScreen;
