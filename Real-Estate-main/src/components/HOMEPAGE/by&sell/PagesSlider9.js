import React, { useState, useEffect } from "react";
import './Slider.css';
import home9 from './home9.jpg'
import i25 from './i25.jpg'
import i26 from './i26.webp'
import i27 from './i27.webp'

export default function PagesSlider9() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideCount = 4; // Number of slides

  const updateSlidePosition = () => {
    const slides9 = document.querySelector('.slides9');
    slides9.style.transform = `translateX(-${currentIndex * 100}%)`;
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
      <div className="slides9">
        <div className="slide">
          <img src={home9} alt="Slide 1" />
        </div>
        <div className="slide">
          <img src={i25} alt="Slide 2" />
        </div>
        <div className="slide">
          <img src={i26} alt="Slide 3" />
        </div>
        <div className="slide">
          <img src={i27} alt="Slide 4" />
        </div>
      </div>
      <div className="navigation">
        <button className="nav-btn" id="prev" onClick={handlePrevClick}>❮</button>
        <button className="nav-btn" id="next" onClick={handleNextClick}>❯</button>
      </div>
    </div>
  );
}
