import React from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from "./ImagePopup";


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({})

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  const handleCardClick = (card) => {
    setSelectedCard({
      name: card.name,
      link: card.link,
    })
  }

  return (

    <div className="page">

      <Header />

      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick} />

      <Footer />

      <PopupWithForm
        name="edit-profile"
        title="Изменить данные профиля"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>

        <input
          type="text"
          id="name-input"
          className="popup__input popup__input_type_name"
          name="name"
          placeholder="Введите свое имя"
          minLength="2"
          maxLength="40"
          required />
        <span className="name-input-error popup__input-error"></span>
        <input
          type="text"
          id="job-input"
          className="popup__input popup__input_type_description"
          name="job"
          placeholder="Чем вы занимаетесь?"
          minLength="2"
          maxLength="200"
          required />
        <span className="job-input-error popup__input-error"></span>

      </PopupWithForm>

      <PopupWithForm
        name="add-card"
        title="Добавить новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>

        <input
          type="text"
          id="card-name-input"
          className="popup__input popup__input_type_card-name"
          name="name"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          required />
        <span className="card-name-input-error popup__input-error"></span>
        <input
          type="url"
          id="url-input"
          className="popup__input popup__input_type_card-link"
          name="link"
          placeholder="Ссылка на картинку"
          required />
        <span className="url-input-error popup__input-error"></span>

      </PopupWithForm>

      <PopupWithForm
        name="edit-avatar"
        title="Изменить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>

        <input
          type="url"
          id="avatar-input"
          className="popup__input popup__input_type_avatar-link"
          name="avatar-link"
          placeholder="Ссылка на картинку"
          required />
        <span className="avatar-input-error popup__input-error"></span>

      </PopupWithForm>

      <PopupWithForm
        name="delete-card-confirmation"
        title="Вы уверены?">
      </PopupWithForm>
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />


      {/*<div className="popup popup_type_edit-profile">
        <div className="popup__content popup__content_type_edit-profile">
          <button aria-label="Закрыть попап" className="popup__close-button popup__edit-close-button button"
            type="button"></button>
          <form className="popup__form" noValidate>
            <h2 className="popup__title">Редактировать профиль</h2>
            <input
              type="text"
              id="name-input"
              className="popup__input popup__input_type_name"
              name="name"
              minLength="2"
              maxLength="40"
              required />
            <span className="name-input-error popup__input-error"></span>
            <input
              type="text"
              id="job-input"
              className="popup__input popup__input_type_description"
              name="job"
              minLength="2"
              maxLength="200"
              required />
            <span className="job-input-error popup__input-error"></span>
            <button type="submit" className="popup__save-button button">Сохранить</button>
          </form>
        </div>
      </div>*/}

      {/* <div className="popup popup_type_add-card">
        <div className="popup__content popup__content_type_add-card">
          <button aria-label="Закрыть попап" className="popup__close-button popup__add-close-button button"
            type="button"></button>
          <form className="popup__form" noValidate>
            <h2 className="popup__title">Новое место</h2>
            <input
              type="text"
              id="card-name-input"
              className="popup__input popup__input_type_card-name"
              name="name"
              placeholder="Название"
              minLength="2"
              maxLength="30"
              required />
            <span className="card-name-input-error popup__input-error"></span>
            <input
              type="url"
              id="url-input"
              className="popup__input popup__input_type_card-link"
              name="link"
              placeholder="Ссылка на картинку"
              required />
            <span className="url-input-error popup__input-error"></span>
            <button type="submit" className="popup__save-button button">Создать</button>
          </form>
        </div>
  </div> */}

      {/*<div className="popup popup_type_delete-card-confirmation">
        <div className="popup__content">
          <button aria-label="Закрыть попап" className="popup__close-button popup__confirm-close-button button"
            type="button"></button>
          <form className="popup__form" noValidate>
            <h2 className="popup__title popup__title_confirm">Вы уверены?</h2>
            <button type="submit" className="popup__save-button button">Да</button>
          </form>
        </div>
</div>*/}

      {/*<div className="popup popup_type_edit-avatar">
        <div className="popup__content popup__content_type_edit-avatar">
          <button aria-label="Закрыть попап" className="popup__close-button popup__avatar-close-button button"
            type="button"></button>
          <h2 className="popup__title">Обновить аватар</h2>
          <form className="popup__form" noValidate>
            <input
              type="url"
              id="avatar-input"
              className="popup__input popup__input_type_avatar-link"
              name="avatar-link"
              placeholder="Ссылка на картинку"
              required />
            <span className="avatar-input-error popup__input-error"></span>
            <button type="submit" className="popup__save-button button">Сохранить</button>
          </form>
        </div>
</div>*/}

      {/*<div className="popup popup_type_cards">
        <div className="popup__image">
          <button aria-label="Закрыть попап" className="popup__close-button popup__cards-close-button button"
            type="button"></button>
          <img className="popup__cards-image" />
          <h2 className="popup__cards-description"> </h2>
        </div>
</div>*/}
    </div>

  );
}

export default App;
