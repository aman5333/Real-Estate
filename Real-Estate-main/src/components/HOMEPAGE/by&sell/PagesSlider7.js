import React, { useState, useEffect } from "react";
import './Slider.css';
import home7 from './home7.jpg'
import i19 from './i19.jpg'
import i20 from './i20.avif'
import i21 from './i21.jpg'

export default function PagesSlider7() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideCount = 4; // Number of slides

  const updateSlidePosition = () => {
    const slides7 = document.querySelector('.slides7');
    slides7.style.transform = `translateX(-${currentIndex * 100}%)`;
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
      <div className="slides7">
        <div className="slide">
          <img src={home7} alt="Slide 1" />
        </div>
        <div className="slide">
          <img src={i19} alt="Slide 2" />
        </div>
        <div className="slide">
          <img src={i20} alt="Slide 3" />
        </div>
        <div className="slide">
          <img src={i21} alt="Slide 4" />
        </div>
      </div>
      <div className="navigation">
        <button className="nav-btn" id="prev" onClick={handlePrevClick}>❮</button>
        <button className="nav-btn" id="next" onClick={handleNextClick}>❯</button>
      </div>
    </div>
  );
}
