import React from 'react';

import './pricing.scss';

function Pricing(){
    return(
        <section id='pricing-section' className='pricing-section'>
            <div className='pricing-div'>
                <div className='pricing-title'>
                    <h1>How it Works</h1>
                </div>
                <div className='how-it-works-steps'>

                    <div className='step'>
                        <p className='step-p'>1</p>
                        <p className='step-info'>
                            Download the App or come in for a free visit to ask questions about how our services work. We offer a monthly subscription-based service that covers expenses such as food, treats, and toys for the time you spend with your pup. Your subscription also covers everything behind the scenes like our trainers, staff, vetrenarians, operating costs, and insurance costs.
                        </p>
                    </div>

                    <div className='step'>
                        <p className='step-p'>2</p>
                        <p className='step-info'>
                            Fill out a questionaire on the app or at one of our locations (no appointment necessary) so we can try and match you up with a pup that fits your lifestyle and intersts.
                        </p>
                    </div>

                    <div className='step'>
                        <p className='step-p'>3</p>
                        <p className='step-info'>
                            We'll provide you (either through the app or in the mail if you choose) with a portfolio of dogs we think would be a good fit. Each profile explains the dog's personality, interests, abilities, and a complete medical history.
                        </p>
                    </div>

                    <div className='step'>
                        <p className='step-p'>4</p>
                        <p className='step-info'>
                            Once we know what pups you're interested in you can come in and visit them or schedule to pick them up whenever you'd like. We will provide necessary goods like food, bowls, a cage, a bed, treats, and toys.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Pricing