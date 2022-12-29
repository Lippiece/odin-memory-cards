const Card = ( { card } ) =>
(
  <div
    className="card"
    data-testid="card">
    <div
      className="card-image">
      <img
        alt=""
        src={ card.image } />
    </div>
    <div
      className="card-content">
      <h2
        className="card-title">
        { card.title }
      </h2>
      <p
        className="card-text">
        { card.text }
      </p>
    </div>
  </div>
);

export default Card;
