const Card = ( {
  card,
  setClicked,
} ) =>
(
  <div
    className="card"
    data-testid="card">
    <div
      className="card-image">
      <img
        alt="card"
        src={ card.image } />
    </div>
    <div
      className="card-content">
      <h2
        className="card-title">
        { card.title }
      </h2>
    </div>
  </div>
);

export default Card;
