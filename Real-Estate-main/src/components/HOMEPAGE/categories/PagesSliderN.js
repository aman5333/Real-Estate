import React, { useState, useEffect } from "react";
import '../by&sell/Slider.css';
import home7 from '../by&sell/home7.jpg'
import i19 from '../by&sell/i19.jpg'
import i20 from '../by&sell/i20.avif'
import i21 from '../by&sell/i21.jpg'

export default function PagesSliderN() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideCount = 4; // Number of slides

  const updateSlidePosition = () => {
    const slidesN = document.querySelector('.slidesN');
    slidesN.style.transform = `translateX(-${currentIndex * 100}%)`;
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
    <div className="sliderN">
      <div className="slidesN">
        <div className="slideN">
          <img src={home7} alt="Slide 1" />
        </div>
        <div className="slideN">
          <img src={i19} alt="Slide 2" />
        </div>
        <div className="slideN">
          <img src={i20} alt="Slide 3" />
        </div>
        <div className="slideN">
          <img src={i21} alt="Slide 4" />
        </div>
      </div>
      <div className="navigationN">
        <button className="nav-btn" id="prev" onClick={handlePrevClick}>❮</button>
        <button className="nav-btn" id="next" onClick={handleNextClick}>❯</button>
      </div>
    </div>
  );
}
