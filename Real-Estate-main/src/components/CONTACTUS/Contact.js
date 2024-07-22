import React from "react";
import "./Contact.css";
import sellerpic from "../HOMEPAGE/by&sell/sellerpagepic.avif";

const Contact = () => {
  return (
    <>
      <div className="contact__main">
        <img
          src="https://i.pinimg.com/originals/c2/94/26/c2942668d5ddfa81cb4181a0b1265251.jpg"
          alt="something went wrong"
        ></img>
        <div className="contact__main__text">Contact Us</div>
      </div>
      <div className="seller__main">
        <img src={sellerpic} alt="something went wrong"></img>
        <div className="seller__form">
          <img src={sellerpic} alt="something went wrong"></img>
        </div>s
        <div className="form__div">
          <form>
            <h1>Get Your Home Estimation</h1>
            <div className="form__name">
              <div className="input-box">
                <label>First Name*</label>
                <input type="text" placeholder="First Name" required></input>
              </div>
              <div className="input-box">
                <label>Last Name*</label>
                <input type="text" placeholder="Last Name" required></input>
              </div>
            </div>
            <div className="form__number">
              <div className="input-box">
                <label>Email*</label>
                <input type="text" placeholder="Email" required></input>
              </div>
              <div className="input-box">
                <label>Phone Number*</label>
                <input
                  type="number"
                  placeholder="Phone Number"
                  required
                ></input>
              </div>
            </div>
            <div className="form__city">
              <div className="input-box">
                <label>Country</label>
                <input type="text" placeholder="Country" required></input>
              </div>
              <div className="input-box">
                <label>State</label>
                <input type="text" placeholder="State" required></input>
              </div>
              <div className="input-box">
                <label>City</label>
                <input type="text" placeholder="City" required></input>
              </div>
            </div>
            <div className="form__address">
              <div className="input-box">
                <label>Address</label>
                <input type="text" placeholder="Address" required></input>
              </div>
              <div className="input-box">
                <label>Zip</label>
                <input type="text" placeholder="Zip" required></input>
              </div>
            </div>
            <div className="message">
              <div className="input-box">
                <label>Message*</label>
                <textarea type="text" placeholder="Message"></textarea>
              </div>
            </div>

            <button type="submit">Send Email</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
