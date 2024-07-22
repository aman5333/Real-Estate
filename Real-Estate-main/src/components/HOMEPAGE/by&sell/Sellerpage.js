import "./Pages.css";
import seller from "./sellerpic.jpg";
import sellerpic from "./sellerpagepic.avif";
import React, { useState } from 'react';
import axios from 'axios'

const Sellerpage = () => {

  let [firstName, setFristName] = useState();
  let [lastName, setLastName] = useState();
  let [email, setEmail] = useState();
  let [phoneNumber, setNumber] = useState();
  let [country, setCountry] = useState();
  let [state, setState] = useState();
  let [city, setCity] = useState();
  let [address, setAddress] = useState();
  let [message, setMessage] = useState();
  let [zip, setZip] = useState();


  const handle = ()=>{
    axios.post('http://localhost:4000/signup',{firstName,lastName,email,phoneNumber,country,state,city,address,zip,message})
  }


  return (
    <>
      <div className="sell__main">
        <div className="seller__heading">
          <h1>Do want to know what's your property worth?</h1>
        </div>
        <img src={seller} alt="something went wrong"></img>
      </div>
      <div className="seller__main">
        <img src={sellerpic} alt="something went wrong"></img>
        <div className="seller__form">
          <img src={sellerpic} alt="something went wrong"></img>
        </div>
        <div className="form__div">
        <form onSubmit={handle}>
            <h1>Get Your Home Estimation</h1>
            <div className="form__name">
              <div className="input-box">
                <label>First Name*</label>
                <input type="text" placeholder="First Name" required onChange={(e)=>setFristName(e.target.value)}></input>
              </div>
              <div className="input-box">
                <label>Last Name*</label>
                <input type="text" placeholder="Last Name" required onChange={(e)=>setLastName(e.target.value)}></input>
              </div>
            </div>
            <div className="form__number">
              <div className="input-box">
                <label>Email*</label>
                <input type="text" placeholder="Email" required onChange={(e)=>setEmail(e.target.value)}></input>
              </div>
              <div className="input-box">
                <label>Phone Number*</label>
                <input type='number' placeholder='Number' required onChange={(e)=>setNumber(e.target.value)}>
                  </input>
              </div>
            </div>
            <div className="form__city">
              <div className="input-box">
                <label>Country</label>
                <input type="text" placeholder="Country" required onChange={(e)=>setCountry(e.target.value)}></input>
              </div>
              <div className="input-box">
                <label>State</label>
                <input type="text" placeholder="State" required onChange={(e)=>setState(e.target.value)}></input>
              </div>
              <div className="input-box">
                <label>City</label>
                <input type="text" placeholder="City" required onChange={(e)=>setCity(e.target.value)}></input>
              </div>
            </div>
            <div className="form__address">
              <div className="input-box">
                <label>Address</label>
                <input type="text" placeholder="Address" required onChange={(e)=>setAddress(e.target.value)}></input>
              </div>
              <div className="input-box">
                <label>Zip</label>
                <input type="number" placeholder="Zip" required onChange={(e)=>setZip(e.target.value)}></input>
              </div>
            </div>
            <div className="message">
              <div className="input-box">
                <label>Message*</label>
                <textarea type="text" placeholder="Message" onChange={(e)=>setMessage(e.target.value)}></textarea>
              </div>
            </div>

            <button type="submit">Send Email</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Sellerpage;
