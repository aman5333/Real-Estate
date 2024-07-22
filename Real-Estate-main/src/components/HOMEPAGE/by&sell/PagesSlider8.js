import React, { useState, useEffect } from "react";
import './Slider.css';
import home8 from './home8.avif'
import i22 from './i22.jpg'
import i23 from './i23.jpeg'
import i24 from './i24.jpg'

export default function PagesSlider8() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideCount = 4; // Number of slides

  const updateSlidePosition = () => {
    const slides8 = document.querySelector('.slides8');
    slides8.style.transform = `translateX(-${currentIndex * 100}%)`;
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
      <div className="slides8">
        <div className="slide">
          <img src={home8} alt="Slide 1" />
        </div>
        <div className="slide">
          <img src={i22} alt="Slide 2" />
        </div>
        <div className="slide">
          <img src={i23} alt="Slide 3" />
        </div>
        <div className="slide">
          <img src={i24} alt="Slide 4" />
        </div>
      </div>
      <div className="navigation">
        <button className="nav-btn" id="prev" onClick={handlePrevClick}>❮</button>
        <button className="nav-btn" id="next" onClick={handleNextClick}>❯</button>
      </div>
    </div>
  );
}
