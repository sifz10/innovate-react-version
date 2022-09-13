import React from 'react'
import './navitem.css'

const Navitem = function Navitem(props) {
  return (
    <>
      <li className="nav__list"><a className="nav__link" href={props.link}> {props.title} <i className="fa-solid fa-angle-down"></i></a></li>
    </>
  )
}

export default Navitem
