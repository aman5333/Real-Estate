import React, { useState, useEffect } from "react";
import './Slider.css';
import home6 from './home6.jpg'
import i16 from './i16.jpg'
import i17 from './i17.jpeg'
import i18 from './i18.jpeg'

export default function PagesSlider6() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideCount = 4; // Number of slides

  const updateSlidePosition = () => {
    const slides6 = document.querySelector('.slides6');
    slides6.style.transform = `translateX(-${currentIndex * 100}%)`;
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
      <div className="slides6">
        <div className="slide">
          <img src={home6} alt="Slide 1" />
        </div>
        <div className="slide">
          <img src={i16} alt="Slide 2" />
        </div>
        <div className="slide">
          <img src={i17} alt="Slide 3" />
        </div>
        <div className="slide">
          <img src={i18} alt="Slide 4" />
        </div>
      </div>
      <div className="navigation">
        <button className="nav-btn" id="prev" onClick={handlePrevClick}>❮</button>
        <button className="nav-btn" id="next" onClick={handleNextClick}>❯</button>
      </div>
    </div>
  );
}
