import React from 'react'

function Profile() {
  return (
    <section className="profile">
      <div className="profile__info">
        <img
          src="<%=require('./images/image-2.png')%>"
          alt="аватар"
          className="profile__image"
        />
        <div className="profile__column">
          <h1 className="profile__name">Жак-Ив Кусто</h1>
          <button className="profile__button-edit" type="button"></button>
        </div>
        <p className="profile__bio">Исследователь океана</p>
      </div>
      <button className="profile__button-add" type="button"></button>
    </section>
  );
}

export default Profile;