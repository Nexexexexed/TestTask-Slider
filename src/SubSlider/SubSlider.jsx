import React from 'react'

const SubSlider = () => {
  return (
    <div className='slider_advantage'>
        <div className='text_slide'>
            <div className='text_first_slide'>
                Первый текс
            </div>
            <div className='text_second_slide'>
                Второй текст
            </div> 
        </div>
        <div className='dots_button'>
            <div className="navigation_arrow">
                <button className='navigation_arrow_left'>
                лево
                </button>
                <button className='navigation_arrow_rigth'>
                право
                </button>  
            </div>
        </div>
    </div>
  )
}

export default SubSlider
