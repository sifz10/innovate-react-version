import React from 'react'
import './card.css'
import Cards from '../reuseable/cards/Cards'

function Card(props) {
  return (
    <>
      <section className="cards">
      <div className="container">
       <div className="main">
        <Cards title="Grow your business" desc="Nam libero tempore, cum soluta nobis est eligendi optio cumque" image="./images/Icon1.png"/>
        <Cards title="Digital Marketing" desc="Nam libero tempore, cum soluta nobis est eligendi optio cumque" image="./images/Icon2.png"/>
        <Cards title="Search Engine Optimization" desc="Nam libero tempore, cum soluta nobnobis est eligendi optio cumque" image="./images/Icon3.png"/>
       </div>
      </div>
      </section>
    </>
  )
}

export default Card
