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
                <div className='intro-text'>
                    <p className='intro-text-p'>Professional Shelter with an Altruistic Side-Hustle</p>
                    <h1>Rent-a-Dog</h1>
                </div>
            </section>
            <About />
            <DogTypes />
        </div>
    )
}

export default Homepage;

