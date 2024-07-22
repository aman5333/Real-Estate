import React, { useState, useEffect } from "react";
import './Slider.css';
import home2 from './home2.jpg'
import i4 from './i4.png'
import i5 from './i5.jpeg'
import i6 from './i6.jpg'

export default function PagesSlider2() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideCount = 4; // Number of slides

  const updateSlidePosition = () => {
    const slides2 = document.querySelector('.slides2');
    slides2.style.transform = `translateX(-${currentIndex * 100}%)`;
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
      <div className="slides2">
        <div className="slide">
          <img src={home2} alt="Slide 1" />
        </div>
        <div className="slide">
          <img src={i4} alt="Slide 2" />
        </div>
        <div className="slide">
          <img src={i5} alt="Slide 3" />
        </div>
        <div className="slide">
          <img src={i6} alt="Slide 4" />
        </div>
      </div>
      <div className="navigation">
        <button className="nav-btn" id="prev" onClick={handlePrevClick}>❮</button>
        <button className="nav-btn" id="next" onClick={handleNextClick}>❯</button>
      </div>
    </div>
  );
}
