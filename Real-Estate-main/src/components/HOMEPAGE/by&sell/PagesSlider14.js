import React, { useState, useEffect } from "react";
import './Slider.css';
import home14 from './home14.jpg'
import i40 from './i40.webp'
import i41 from './i41.jpg'
import i42 from './i42.jpg'

export default function PagesSlider14() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideCount = 4; // Number of slides

  const updateSlidePosition = () => {
    const slides14 = document.querySelector('.slides14');
    slides14.style.transform = `translateX(-${currentIndex * 100}%)`;
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
      <div className="slides14">
        <div className="slide">
          <img src={home14} alt="Slide 1" />
        </div>
        <div className="slide">
          <img src={i40} alt="Slide 2" />
        </div>
        <div className="slide">
          <img src={i41} alt="Slide 3" />
        </div>
        <div className="slide">
          <img src={i42} alt="Slide 4" />
        </div>
      </div>
      <div className="navigation">
        <button className="nav-btn" id="prev" onClick={handlePrevClick}>❮</button>
        <button className="nav-btn" id="next" onClick={handleNextClick}>❯</button>
      </div>
    </div>
  );
}
