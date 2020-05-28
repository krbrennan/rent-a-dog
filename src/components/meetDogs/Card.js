import React from 'react'

const Card = (props) => {
   return(
       <img className='card' src={ props.source }></img>
   )
}

export default Card;