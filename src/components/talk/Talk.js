import React from 'react'
import './talk.css'

function Talk() {
  return (
        <section className="talks">
        <img className="talk__shape" src="images/talk_shape.png" alt="talk"/>
        <div className="container">
            <div className="work__title">
            <div className="work__left">
                <h4 className="experience__title__sub-headding talk__sub__title">Lets talk</h4>
                <h2 className="experience__title__headding">Got a project?</h2>
            </div>
            <div className="work__right">
                <a className="banner__showcase" href="#">Contact us</a>
            </div>
            </div>
            <p className="talk__pera">As a leading digital platform in Paris, we look to engage with our clients beyond the conventional design and development agency relationship, becoming a partner to the people and companies we work with.</p>
        </div>
        </section>
  )
}

export default Talk
