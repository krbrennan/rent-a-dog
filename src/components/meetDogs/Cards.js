import React from 'react';

// import './dogs';
import Card from './Card';

const Cards = () => {

    function importAll(r){
        return r.keys().map(r);
    }
        // import all images (hardcoded) from local folder and save them as a list
        // return a Card for each image
        const CardList = importAll(require.context('./dogs', false, /\.(png|jpe?g|svg)$/)).map((img) => {
            return(
                <Card source={ img }/>
            )
        })
        // return list of Cards
        return (
            <ul className='card-ul'>
                <li>{ CardList }</li>
            </ul>
        )
}
export default Cards;