import React from 'react'
import './experience.css'

function Experience() {
  return (
        <section className="experiences">
            <div className="experience__title">
            <div className="container">
            <h4 className="experience__title__sub-headding">digital experience</h4>
            <h2 className="experience__title__headding">Connect people in digital life</h2>
            </div>
            </div>
            <div className="experience__round__shape">
            <div className="experience__small__round"></div>
            </div>
        <div className="main">
            <div className="experience__left" style={{ background : 'url(./images/ex-left.png) no-repeat center' }}>
            </div>
            <div className="experience__right">
            <h3 className="experience__headding">More than just an ad agency, we harness the tools of traditional and digital.</h3>
            <p className="experience__pera" >With over 25 years of experience, we have crafted thousands of strategic discovery process that enables us to peel back the layers which enable us to understand, connect, represent and dominate your market.</p>
            <a className="banner__showcase" href="#">More about us</a>
            <img className="experience__shape" src="./images/exrightshpe.png" alt="ex-shape"/>
        </div>
        </div>
        
        </section>
  )
}

export default Experience
