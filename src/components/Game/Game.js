import './Game.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import  Rating  from 'react-rating';

const Game = (props) => {
    const {id, title, publisher, rating, price, image} = props.game;
    const cartIcon = <FontAwesomeIcon icon={faCartArrowDown} />

    return (
        <div className="game-card">
            <img src={image} alt="" />
            <h2>{title}</h2>
            <h4>{publisher}</h4>
            <p className="game-rating">
            <Rating
                    initialRating={rating}
                    readonly
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    />
            </p>
            <p className="game-price">${price}</p>
            <button onClick={() => props.addToCart(id)}>{cartIcon} Add to Cart</button>
        </div>
    );
};

export default Game;