import React, { useEffect } from "react";
import { reactApi } from "../utils/Api";
import iconEditAvatar from '../images/edit.png';
import Card from "./Card";

function Main(props) {

    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();
    const [cards, setCards] = React.useState([]);

    useEffect(() => {
        reactApi.getUserData()
            .then((data) => {
                setUserName(data.name);
                setUserDescription(data.about);
                setUserAvatar(data.avatar);
            })
            .catch((error) => {
                console.log(error);
            })
    })

    React.useEffect(() => {
        reactApi.getAllCards()
            .then((data) => {
                setCards(data);
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);

    return (
        <main className="main">
            <section className="profile section">
                <div className="profile__container">
                    <img className="profile__avatar" alt="Аватар пользователя" src={userAvatar} />
                    <div className="profile__cover">
                        <img className="profile__edit-avatar-icon" alt="Редактирование аватара" src={iconEditAvatar} onClick={props.onEditAvatar} />
                    </div>
                    <div className="profile__info">
                        <div className="profile__button-container">
                            <h1 className="profile__name">{userName}</h1>
                            <button onClick={props.onEditProfile} aria-label="Изменить данные профиля" className="profile__edit-button button"></button>
                        </div>
                        <p className="profile__description">{userDescription}</p>
                    </div>
                </div>
                <button aria-label="Добавить карточку" className="profile__add-card-button button" onClick={props.onAddPlace}></button>
            </section>
            <section className="elements section">
                <ul className="elements__cards">
                    {cards.map((card) =>
                        <Card onCardClick={props.onCardClick}
                            key={card._id} {...card}
                            card={card} />
                    )}
                </ul>
            </section>
        </main>
    )
}

export default Main;