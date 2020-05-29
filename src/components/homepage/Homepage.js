import React from 'react';

// Components
import About from '../2_about/About.js';
import DogTypes from '../3_dogtypes/Dogtypes.js';
import MeetDogs from '../meetDogs/MeetDogs.js';
import Pricing from '../pricing/Pricing.js';
import Contact from '../contact/Contact.js'
import Footer from '../footer/Footer.js';

// Styling
import './homepage.css';


function Homepage() {
    return (
        <div>
            <section className='hero'>
                <img className='hero-img' src={require('./hero.jpeg')}></img>
                <div className='intro-text'>
                    <p className='intro-text-p'>Professional Shelter with an Altruistic Side-Hustle</p>
                    <h1 className='hero-text'>Rent-a-Dog</h1>
                </div>
            </section>
            <About />
            <DogTypes />
            <MeetDogs />
            <Pricing />
            <Contact />
            <Footer />
        </div>
    )
}

export default Homepage;

