import React from 'react'
import "./banner.css"

function Banner() {
  return (
    <section className="banners" style={{ backgroundImage: 'url(../images/banner.png)' }} >
    <img className="banner__shape" src="./images/banner__shape.png" alt="banner__shape" />
    <img className="banner__bottom__shape" src="./images/banner__bottom_shape.png" alt="banner__bottom__shape" />
    <div className="banner__round__shape">
        <div className="banner__small__round"></div>
    </div>
    <div className="container">
        <div className="banner__text">
        <h1 className="banner__headding">We are a full range design agency</h1>
        <p className="banner__pera">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime.</p>
        <a className="banner__contact" href="#">Contact us</a>
        <a className="banner__showcase" href="#">showcase</a>
        </div>
    </div>
    </section>
  )
}

export default Banner
