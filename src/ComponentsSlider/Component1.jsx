import React from 'react'
import '../styles/comp1Style.css'

//импорт бактерий
import bact_blue from '../image/first_page/back1.png'
import pink_sperm1 from '../image/first_page/pink_sperm_1.png'
import pink_sperm2 from '../image/first_page/pink_sperm_2.png'
import cell_1 from '../image/first_page/cell_1.png'
import cell_passive from '../image/first_page/cell_passive.png'
import cell_2 from '../image/first_page/cell_2.png'
import cell_thorns from '../image/first_page/cell_thorns.png'

const Component1 = ({nextSlide}) => {
  return (
    <>
    <img className="bact_first_1" src={bact_blue}/>
    <img className='cell_passive_first_2' src={cell_passive}></img>
    <img className='cell_first_3' src={cell_2}></img>
    <img className='cell_thorns' src={cell_thorns}></img>

    <div className='first_slide'>
      
      <p className='first_slide_text_hello'>Привет,</p>
      <p className='first_slide_text'>Это <b>не</b> <img className='pink_sperm_fisrt_1' src={pink_sperm1}></img> <br/> коммерческое <br/> </p>
      <div className='last_string'>
        <p className='first_slide_text'>задание</p>
        <button onClick={nextSlide} className='nav_btn_next'>
            <div className='icon_btn'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
            <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></div><div>Что дальше?</div>
        </button>
      </div>
    </div>
    <img className='cell_first_2' src={cell_2}></img>
    <img className='pink_sperm_fisrt_2' src={pink_sperm2}></img>
    <img className='cell_passive_first_1' src={cell_passive}></img>
    <img className='cell_first_1' src={cell_1}></img>
    </>
  )
}

export default Component1
