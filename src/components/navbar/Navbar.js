import React from 'react'
import './navbar.css';

function Navbar() {
  return (
    <nav>
        <div className="container">
        <div className="main">
        <div className="logo">
            <img src="./images/Logo.png" alt="logo"/>
        </div>
        <div className="nav-item">
            <ul className="nav__ul">
            <li className="nav__list"><a className="nav__link" href="#">Home <i className="fa-solid fa-angle-down"></i></a></li>
            <li className="nav__list"><a className="nav__link" href="#">About <i className="fa-solid fa-angle-down"></i></a></li>
            <li className="nav__list"><a className="nav__link" href="#">Service <i className="fa-solid fa-angle-down"></i></a></li>
            <li className="nav__list"><a className="nav__link" href="#">Portfolio <i className="fa-solid fa-angle-down"></i></a></li>
            <li className="nav__list"><a className="nav__link" href="#">Price <i className="fa-solid fa-angle-down"></i></a></li>
            <li className="nav__list"><a className="nav__link" href="#">Blog <i className="fa-solid fa-angle-down"></i></a></li>
            </ul>
        </div>
        <div className="nav__contact">
            <a className="nav__contact__link" href="#">Contact Us</a>
        </div>
        </div>
        </div>
    </nav>
  )
}

export default Navbar
