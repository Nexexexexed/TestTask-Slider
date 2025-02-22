import React, { useState } from "react";
import "./SubSlider.css";

const slides = [
  [
    { number: "01", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
    { number: "02", text: "Faucibus pulvinar elementum integer enim" },
    { number: "03", text: "Faucibus pulvinar elementum integer enim" }
  ],
  [
    { number: "04", text: "Mi bibendum neque egestas congue quisque egestas diam" },
    { number: "05", text: "Venetis lectus magna fringilla urna" },
    { number: "06", text: "Venetis lectus magna fringilla urna" }
  ]
];

const SubSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="subSlider_advantage">
      <div className="text_subSlider">
        {slides[currentIndex].map((slide, index) => (
          <div key={index} className="subSlider">
            <span className="subSlider_number">{slide.number}</span>
            <p className="subSlider_text">{slide.text}</p>
          </div>
        ))}
      </div>
      <div className="dots_button">
        <button className="navigation_arrow_left" onClick={prevSlide}>&lt;</button>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
        <button className="navigation_arrow_right" onClick={nextSlide}>&gt;</button>
      </div>
    </div>
  );
};

export default SubSlider;
