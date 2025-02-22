import React,{useState,} from 'react'
import SubSlider from '../SubSlider/SubSlider'
import '../styles/comp3Style.css'

import plate from '../image/thirth_page/plate.png'
import calendar from '../image/thirth_page/calendar.png'
import bottle from '../image/thirth_page/bottle.png'


const Component3 = () => {
  const [showModal,setshowModal]=useState(false);

  return (
    <div className='thirth_slide_container'>
      <div className='thirth_slide_bottle_container'>
        <img className='bottle_image' src={bottle}></img>
      </div>
      <div className='thirth_slide_block_container'>
        <div className='thirth_slide_text'>
          <p className='key_word'>Ключевое сообщение</p>
          <p className='brand_word'>BRAND<b>XY</b></p>
        </div>
        <div className='base_blocks'>
          <div className='plate block'>
            <img className='block_image' src={plate}></img>
            <p className='text_1_block'>
              Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus vesibulum lorem sed risus ultricies  
            </p>
          </div>
          <div className='calendar block'>
            <img className='block_image' src={calendar}></img>
            <p className='text_1_block'>
              A arcu <br/> cursus vitae
            </p>
          </div>
          <div className='btn_modal'>
            <button onClick={()=>{setshowModal(true)}} className='more_info'><div className='icon_btn'>+</div>Подробнее</button>
          </div>
        </div>
      </div>
      <div className='modal_blocks' style={{display : showModal?"block" :"none"}}  >
          <button onClick={()=>(setshowModal(false))}>X</button>
          <SubSlider />
        </div>
    </div>
  )
}

export default Component3
