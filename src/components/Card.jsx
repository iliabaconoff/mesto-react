import React from "react";

function Card({ card, onCardClick }) {
  
  function handleClick() {
    onCardClick(card)
  }

  return (
    <div className="card">
      <img
        className="card__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <button
        className="card__delete"
        type="button"
        arial-label="Удалить место"
        name="card__delete"
        id="card__delete"
      ></button>
      <div className="card__description">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-column">
          <button
            className="card__like"
            type="button"
            arial-label="Нравится"
            namde="card__like"
            id="card__like"
          ></button>
          <p className="card__like-counter">{card.likes.lenght}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
