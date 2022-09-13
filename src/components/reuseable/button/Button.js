import React from 'react'
import './button.css'

function Button(props) {
  return (
    <>
       <a className="nav__contact__link" href="#">{ props.title }</a>
    </>
  )
}

export default Button