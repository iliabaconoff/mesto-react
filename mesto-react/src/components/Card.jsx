import React from "react";

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <div class="card">
      <img class="card__image" src={card.link} alt={card.name} onClick={handleClick}/>
      <button
        class="card__delete"
        type="button"
        arial-label="Удалить место"
        name="card__delete"
        id="card__delete"
      ></button>
      <div class="card__description">
        <h2 class="card__title">{card.name}</h2>
        <div class="card__like-column">
          <button
            class="card__like"
            type="button"
            arial-label="Нравится"
            namde="card__like"
            id="card__like"
          ></button>
          <p class="card__like-counter">{card.likes.lenght}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;