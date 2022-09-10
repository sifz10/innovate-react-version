import React from 'react'
import './card.css'

function Card() {
  return (
    <section className="cards">
    <div className="container">
    <div className="main">
        <div className="card__item">
        <img className="card__img" src="./images/Icon1.png" alt="Icon1" />
        <h3 className="card__hadding">Grow your business</h3>
        <p className="card__pera">Nam libero tempore, cum soluta nobis est eligendi optio cumque </p>
        </div>
        <div className="card__item">
        <img className="card__img" src="./images/Icon2.png" alt="Icon1" />
        <h3 className="card__hadding">Digital marketing</h3>
        <p className="card__pera">Nam libero tempore, cum soluta nobis est eligendi optio cumque </p>
        </div>
        <div className="card__item">
        <img className="card__img" src="./images/Icon3.png" alt="Icon1" />
        <h3 className="card__hadding">Search engine optimization</h3>
        <p className="card__pera">Nam libero tempore, cum soluta nobis est eligendi optio cumque </p>
        </div>
    </div>
    </div>
    </section>
  )
}

export default Card
