import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'


function Header() {
  return (
    <header>
      <div className='logo_container'>
        <img src= {require("../../images/logo_kaza.png")}/>
      </div>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about-us">A propos de nous</Link>
      </nav>
      
    </header>
  )
}

export default Header