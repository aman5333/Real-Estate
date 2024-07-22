import React, { useState, useEffect } from "react";
import './Slider.css';
import home13 from './home13.jpg'
import i37 from './i37.webp'
import i38 from './i38.jpg'
import i39 from './i39.jpg'

export default function PagesSlider13() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideCount = 4; // Number of slides

  const updateSlidePosition = () => {
    const slides13 = document.querySelector('.slides13');
    slides13.style.transform = `translateX(-${currentIndex * 100}%)`;
  };

  useEffect(() => {
    updateSlidePosition();
  }, [currentIndex]);

  const handlePrevClick = () => {
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : slideCount - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex(currentIndex < slideCount - 1 ? currentIndex + 1 : 0);
  };

  return (
    <div className="slider">
      <div className="slides13">
        <div className="slide">
          <img src={home13} alt="Slide 1" />
        </div>
        <div className="slide">
          <img src={i37} alt="Slide 2" />
        </div>
        <div className="slide">
          <img src={i38} alt="Slide 3" />
        </div>
        <div className="slide">
          <img src={i39} alt="Slide 4" />
        </div>
      </div>
      <div className="navigation">
        <button className="nav-btn" id="prev" onClick={handlePrevClick}>❮</button>
        <button className="nav-btn" id="next" onClick={handleNextClick}>❯</button>
      </div>
    </div>
  );
}
