import React, { useState, useEffect } from "react";
import './Slider.css';
import home16 from './home16.avif'
import i46 from './i46.jpg'
import i47 from './i47.jpg'
import i48 from './i48.jpeg'

export default function PagesSlider16() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideCount = 4; // Number of slides

  const updateSlidePosition = () => {
    const slides16 = document.querySelector('.slides16');
    slides16.style.transform = `translateX(-${currentIndex * 100}%)`;
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
      <div className="slides16">
        <div className="slide">
          <img src={home16} alt="Slide 1" />
        </div>
        <div className="slide">
          <img src={i46} alt="Slide 2" />
        </div>
        <div className="slide">
          <img src={i47} alt="Slide 3" />
        </div>
        <div className="slide">
          <img src={i48} alt="Slide 4" />
        </div>
      </div>
      <div className="navigation">
        <button className="nav-btn" id="prev" onClick={handlePrevClick}>❮</button>
        <button className="nav-btn" id="next" onClick={handleNextClick}>❯</button>
      </div>
    </div>
  );
}
