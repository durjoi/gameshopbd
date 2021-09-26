import './Cart.css';
import React from 'react';
import CartItem from '../CartItem/CartItem';

const Cart = (props) => {

    let itemCount = 0;
    let totalPrice = 0;
    for(const item of props.cart) {
        itemCount += item.quantity;
        totalPrice += item.quantity * item.price;
    }

    return (
        <div className="cart-container">
            <h1>Your Cart</h1>
            <p>Total Item Selected {itemCount}</p>
            <p></p>
            {
                props.cart.map(item => <CartItem key={item.id} game={item}></CartItem>)
            }

            <p>Total Price: ${totalPrice.toFixed(2)}</p> 
        </div>
    );
};

export default Cart;