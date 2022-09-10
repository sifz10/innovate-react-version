import React from 'react'
import './work.css'
function Work() {
  return (
    <section className="works">
    <div className="container">
        <div className="work__title">
        <div className="work__left">
            <h4 className="experience__title__sub-headding">digital experience</h4>
            <h2 className="experience__title__headding">Connect people in digital life</h2>
        </div>
        <div className="work__right">
            <a className="banner__showcase" href="#">View all</a>
        </div>
        </div>

    <div className="main main1">
        <div className="work__item work__item">
        <img src="images/work1.png" alt=""/>
        <div className="work__item__text">
        <h2 className="work__item__headding">Mobile App</h2>
        <p className="work__item__pera">Read more</p>
        </div>
        </div>
        <div className="work__item1 work__item">
        <img src="images/work2.png" alt=""/>
        <div className="work__item__text">
            <h2 className="work__item__headding">eCommerce Solution</h2>
            <p className="work__item__pera">Read more</p>
        </div>
        </div>
        <div className="work__item1 work__item">
        <img src="images/work2.png" alt=""/>
        <div className="work__item__text">
        <h2 className="work__item__headding">eCommerce Solution</h2>
        <p className="work__item__pera">Read more</p>
        </div>
        </div>
        <div className="work__item work__item">
        <img src="images/work1.png" alt=""/>
        <div className="work__item__text">
            <h2 className="work__item__headding">Mobile App</h2>
            <p className="work__item__pera">Read more</p>
        </div>
        </div>
    </div>
    </div>
    </section>
  )
}

export default Work
