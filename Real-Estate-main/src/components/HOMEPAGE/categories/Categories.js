import React from 'react'
import './Categories.css'
import PagesSliderN from './PagesSliderN'

const Categories = () => {
  return (
    <>
      <div className='categories__main'>
        <div className='categories__main__title'>Popular Categoriess</div>
        <div className='categories__main__content'>From luxurious waterfront estates to charming urban condos, we have something to suit every lifestyle and preference. Dive into the world of suburban tranquility with our spacious single-family homes or embrace the convenience of city living with our vibrant downtown properties.</div>
        <div className='categories__slider'>
          <PagesSliderN/>
       
        </div>
      </div>
    </>
  )
}

export default Categories
