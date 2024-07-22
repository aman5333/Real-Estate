import React, { useState, useEffect } from "react";
import './Slider.css';
import home3 from './home3.jpg'
import i7 from './i7.jpg'
import i8 from './i8.jpg'
import i9 from './i9.webp'

export default function PagesSlider3() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideCount = 4; // Number of slides

  const updateSlidePosition = () => {
    const slides3 = document.querySelector('.slides3');
    slides3.style.transform = `translateX(-${currentIndex * 100}%)`;
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
      <div className="slides3">
        <div className="slide">
          <img src={home3} alt="Slide 1" />
        </div>
        <div className="slide">
          <img src={i7} alt="Slide 2" />
        </div>
        <div className="slide">
          <img src={i8} alt="Slide 3" />
        </div>
        <div className="slide">
          <img src={i9} alt="Slide 4" />
        </div>
      </div>
      <div className="navigation">
        <button className="nav-btn" id="prev" onClick={handlePrevClick}>❮</button>
        <button className="nav-btn" id="next" onClick={handleNextClick}>❯</button>
      </div>
    </div>
  );
}
