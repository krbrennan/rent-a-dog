import React from 'react';

import './dogtypes.css'

function DogTypes() {
    return(
        <section className='dogTypesSection'>
            <div className='content'>
                <div className='content-left'>
                    <div className='content-left-top-text'>
                        <h1 className='main-text'>Personality Fit</h1>
                        <h4 className='sub-text'>Find a dog that fits YOU</h4>
                    </div>
                    <div className='content-left-paragraph'>
                        <p>
                            We Want you to feel confident and safe in the pup you choose to spend time with. If you're dealing with an injury or ailment and are seeking our service in order to get some of that authentic doggy-lovin' then you might not want a high-energy Collie or massive Mastiff, you might want a relaxed lap dog that doesn't bark at the wind.
                        </p>
                        <p>
                            Maybe you want a running-buddy or a dog to go on hikes with--we want to help you find a dog with a personality that coinsides with what you're seeking. With our services you can watch videos and look at up-to-date personality profiles of our pups which helps you get a well-rounded view to help you decide on what you'd like.
                        </p>
                        <p>
                            You might be wondering how we have so many hours of videos of each dog going about their day. Well, years ago we invested in a nanny-camera technology company and now we're able to have every dog fitted with a camera-collar. The camera allows us to study each dog after their visits and update their training regimen in addition to allowing us to ensure that our dogs aren't being mistreated in any way.
                        </p>
                    </div>
                </div>
                <div className='content-right'>
                    <div className='content-right-images'>
                        <div className='content-right-image-div'>
                            <img className='content-right-image' src={require('./assets/happy-min.png')} />
                            <h3 className='dog-name'>Juicebox</h3>
                            <p>
                                Juicebox has a ton of energy! She's perfect for long-hikes, chasing geese, and putting you to work! Although she's very obedient she has a ton of energy and if you keep her locked inside on a nice day she might just run up your walls.
                            </p>
                        </div>
                        <div className='content-right-image-div'>
                            <img className='content-right-image' src={require('./assets/relaxed.jpg')} />
                            <h3 className='dog-name'>Plop</h3>
                            <p>
                                Plop is a cutie. He's 5 years old and loves to lounge. A perfect companion for someone who wants to lie around a hangout with a loving pup who wants to be pet and fed!
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}


export default DogTypes