import React, { useState, useEffect } from "react";
import './Slider.css';
import home5 from './home5.jpg'
import i13 from './i13.jpg'
import i14 from './i14.jpg'
import i15 from './i15.jpg'

export default function PagesSlider5() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideCount = 4; // Number of slides

  const updateSlidePosition = () => {
    const slides5 = document.querySelector('.slides5');
    slides5.style.transform = `translateX(-${currentIndex * 100}%)`;
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
      <div className="slides5">
        <div className="slide">
          <img src={home5} alt="Slide 1" />
        </div>
        <div className="slide">
          <img src={i13} alt="Slide 2" />
        </div>
        <div className="slide">
          <img src={i14} alt="Slide 3" />
        </div>
        <div className="slide">
          <img src={i15} alt="Slide 4" />
        </div>
      </div>
      <div className="navigation">
        <button className="nav-btn" id="prev" onClick={handlePrevClick}>❮</button>
        <button className="nav-btn" id="next" onClick={handleNextClick}>❯</button>
      </div>
    </div>
  );
}
