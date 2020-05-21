import React from 'react';
import img from './hero-img.jpg';

// Components
import About from '../about/About.js';
import DogTypes from '../dogtypes/Dogtypes.js';
import Pricing from '../pricing/Pricing.js';
import Footer from '../footer/Footer.js';

// Styling
import './homepage.css';


function Homepage() {
    return (
        <div>
            <section className='hero'>
                <div className='intro-text'>
                    <p className='intro-text-p'>Professional Shelter with an Altruistic Side-Hustle</p>
                    <h1 className='hero-text'>Rent-a-Dog</h1>
                </div>
            </section>
            <About />
            <DogTypes />
            <Pricing />
            <Footer />
        </div>
    )
}

export default Homepage;

