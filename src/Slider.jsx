import React,{useState,useEffect} from 'react'

import Component1 from './ComponentsSlider/Component1'
import Component2 from './ComponentsSlider/Component2'
import Component3 from './ComponentsSlider/Component3'

import './styles/sliderStyle.css'



//массив компонентов для слайдера
const components = [Component1,Component2,Component3]

const Slider = () => {
    // перелистывание
    const [currentIndex,setcurrentIndex]=useState(0);

    const nextSlide=()=>{
        setcurrentIndex((previousIndex)=>{
            return previousIndex+1
        })
    }

    const previousSlide=()=>{
        setcurrentIndex((previousIndex)=>{
            return previousIndex-1
        })
    }



    //отслеживание координат для свайпа
    const [XstartPosition,setXstartPosition]=useState(0);

    const handleTouchStart=(event)=>{
        setXstartPosition(event.touches[0].clientX);
    }

    const handleTouchEnd=(event)=>{
        const difference = XstartPosition - event.changedTouches[0].clientX ;
        if(difference>50){
            setXstartPosition(0);
            if(currentIndex!==2){
                nextSlide();
            }
        }
        else if(difference<-50){
            setXstartPosition(0);
            if(currentIndex!==0){
                previousSlide();
            }
        }
    }


    return (
        <div className='slider-container' onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <div className='slider'>
                <div className='slider-track' style={{ transform: `translateX(-${currentIndex * 100}vw)` }}>
                    {components.map((Component, index) => (
                    <div key={index} className='slide'>
                        <Component {...(index===0? {nextSlide}: {})}   />
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Slider
