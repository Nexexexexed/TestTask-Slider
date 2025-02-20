import React,{useState} from 'react';
import Slider from './Slider';
import Header from './Header/Header'
import './styles/App.css'


function App() {
    const [currentIndex,setcurrentIndex]=useState(0);

    // перелистывание
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
    
    const returnFirstSlide=()=>{
        setcurrentIndex(0)
    }
  return (
        <div className='app'>
            <Header returnFirstSlide={returnFirstSlide} />
            <Slider  nextSlide={nextSlide} previousSlide={previousSlide} currentIndex={currentIndex}/>
        </div>
    );
}

export default App;