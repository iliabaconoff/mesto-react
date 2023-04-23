import './App.css';
import Header from './Header'
import Profile from './Profile'
import Footer from './Footer'

function App() {
  return (
    <body className="page">
   <Header />

    <main className="main">
      <Profile />

      <section className="cards"></section>

      {/* <!--Hidden blocks-->
      <!--Edit user profile popup--> */}
      <div className="popup popup_edit">
        <div className="popup__container">
          <button className="popup__close" type="button"></button>
          <h2 className="popup__form-title">Редактировать профиль</h2>
          <form
            action="submit"
            className="popup__form popup__form-edit"
            name="popup__form popup__form-edit"
            novalidate
          >
            <input
              type="text"
              name="username"
              value=""
              className="popup__input popup__input_type_name"
              placeholder="Введите имя"
              minlength="2"
              maxlength="40"
              id="username"
              required
            />
            <span className="popup__input-error username-error"></span>
            <input
              type="text"
              name="userjob"
              value=""
              className="popup__input popup__input_type_bio"
              placeholder="Место работы"
              minlength="2"
              maxlength="200"
              id="userjob"
              required
            />
            <span className="popup__input-error userjob-error"></span>
            <button type="submit" className="popup__save">Сохранить</button>
          </form>
        </div>
      </div>

      {/* <!--Add card popup--> */}
      <div className="popup popup_add">
        <div className="popup__container">
          <button className="popup__close" type="button"></button>
          <h2 className="popup__form-title">Добавить место</h2>
          <form
            novalidate
            action="submit"
            className="popup__form popup__form-add"
            name="popup__form popup__form-add"
          >
            <input
              type="text"
              name="cardname"
              value=""
              className="popup__input popup__input_type_title"
              placeholder="Введите название"
              minlength="2"
              maxlength="30"
              id="cardname"
              required
            />
            <span className="popup__input-error cardname-error"></span>
            <input
              type="url"
              name="cardurl"
              value=""
              className="popup__input popup__input_type_link"
              placeholder="Введите ссылку на изображение"
              id="cardurl"
              required
            />
            <span className="popup__input-error cardurl-error"></span>

            <button type="submit" className="popup__save">Сохранить</button>
          </form>
        </div>
      </div>
      
      {/* <!--Fullsize image popup--> */}
      <div className="popup popup_image">
        <div className="popup__image-container">
          <button className="popup__close" type="button"></button>
          <img className="popup__image-fullsize" />
          <h2 className="popup__image-title"></h2>
        </div>
      </div>

      {/* <!--Deleting card acception--> */}
      <div className="popup popup_delete">
        <div className="popup__container">
          <button className="popup__close" type="button"></button>
          <h2 className="popup__form-title">Вы уверены?</h2>
          <button type="submit" className="popup__save">Сохранить</button>
        </div>
      </div>

      <div className="popup popup_add">
        <div className="popup__container">
          <button className="popup__close" type="button"></button>
          <h2 className="popup__form-title">Обновить аватар</h2>
          <form
            novalidate
            action="submit"
            className="popup__form popup__form-add"
            name="popup__form popup__form-add"
          >
            <input
              type="url"
              name="avatar_url"
              value=""
              className="popup__input popup__input_type_link"
              placeholder="Введите ссылку на изображение"
              id="avatarurl"
              required
            />
            <span className="popup__input-error cardurl-error"></span>

            <button type="submit" className="popup__save">Сохранить</button>
          </form>
        </div>
      </div>

    </main>

    <Footer />

    <template id="card__template">
      <div className="card">
        <img className="card__image" />
        <button
          className="card__delete"
          type="button"
          arial-label="Удалить место"
          name="card__delete"
          id="card__delete"
        ></button>
        <div className="card__description">
          <h2 className="card__title"></h2>
          <button
            className="card__like"
            type="button"
            arial-label="Нравится"
            namde="card__like"
            id="card__like"
          ></button>
        </div>
      </div>
    </template>
  </body>
  );
}

export default App;
