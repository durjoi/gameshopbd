import './Shop.css';
import React, { useEffect, useState } from 'react';
import Game from '../Game/Game';
import Cart from '../../components/Cart/Cart';

const Shop = () => {
    const [games, setGames] = useState([]);
    const [cart, setCart] = useState([]);

    const handleAddToCart = (id) => {
        const selectedProduct = games.find(game => game.id === id);

        // Check that product already exists or not

        const exist = cart.find(item => item.id === id);

        if(exist) {
            const tempCart = [...cart];
            tempCart.find(cart => cart.id === exist.id).quantity++;

            setCart(tempCart);
        } else {
            const newCartItem = {
                id: selectedProduct.id,
                title: selectedProduct.title,
                quantity: 1,
                price: selectedProduct.price,
            };
    
    
            const newCart = [...cart, newCartItem ];
            setCart(newCart);
        }

        
    }

    useEffect(() => {
        fetch('./games.json')
        .then(response => response.json())
        .then(data => setGames(data));
    }, []);

    return (
        <div className="main-container">
            <div className="shop-container">
                {games.map(game => <Game game={game} key={game.id} addToCart={handleAddToCart} />)}
            </div>
            <Cart cart={cart}></Cart>
      </div>
        
    );
};

export default Shop;