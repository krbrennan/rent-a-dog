import React from 'react';


import MeetDogs from '../meetDogs/MeetDogs.js';

import './navbar-script.js';

import './navbar.css';

function Navbar(){
    return(
        <nav id='navbar' className='nav'>
            <ul>
                <a className='nav-links' href="#">Home</a>
                <a className='nav-links' href="#about-section">About Us</a>
                {/* <a className='nav-links' href="#MeetDogs">Checkout our Pups!</a> */}
                <a className='nav-links' href="#">Pricing and Expectations</a>
            </ul>
        </nav>
    )
}

export default Navbar;