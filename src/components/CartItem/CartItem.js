import './CartItem.css';
import React from 'react';

const CartItem = (props) => {
    const {title, quantity} = props.game;
    return (
        <div class="cart-item-container">
            <p>{title}  </p>
            <p>{quantity}</p>
        </div>
    );
};

export default CartItem;