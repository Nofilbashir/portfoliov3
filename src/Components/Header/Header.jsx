import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
    <div className='Header'>
        <div className="header_left">
          <img src={require('../../Assets/logo.png')} alt="" />
        </div>
        <div className="header_right">
          <Link to="/">Home</Link>
          <Link to="/work">Works</Link>
          <Link to="/about">About-me</Link>
          <Link to="/contact">Contact</Link>
        </div>
    </div>
  )
}

export default Header