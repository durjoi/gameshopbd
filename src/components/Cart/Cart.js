import './Cart.css';
import React from 'react';
import CartItem from '../CartItem/CartItem';

const Cart = (props) => {
    return (
        <div className="cart-container">
            <h1>Your Cart</h1>
            {
                props.cart.map(item => <CartItem key={item.id} game={item}></CartItem>)
            }
        </div>
    );
};

export default Cart;