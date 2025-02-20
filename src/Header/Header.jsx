import React from 'react'

const Header = ({returnFirstSlide}) => {
  return (
    <nav>
      <button onClick={returnFirstSlide}>Домик</button>
    </nav>
  )
}

export default Header
