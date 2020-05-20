import React from 'react';

// styling
import './about.css';

function About(){
    return(
        <section>
            <header>
            </header>
            <div className='about-info'>
                <div className='about-left'>
                    <div className='about-left-text'>
                        <div className='about-left-top-text'>
                            <h3 className='above-about-main-text'>Compassionate care + warm hearts</h3>
                            <h1 className='about-main-text'>Rent a Dog for What Ails You</h1>
                            <div className='about-main-p'>
                                <p>We have a stellar team of dogs just waiting to give you all their love.  Every pup we have is fully trained and our staff of full-time trainers and groomers ensure that every dog is capable of handling different people and environments and that they always look beautiful doing so!</p>
                                <p>At some point everyone needs someone or something to cheer them up. Our dogs are always ready to love and they don't know or care about all of life's problems.</p>
                            </div>
                            <button className='meet-our-dogs'>MEET OUR DOGS</button>
                        </div>
                        
                    </div>
                </div>
                <div className='about-right'>
                    <div className='about-right-text'>
                        <div className='about-right-card'>
                            <i class="far fa-money-bill-alt about-icon"></i>
                            <div className='about-right-card-text-box'>
                                <span>Bonded and Insured</span>
                                <div class='about-right-card-text'>
                                <p>As a proud member of <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel='noreferrer'>Dogs International</a>, our Company is bonded and insured through <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel='noreferrer'>Business Dogs of the Americas</a>.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className='about-right-card'>
                            <i class="fas fa-graduation-cap about-icon"></i>
                            <div className='about-right-card-text-box'>
                                <span>Screened Dogs</span>
                                <div class='about-right-card-text'>
                                    <p>Every Dog we have undergoes 500 hours of small-group training prior to onboarding and attends regular training sessions to ensure that our dogs and our trainers are doing the best that they can!</p>
                                </div>
                            </div>
                        </div>
                        <div className='about-right-card'>
                            <i class="fas fa-mobile-alt about-icon"></i>
                            <div className='about-right-card-text-box'>
                                <span>Client App</span>
                                <div class='about-right-card-text'>
                                    <p>Our clients enjoy the ease and convenience of our mobile app. You can send us a message, schedule an appointment to meet our dogs and staff, and ask any questions you might have.</p>
                                </div>
                            </div>
                        </div>

                        <div className='about-right-card'>
                            <i class="far fa-comment about-icon"></i>
                            <div className='about-right-card-text-box'>
                                <span>Direct Messaging</span>
                                <div class='about-right-card-text'>
                                    <p>You can quickly and easily send us a message if you have questions as they arise. We know that you may not be prior dog owners and that's another reason why we're here to help!
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='about-right-card'>
                            <i class="far fa-calendar-alt about-icon"></i>
                            <div className='about-right-card-text-box'>
                                <span>Schedule Regular Visits</span>
                                <div class='about-right-card-text'>
                                    <p>If your schedule is busy or you're just bored and want to hangout with your favorite furry friend, we offer the chance to rent the same pupper to you on a regular schedule or whenever you have the time and interests. 
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='about-right-card'>
                            <i class="fas fa-dog about-icon"></i>
                            <div className='about-right-card-text-box'>
                                <span>Find a Pup that Matches your Personality</span>
                                <div class='about-right-card-text'>
                                    <p>We're committed to providing you with an analysis of every dog's personality type, videos of the dogs average and excited behavior, and testimonials from customers who have spent time with each dog so you know what you're getting into.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    )
}

export default About