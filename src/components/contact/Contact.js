import React from 'react'

import './contact.scss';

function Contact() {
    return(
        <section className='contact' id='contact'>
            <div className='contact-div'>
                <h1>Contact Us</h1>
                <p className='phone'>123-456-6667</p>
                <div className='email-div'>
                    <a className='email-anchor' href="mailto:dogsForAll@gmail.com">dogsForAll@gmail.com</a>
                </div>
            </div>
        </section>
    )
}

export default Contact;