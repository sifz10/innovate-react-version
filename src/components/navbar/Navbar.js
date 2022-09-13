import React from 'react'
import './navbar.css';
import Navitem from '../reuseable/menu/Navitem';
import Button from '../reuseable/button/Button';

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
            <Navitem title="Home" link="https://gg.com/"/>
            <Navitem title="About" link="https://gg.com/"/>
            <Navitem title="Service" link="https://gg.com/"/>
            <Navitem title="Portfolio" link="https://gg.com/"/>
            <Navitem title="Price" link="https://gg.com/"/>
            <Navitem title="Blog" link="https://gg.com/"/>
            </ul>
        </div>
        <div className="nav__contact">
            <Button title="Contact Us"/>
        </div>
        </div>
        </div>
    </nav>
  )
}

export default Navbar
