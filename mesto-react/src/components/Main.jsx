import React, { useState, useEffect } from "react";
import api from "../utils/api";
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUsername] = useState("");
  const [userBio, setUserBio] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([user, card]) => {
        setUsername(user.name);
        setUserBio(user.about);
        setUserAvatar(user.avatar);
        setCards(card);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__info">
            <button
              class="profile__edit-avatar"
              type="button"
              aria-label="Редактировать аватар"
              onClick={onEditAvatar}
            >
              <img src={userAvatar} alt="аватар" class="profile__image" />
            </button>
          <div class="profile__column">
            <div class="profile__name-button">
              <h1 class="profile__name">{userName}</h1>
              <button class="profile__button-edit" type="button" onClick={onEditProfile}></button>
            </div>
            <p class="profile__bio">{userBio}</p>
          </div>
          <button
            className="profile__button-add"
            type="button"
            onClick={onAddPlace}
          ></button>
        </div>
      </section>
      <section className="cards">
        {cards.map((card) => (
          <Card card={card} onCardClick={onCardClick} key={card.id} />
        ))}
      </section>
    </main>
  );
}

export default Main;
