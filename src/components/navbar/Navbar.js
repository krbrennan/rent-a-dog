import React from 'react';


import './navbar.css';

function Navbar(){
    return(
        <nav className='nav'>
            <ul>
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Checkout our Pups!</a>
                <a href="#">Pricing and Expectations</a>
            </ul>
        </nav>
    )
}

export default Navbar;