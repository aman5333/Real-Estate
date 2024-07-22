import React, { useState, useEffect } from "react";
import './Slider.css';
import home11 from './home11.jpg'
import i31 from './i31.jpg'
import i32 from './i32.jpg'
import i33 from './i33.jpg'

export default function PagesSlider11() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideCount = 4; // Number of slides

  const updateSlidePosition = () => {
    const slides11 = document.querySelector('.slides11');
    slides11.style.transform = `translateX(-${currentIndex * 100}%)`;
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
      <div className="slides11">
        <div className="slide">
          <img src={home11} alt="Slide 1" />
        </div>
        <div className="slide">
          <img src={i31} alt="Slide 2" />
        </div>
        <div className="slide">
          <img src={i32} alt="Slide 3" />
        </div>
        <div className="slide">
          <img src={i33} alt="Slide 4" />
        </div>
      </div>
      <div className="navigation">
        <button className="nav-btn" id="prev" onClick={handlePrevClick}>❮</button>
        <button className="nav-btn" id="next" onClick={handleNextClick}>❯</button>
      </div>
    </div>
  );
}
