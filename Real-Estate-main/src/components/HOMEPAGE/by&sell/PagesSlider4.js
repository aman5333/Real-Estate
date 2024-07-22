import React, { useState, useEffect } from "react";
import './Slider.css';
import home4 from './home4.jpg'
import i10 from './i10.jpg'
import i11 from './i11.jpg'
import i12 from './i12.jpg'

export default function PagesSlider4() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideCount = 4; // Number of slides

  const updateSlidePosition = () => {
    const slides4 = document.querySelector('.slides4');
    slides4.style.transform = `translateX(-${currentIndex * 100}%)`;
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
      <div className="slides4">
        <div className="slide">
          <img src={home4} alt="Slide 1" />
        </div>
        <div className="slide">
          <img src={i10} alt="Slide 2" />
        </div>
        <div className="slide">
          <img src={i11} alt="Slide 3" />
        </div>
        <div className="slide">
          <img src={i12} alt="Slide 4" />
        </div>
      </div>
      <div className="navigation">
        <button className="nav-btn" id="prev" onClick={handlePrevClick}>❮</button>
        <button className="nav-btn" id="next" onClick={handleNextClick}>❯</button>
      </div>
    </div>
  );
}
