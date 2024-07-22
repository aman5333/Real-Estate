import React from 'react'
import './Header.css'
import video from './headervideo.mp4'
import Homesetion from '../homesection/Homesection.js';
import Bychoose from '../bychoose/Bychoose.js';
import Categories from '../categories/Categories.js';
import BandS from '../by&sell/BandS.js';
import About from '../homeabout/About.js';
 


const Header = () => {
  return (
    <>
      <div className='header__video'>
          <video src={video} autoPlay loop muted></video>
          <div className='header__para'>
            <h1>Top Real Estate
            Listings in San Jose</h1>
          </div>
      </div>
      <About/>
      <Homesetion/>
      <Bychoose/>
      <Categories/>
      <BandS/>
    </>
  )
}

export default Header
