import React, { useState, useEffect } from "react";
import './Slider.css';
import home10 from './home10.avif'
import i28 from './i28.webp'
import i29 from './i29.jpg'
import i30 from './i30.jpg'

export default function PagesSlider10() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideCount = 4; // Number of slides

  const updateSlidePosition = () => {
    const slides10 = document.querySelector('.slides10');
    slides10.style.transform = `translateX(-${currentIndex * 100}%)`;
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
      <div className="slides10">
        <div className="slide">
          <img src={home10} alt="Slide 1" />
        </div>
        <div className="slide">
          <img src={i28} alt="Slide 2" />
        </div>
        <div className="slide">
          <img src={i29} alt="Slide 3" />
        </div>
        <div className="slide">
          <img src={i30} alt="Slide 4" />
        </div>
      </div>
      <div className="navigation">
        <button className="nav-btn" id="prev" onClick={handlePrevClick}>❮</button>
        <button className="nav-btn" id="next" onClick={handleNextClick}>❯</button>
      </div>
    </div>
  );
}
