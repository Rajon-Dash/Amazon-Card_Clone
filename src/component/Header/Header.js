import React from 'react';
import "./Header.css"
import logo from '../../ema-john-resources/images/amazon_Logo-removebg-preview.png'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt=''/>
            <nav>
                <a href='/shop'>Shop</a>
                <a href='/order'>Order</a>
                <a href='/inventory'>Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;