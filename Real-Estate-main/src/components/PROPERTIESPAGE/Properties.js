import React, { useEffect } from 'react'
import './Properties.css'
import AOS from "aos";
import "aos/dist/aos.css";
import PagesSlider from "../HOMEPAGE/by&sell/PagesSlider";
import PagesSlider2 from "../HOMEPAGE/by&sell/PagesSlider2";
import PagesSlider3 from "../HOMEPAGE/by&sell/PagesSlider3";
import PagesSlider4 from "../HOMEPAGE/by&sell/PagesSlider4";
import PagesSlider5 from "../HOMEPAGE/by&sell/PagesSlider5";
import PagesSlider6 from "../HOMEPAGE/by&sell/PagesSlider6";
import PagesSlider7 from "../HOMEPAGE/by&sell/PagesSlider7";
import PagesSlider8 from "../HOMEPAGE/by&sell/PagesSlider8";
import PagesSlider9 from "../HOMEPAGE/by&sell/PagesSlider9";
import PagesSlider10 from "../HOMEPAGE/by&sell/PagesSlider10";
import PagesSlider11 from "../HOMEPAGE/by&sell/PagesSlider11";
import PagesSlider12 from "../HOMEPAGE/by&sell/PagesSlider12";
import PagesSlider13 from "../HOMEPAGE/by&sell/PagesSlider13";
import PagesSlider14 from "../HOMEPAGE/by&sell/PagesSlider14";
import PagesSlider15 from "../HOMEPAGE/by&sell/PagesSlider15";
import PagesSlider16 from "../HOMEPAGE/by&sell/PagesSlider16";


const Properties = () => {
  useEffect(()=>{
    AOS.init({duration: "1000"});
  },[]);
  return (
    <>
     <div className='p__main'>
      <img src='https://images5.alphacoders.com/647/thumb-1920-647570.jpg' alt='something went wrong'></img>
      <h1 className='p__main__heading'>Top Real Estate</h1>
      <form className='p__form'>
        <div className='form__center'>
          <input type='text' className='p__input input1' placeholder='Enter yor Address,state,city,area pin code' ></input>
          <select className='p__dropdown'>
            <option>Commercial</option>  
            <option>Multi Family Houses</option>
            <option>Houses</option>
          </select>
          <select className='p__dropdown'>
            <option>Propert Status</option>
            <option>Active</option>
            <option>Open House</option>
            <option>Sold</option>
          </select>
        </div>
        <div className='form__center'>
          <input type='text' className='p__input input' placeholder="Enter Beds and Bathrooms"></input>
          <input type='text' className='p__input' placeholder='MLS#'></input>
          <select className='p__dropdown'>
            <option>Price Select</option>
            <option>5000$-10000$</option>
            <option>10000$-50000$</option>
          </select>
          <button className='p__btn'>Search Properties</button>
        </div>
      </form>
      </div> 
      <div className="buyer__page">
        <div className="buy__home" data-aos="zoom-in">
          <div className="buy__slider">
            <PagesSlider/>
          </div>
          <div className="buy__info">
            <div className="house__name">
              <p>Gorgeous studio for rent</p>
            </div>
            <div className="bedrooms">
              <span className="rooms">5 Bedrooms·6 Bathrooms·Size 190 ft2</span>
            </div>
            <div className="price">
              <span className="price__price">$ 770,000</span>
            </div>
          </div>
        </div>
        <div className="buy__home" data-aos="zoom-in">
          <div className="buy__slider">
            <PagesSlider2/>
          </div>
          <div className="buy__info">
            <div className="house__name">
              <p>Family house for sale</p>
            </div>
            <div className="bedrooms">
              <span className="rooms">2 Bedrooms·5 Bathrooms·Size 29,000 ft2</span>
            </div>
            <div className="price">
              <span className="price__price">$ 100,000</span>
            </div>
          </div>
        </div>
        <div className="buy__home" data-aos="zoom-in">
          <div className="buy__slider">
            <PagesSlider3/>
          </div>
          <div className="buy__info">
            <div className="house__name">
              <p>Townhouse for sale</p>
            </div>
            <div className="bedrooms">
              <span className="rooms">3 Bedrooms·4 Bathrooms·Size 20,000 ft2</span>
            </div>
            <div className="price">
              <span className="price__price">$ 210,000</span>
            </div>
          </div>
        </div>
        <div className="buy__home" data-aos="zoom-in">
          <div className="buy__slider">
            <PagesSlider4/>
          </div>
          <div className="buy__info">
            <div className="house__name">
              <p>Villa with panoramic view</p>
            </div>
            <div className="bedrooms">
              <span className="rooms">4 Bedrooms·5 Bathrooms·Size 24,000 ft2</span>
            </div>
            <div className="price">
              <span className="price__price">$ 5,500,000</span>
            </div>
          </div>
        </div>
        <div className="buy__home" data-aos="zoom-in">
          <div className="buy__slider">
            <PagesSlider5/>
          </div>
          <div className="buy__info">
            <div className="house__name">
              <p>Modern penthouse apartment</p>
            </div>
            <div className="bedrooms">
              <span className="rooms">5 Bedrooms·6 Bathrooms·Size 25,000 ft2</span>
            </div>
            <div className="price">
              <span className="price__price">$ 2,000 / month</span>
            </div>
          </div>
        </div>
        <div className="buy__home" data-aos="zoom-in">
          <div className="buy__slider">
            <PagesSlider6/>
          </div>
          <div className="buy__info">
            <div className="house__name">
              <p>Modern office for rent</p>
            </div>
            <div className="bedrooms">
              <span className="rooms">3 Bedrooms·4 Bathrooms·Size 27,000 ft2</span>
            </div>
            <div className="price">
              <span className="price__price">$ 1,600 / month</span>
            </div>
          </div>
        </div>
        <div className="buy__home" data-aos="zoom-in">
          <div className="buy__slider">
            <PagesSlider7/>
          </div>
          <div className="buy__info">
            <div className="house__name">
              <p>Apartment with ocean view</p>
            </div>
            <div className="bedrooms">
              <span className="rooms">4 Bedrooms·5 Bathrooms·Size 22,000 ft2</span>
            </div>
            <div className="price">
              <span className="price__price">$ 1,500,000</span>
            </div>
          </div>
        </div>
        <div className="buy__home" data-aos="zoom-in">
          <div className="buy__slider">
            <PagesSlider8/>
          </div>
          <div className="buy__info">
            <div className="house__name">
              <p>Spacious home for sale</p>
            </div>
            <div className="bedrooms">
              <span className="rooms">6 Bedrooms·7 Bathrooms·Size 30,000 ft2</span>
            </div>
            <div className="price">
              <span className="price__price">$ 800,000</span>
            </div>
          </div>
        </div>
        <div className="buy__home" data-aos="zoom-in">
          <div className="buy__slider">
            <PagesSlider9/>
          </div>
          <div className="buy__info">
            <div className="house__name">
              <p>Modern condo for rent</p>
            </div>
            <div className="bedrooms">
              <span className="rooms">4 Bedrooms·5 Bathrooms·Size 23,000 ft2</span>
            </div>
            <div className="price">
              <span className="price__price">$ 500 / month</span>
            </div>
          </div>
        </div>
        <div className="buy__home" data-aos="zoom-in">
          <div className="buy__slider">
            <PagesSlider10/>
          </div>
          <div className="buy__info">
            <div className="house__name">
              <p>Apartment space for rent</p>
            </div>
            <div className="bedrooms">
              <span className="rooms">2 Bedrooms·3 Bathrooms·Size 10,000 ft2</span>
            </div>
            <div className="price">
              <span className="price__price">$ 800 / month</span>
            </div>
          </div>
        </div>
        <div className="buy__home" data-aos="zoom-in">
          <div className="buy__slider">
            <PagesSlider11/>
          </div>
          <div className="buy__info">
            <div className="house__name">
              <p>Modern penthouse apartment</p>
            </div>
            <div className="bedrooms">
              <span className="rooms">2 Bedrooms·2 Bathrooms·Size 250 ft2</span>
            </div>
            <div className="price">
              <span className="price__price">$ 2,000 / month</span>
            </div>
          </div>
        </div>
        <div className="buy__home" data-aos="zoom-in">
          <div className="buy__slider">
            <PagesSlider12/>
          </div>
          <div className="buy__info">
            <div className="house__name">
              <p>Modern office for rent</p>
            </div>
            <div className="bedrooms">
              <span className="rooms">2 Bedrooms·3 Bathrooms·Size 220 ft2</span>
            </div>
            <div className="price">
              <span className="price__price">$ 1,600 / month</span>
            </div>
          </div>
        </div>
        <div className="buy__home" data-aos="zoom-in">
          <div className="buy__slider">
            <PagesSlider13/>
          </div>
          <div className="buy__info">
            <div className="house__name">
              <p>Apartment with ocean view</p>
            </div>
            <div className="bedrooms">
              <span className="rooms">3 Bedrooms·2 Bathrooms·Size 230 ft2</span>
            </div>
            <div className="price">
              <span className="price__price">$ 1,500,000</span>
            </div>
          </div>
        </div>
        <div className="buy__home" data-aos="zoom-in">
          <div className="buy__slider">
            <PagesSlider14/>
          </div>
          <div className="buy__info">
            <div className="house__name">
              <p>Spacious home for sale</p>
            </div>
            <div className="bedrooms">
              <span className="rooms">4 Bedrooms·4 Bathrooms·Size 255 ft2</span>
            </div>
            <div className="price">
              <span className="price__price">$ 800,000</span>
            </div>
          </div>
        </div>
        <div className="buy__home" data-aos="zoom-in">
          <div className="buy__slider">
            <PagesSlider15/>
          </div>
          <div className="buy__info">
            <div className="house__name">
              <p>Modern condo for rent</p>
            </div>
            <div className="bedrooms">
              <span className="rooms">5 Bedrooms·4 Bathrooms·Size 2560 ft2</span>
            </div>
            <div className="price">
              <span className="price__price">$ 500 / month</span>
            </div>
          </div>
        </div>
        <div className="buy__home" data-aos="zoom-in">
          <div className="buy__slider">
            <PagesSlider16/>
          </div>
          <div className="buy__info">
            <div className="house__name">
              <p>Villa with panoramic view</p>
            </div>
            <div className="bedrooms">
              <span className="rooms">3 Bedrooms·4 Bathrooms·Size 240 ft2</span>
            </div>
            <div className="price">
              <span className="price__price">$ 500 / month</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Properties;
