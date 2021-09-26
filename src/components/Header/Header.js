import './Header.css';
import React from 'react';

const Header = () => {
    return (
        <div className="header-container">
            <h1>Game<span>Shop.</span></h1>
            <p>You have $200 USD limit for your game shopping</p>
        </div>
    );
};

export default Header;