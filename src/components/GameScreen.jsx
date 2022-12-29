import Card from "./Card";

const GameScreen = ( { cards } ) => {
  return (
    <div className="cards">
      { cards.map( ( card ) => (
        <Card key={ card.id } card={ card } />
      ) ) }
    </div>
  );
};

export default GameScreen;
