import React, { useState, useEffect } from "react";
import './Slider.css';
import home15 from './home15.jpg'
import i43 from './i43.jpg'
import i44 from './i44.webp'
import i45 from './i45.avif'

export default function PagesSlider15() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideCount = 4; // Number of slides

  const updateSlidePosition = () => {
    const slides15 = document.querySelector('.slides15');
    slides15.style.transform = `translateX(-${currentIndex * 100}%)`;
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
      <div className="slides15">
        <div className="slide">
          <img src={home15} alt="Slide 1" />
        </div>
        <div className="slide">
          <img src={i43} alt="Slide 2" />
        </div>
        <div className="slide">
          <img src={i44} alt="Slide 3" />
        </div>
        <div className="slide">
          <img src={i45} alt="Slide 4" />
        </div>
      </div>
      <div className="navigation">
        <button className="nav-btn" id="prev" onClick={handlePrevClick}>❮</button>
        <button className="nav-btn" id="next" onClick={handleNextClick}>❯</button>
      </div>
    </div>
  );
}
