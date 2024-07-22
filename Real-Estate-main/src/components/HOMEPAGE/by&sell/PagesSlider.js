import React, { useState, useEffect } from "react";
import './Slider.css';
import home1 from './home1.jpeg'
import i1 from './i1.jpeg'
import i2 from './i2.jpg'
import i3 from './i3.avif'

export default function PagesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideCount = 4; // Number of slides

  const updateSlidePosition = () => {
    const slides1 = document.querySelector('.slides1');
    slides1.style.transform = `translateX(-${currentIndex * 100}%)`;
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
      <div className="slides1">
        <div className="slide">
          <img src={home1} alt="Slide 1" />
        </div>
        <div className="slide">
          <img src={i1} alt="Slide 2" />
        </div>
        <div className="slide">
          <img src={i2} alt="Slide 3" />
        </div>
        <div className="slide">
          <img src={i3} alt="Slide 4" />
        </div>
      </div>
      <div className="navigation">
        <button className="nav-btn" id="prev" onClick={handlePrevClick}>❮</button>
        <button className="nav-btn" id="next" onClick={handleNextClick}>❯</button>
      </div>
    </div>
  );
}
