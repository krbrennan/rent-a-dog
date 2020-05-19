import React from 'react';
import img from './hero-img.jpg';

// Components
import About from '../about/About.js'

// Styling
import './homepage.css';


function Homepage() {
    return (
        <div>
            <section className='hero'>
            </section>
            <About />
        </div>
    )
}

export default Homepage;

