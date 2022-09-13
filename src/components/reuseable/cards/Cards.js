import React from 'react'
import './card.css'

function Cards(props) {
  return (
    <>
      <div className="card__item">
        <img className="card__img" src={props.image} alt="Icon1" />
        <h3 className="card__hadding">{ props.title }</h3>
        <p className="card__pera"> {props.desc} </p>
      </div>
    </>
  )
}

export default Cards
