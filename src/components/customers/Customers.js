import React from 'react'
import './customers.css'

function Customers() {
  return (
    <section className="customers">
    <div className="container">
    <div className="main">
        <div className="customer__left">
        <h2 className="customer__headding">Our customer say</h2>
        <div className="main2">
            <img src="images/customer1.png" alt=""/>
            <img src="images/customer1.png" alt=""/>
            <img src="images/customer1.png" alt=""/>
            <img src="images/customer1.png" alt=""/>
        </div>
        <p className="customer__pera">As a leading digital platform in Paris, we look to engage with our clients beyond the conventional design and development agency relationship, becoming a partner to the people and companies we work with.</p>
        <div className="customer__main3">
            <h3 className="customer__sub_headding">Jonathon</h3>
            <div className="left__arrow">
            <i className="fa-solid fa-angle-left"></i>
            </div>
            <div className="right__arrow">
            <i className="fa-solid fa-angle-right"></i>
            </div>
        </div>
        </div>
        <div className="customer__right">
        <img src="images/custoemr5.png" alt=""/>
        </div>
    </div>
    </div>
    </section>
  )
}

export default Customers
