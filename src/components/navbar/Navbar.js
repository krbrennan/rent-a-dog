import React from 'react';

import './navbar-script.js';

import './navbar.css';

function Navbar(){
    return(
        <nav id='navbar' className='nav'>
            <ul>
                <a className='nav-links' href="#">Home</a>
                <a className='nav-links' href="#">About Us</a>
                <a className='nav-links' href="#">Checkout our Pups!</a>
                <a className='nav-links' href="#">Pricing and Expectations</a>
            </ul>
        </nav>
    )
}

export default Navbar;