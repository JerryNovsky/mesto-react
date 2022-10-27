import React from "react"

function Card({ card, onCardClick }) {

    function handleClick() {
        onCardClick(card)
    }

    return (
        <li className="card">
            <img className="card__image" src={card.link} alt={card.alt} onClick={() => handleClick()} />
            <button aria-label="Удалить карточку" className="card__delete-button button"></button>
            <div className="card__description">
                <h3 className="card__name">{card.name}</h3>
                <div className="card__like-container">
                    <button aria-label="Мне нравится" className="card__like-button button"></button>
                    <h3 className="card__like-quantity">{card.likes.length}</h3>
                </div>
            </div>
        </li>
    )
}

export default Card