import React from 'react';

import Cards from './Cards';

import './meetDogs.scss';


function MeetDogs(){
    return(
       <section id='meetDogs'>
           <div className='container'>
               <img className='meet-dogs-background' src="https://d25ynr0tqe9wpe.cloudfront.net/assets/pages/join22/background-sketchyli-8926430ac5a67667c6d3e33f00f7f8a0375daac6561c54ad8b4440a083c7a776.png"></img>
            <h3>Take a look at the #rentadog Community</h3>
            <div className='card-container'>
                <Cards />
            </div>
           </div>
       </section>
    )
}


export default MeetDogs;