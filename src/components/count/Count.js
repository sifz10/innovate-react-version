import React from 'react'
import './count.css'

function Count() {
  return (
    <section className="countings">
    <img className="counting__shape" src="./images/counting__shape.png" alt="counting__shape" />
    <img className="counting__shape1" src="./images/counting__shape1.png" alt="counting__shape" />
    <div className="container">
        <div className="main">
        <div className="counting__left">
            <div className="main1">
            <div className="counting__item">
                <h3 className="counting__item__headding">19+</h3>
                <h4 className="counting__item__sub_headding">Total top service</h4>
            </div>
            <div className="counting__item">
                <h3 className="counting__item__headding">27+</h3>
                <h4 className="counting__item__sub_headding">Total top service</h4>
            </div>
            <div className="counting__item">
                <h3 className="counting__item__headding">98%</h3>
                <h4 className="counting__item__sub_headding">Total top service</h4>
            </div>
            <div className="counting__item">
                <h3 className="counting__item__headding">1,458</h3>
                <h4 className="counting__item__sub_headding">Total top service</h4>
            </div>
            </div>
        </div>
        <div className="counting__right">
            <h2 className="counting__headding">The hundred of completed works still counting</h2>
            <p className="counting__pera">Through strategy, design, and planning we build brand identities that connect with your Nesi. We then fine-tune a marketing plan that allows us to laser focus and target your audience through the right channels.</p>
            <a className="banner__showcase" href="#">More about us</a>
        </div>
        </div>
    </div>
    </section>
  )
}

export default Count;
