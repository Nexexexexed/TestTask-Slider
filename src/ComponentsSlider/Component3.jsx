import React,{useState,} from 'react'
import SubSlider from '../SubSlider/SubSlider'
import '../styles/comp3Style.css'

const Component3 = () => {
  const [showModal,setshowModal]=useState(false);

  return (
    <div>
      <div className=''>
        <div className='spray_bubble'>
          пузырьки и спрей
        </div>
        <div className='base_blocks'>
          <div className='eat'>
            Тарелка
          </div>
          <div className='calendar'>
            Календарь
          </div>
          <div className='btn_modal'>
            <button onClick={()=>{setshowModal(true)}}>+</button>
          </div>
        </div>
        <div className='modal_blocks' style={{display : showModal?"block" :"none"}}  >
          <button onClick={()=>(setshowModal(false))}>X</button>
          <SubSlider />
        </div>
      </div>
    </div>
  )
}

export default Component3
