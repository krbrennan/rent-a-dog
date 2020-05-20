import React from 'react';
import img from './hero-img.jpg';

// Components
import About from '../about/About.js';
import DogTypes from '../dogtypes/Dogtypes.js';

// Styling
import './homepage.css';


function Homepage() {
    return (
        <div>
            <section className='hero'>
            </section>
            <About />
            <DogTypes />
        </div>
    )
}

export default Homepage;

