import React from 'react'
import './Header.css'

const Header = ({returnFirstSlide}) => {
  return (
    <nav className='navigation'>
      <button onClick={returnFirstSlide}>Домик</button>
    </nav>
  )
}

export default Header
