import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selecetedCard, setSelecetCard] = useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfileOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelecetCard(card);
    setIsImagePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfileOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsConfirmationPopupOpen(false);
    setIsImagePopupOpen(false);
  }

  return (
    <>
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      {/* edit avatar popup */}
      <PopupWithForm
        name="avatar"
        title="Изменить аватар"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup__input popup__input_type_link"
          name="avatar"
          type="url"
          placeholder="Ссылка на Ваше фото"
          required
        ></input>
        <span className="popup__error avatarurl-error"></span>
      </PopupWithForm>

      {/* edit profile popup */}
      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isEditProfileOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup__input popup__input_type_title"
          type="text"
          name="name"
          placeholder="Название карточки"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="popup__error name-error"></span>
        <input
          className="popup__input popup__input_type_link"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__error link-error"></span>
      </PopupWithForm>

      {/* add place popup */}
      <PopupWithForm
        name="add"
        title="Новое место"
        buttonText="Добавить"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup__input popup__input_type_title"
          type="text"
          name="cardname"
          placeholder="Название места"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="popup__error cardname-error"></span>

        <input
          className="popup__input popup__input_type_link"
          type="cardurl"
          name="cardlink"
          placeholder="Ссылка на изображение"
          required
        />
        <span className="popup__error cardurl-error"></span>
      </PopupWithForm>

      {/* fullsize image popup */}
      <ImagePopup
        card={selecetedCard}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
      />

      {/* Confirmation popup */}
      <PopupWithForm
        title="Вы уверены?"
        buttonText="Да"
        isOpen={isConfirmationPopupOpen}
        onClose={closeAllPopups}
      />
    </>
  );
}

export default App;
