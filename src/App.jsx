import React, { useState } from "react";
import Slider from "./Slider";
import Header from "./Header/Header";
import "./styles/App.css";

function App() {
  const [currentIndex, setcurrentIndex] = useState(0);
  const [showModal, setshowModal] = useState(false);
  // перелистывание
  const nextSlide = () => {
    if (!showModal) {
      setcurrentIndex((previousIndex) => {
        return previousIndex + 1;
      });
    }
  };

  const previousSlide = () => {
    if (!showModal) {
      setcurrentIndex((previousIndex) => {
        return previousIndex - 1;
      });
    }
  };

  const returnFirstSlide = () => {
    if (!showModal) {
      setcurrentIndex(0);
    }
  };

  return (
    <div className="app">
      <Header returnFirstSlide={returnFirstSlide} />
      <Slider
        nextSlide={nextSlide}
        previousSlide={previousSlide}
        currentIndex={currentIndex}
        showModal={showModal}
        setshowModal={setshowModal}
      />
    </div>
  );
}

export default App;
