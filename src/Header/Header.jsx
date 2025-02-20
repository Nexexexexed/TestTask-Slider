import React from 'react'
import './Header.css'
import nav_image from '../image/nav.png'

const Header = ({returnFirstSlide}) => {
  return (
    <nav className='navigation'>
      <button className="nav_btn_head" onClick={returnFirstSlide}><img src={nav_image}/></button>
    </nav>
  )
}

export default Header
