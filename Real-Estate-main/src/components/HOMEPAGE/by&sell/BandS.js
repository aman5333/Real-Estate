// import React, { useState } from 'react'
import './BandS.css'
import seller from './seller.jpg'
import buyer from './buyer.jpg'
import { Link } from 'react-router-dom';

const BandS = () => {

      // let [name,setName] = useState()
        return (
    <>
      <div className='main__bands'>
        <div className='seller'>
          <div className='seller__section'>
          <p>FOR SELLERS</p>
          <h1>Are You Selling Your Home?</h1>
          <Link to='/Sell'><button className='bs__btn' >GET ESTIMATION</button></Link>
          </div>
          <img src={seller} alt='something went wrong'></img>
        </div>
        <div className='buyer'>
          <div className='buyer__section'>
            <p>FOR BUYERS</p>
            <h1>Are You Looking To Buy A Home?</h1>
            <Link to='/Buy'><button className='bs__btn'>SEARCH LISTINGS</button></Link>
          </div>
          <img src={buyer} alt='something went wrong'></img>
        </div>
      </div>
    </>
  )
}

export default BandS;
