import React, { useState, useEffect } from "react";
import './Slider.css';
import home12 from './home12.jpg'
import i34 from './i34.webp'
import i35 from './i35.jpg'
import i36 from './i36.avif'

export default function PagesSlider12() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideCount = 4; // Number of slides

  const updateSlidePosition = () => {
    const slides12 = document.querySelector('.slides12');
    slides12.style.transform = `translateX(-${currentIndex * 100}%)`;
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
      <div className="slides12">
        <div className="slide">
          <img src={home12} alt="Slide 1" />
        </div>
        <div className="slide">
          <img src={i34} alt="Slide 2" />
        </div>
        <div className="slide">
          <img src={i35} alt="Slide 3" />
        </div>
        <div className="slide">
          <img src={i36} alt="Slide 4" />
        </div>
      </div>
      <div className="navigation">
        <button className="nav-btn" id="prev" onClick={handlePrevClick}>❮</button>
        <button className="nav-btn" id="next" onClick={handleNextClick}>❯</button>
      </div>
    </div>
  );
}
