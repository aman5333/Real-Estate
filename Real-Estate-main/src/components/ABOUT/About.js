import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(()=>{
    AOS.init({duration: "1000"});
  },[]);
  return (
    <>
      <div className="a__main">
        <img
          src="https://www.decorpot.com/images/interior-designers-in-pune.jpg"
          alt="somting went wrong"
        ></img>
        <p className="a__para">Get To Know Our Talented Team.</p>
        <h1 className="a__heading">ABOUT</h1>
      </div>
      <div className="a__leader">
        <div className="leader__info" data-aos="slide-right">
          <h1 className="leader__name">Aman</h1>
          <p className="a__leader__para">
            With over $2 Billion in sales, Our agency is the industry’s top
            luxury producer with over 27 years of experience in marketing
            Seattles’s most prestigious waterfront properties.{" "}
          </p>
          <p className="a__leader__para">
            Due to our unparalleled results, expertise and dedication, we rank
            amongst the Top 6 agencies in Seattle and our area. She is also and
            is an elite member to Corcoran’s Presidents Council.{" "}
          </p>
          <p className="a__leader__para">
            With her years of experience, impressive property portfolio,
            celebrity clientele, and unparalleled knowledge of the market and
            pedigree estates, Simone estimable business is sophisticated and
            renowned.
          </p>
          <hr></hr>
          <div className="leader__social">
            <div className="icon a__icon">
              <a href="https://www.facebook.com/">
                <FaFacebookF />
              </a>
            </div>
            <div className="icon a__icon">
              <a href="https://x.com/">
                <FaTwitter />
              </a>
            </div>
            <div className="icon a__icon">
              <a href="https://www.instagram.com/">
                <FaInstagram />
              </a>
            </div>
          </div>
          <Link to="/contact" className="a__link">
            Contact Me
          </Link>
          <hr></hr>
        </div>
        <div className="leader__pic" data-aos="slide-left">
          <img
            src="https://static.vecteezy.com/system/resources/previews/028/144/531/original/asian-businessman-isolated-png.png"
            alt="something went wrong"
          ></img>
        </div>
      </div>
      <div className="a__realty">
        <div className="about__realty">
          <h1 className="realty">About Daniels Realty</h1>
          <p className="realty__para">
            Liza is recognized by everyone – clients, developers, vendors, and
            industry professionals – for her unique talents, creative drive, and
            diligence in assisting buyers and sellers in one of the most scenic
            and fulfilling places, Park City, Utah. With her far-reaching
            network/
          </p>
        </div>
        <div className="realty__container">
          <div className="our__vision" data-aos="slide-right">
            <h2 className="our__heading">Our Vision</h2>
            <p className="our__vision__para">
              Due to our unparalleled results, expertise and dedication, we rank
              amongst the Top 6 agencies in Seattle and our area. She is also
              and is an elite member to Corcoran’s Presidents Council.
            </p>
          </div>
          <div className="our__mission" data-aos="slide-left">
            <h2 className="our__heading">Our Mission</h2>
            <p className="our__mission__para">
              With over $2 Billion in sales, Our agency is the industry’s top
              luxury producer with over 27 years of experience in marketing
              Seattles’s most prestigious waterfront properties.
            </p>
          </div>
          <div className="our__values" data-aos="slide-right">
            <h2 className="our__heading">Our Values</h2>
            <p className="our__values__para">
              With her years of experience, impressive property portfolio,
              celebrity clientele, and unparalleled knowledge of the market and
              pedigree estates, Simone estimable business is sophisticated and
              renowned.
            </p>
          </div>
          <div className="our__resoures" data-aos="slide-left">
            <h2 className="our__heading">Our Resources</h2>
            <p className="our__resoures__para">
              With her years of experience, impressive property portfolio,
              celebrity clientele, and unparalleled knowledge of the market and
              pedigree estates, Simone estimable business is sophisticated and
              renowned.
            </p>
          </div>
        </div>
      </div>
      <div className="a__our__team">
        <div className="our__team">
            <h2>Meet Our Team</h2>
            <p>Liza is recognized by everyone – clients, developers, vendors, and industry professionals – for her unique talents, creative drive, and diligence in assisting buyers and sellers in one of the most scenic and fulfilling places, Park City.</p>
        </div>
        <div className="team__members">
            <div className="member1" data-aos="zoom-in">
                <img src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/OTTKXNBQVJN7HDIYMUXPXPVEQM.jpg" alt="something went wrong"></img>
            </div>
            <div className="member1" data-aos="zoom-in">
                <img src="https://d2un9pqbzgw43g.cloudfront.net/wordpress-themes/uploads/sites/2/businessman-office-happy.jpg" alt="something went wrong"></img>
            </div>
            <div className="member1" data-aos="zoom-in">
                <img src="https://cdn-wordpress-info.futurelearn.com/wp-content/uploads/women-future-business.jpg.optimal.jpg" alt="something went wrong"></img>
            </div>
        </div>
      </div>
      <div className="a__video">
        <video src="https://videos.pexels.com/video-files/10135086/10135086-uhd_2560_1440_30fps.mp4" autoPlay muted loop></video>
      </div>
      <div className="results">
        <img src="https://wallpaperset.com/w/full/a/2/f/523762.jpg" alt="something went wrong"></img>
        <h2 className="results__heading">OUR RESULTS</h2>
        <div className="a__total">
            <div className="count1">
                <h2 className="count__heading">$100M</h2>
                <p className="count__para">Current Listing Volume</p>
            </div>
            <div className="count1">
                <h2 className="count__heading">$400M</h2>
                <p className="count__para">Total Sold 2020 - 2024</p>
            </div>
            <div className="count1">
                <h2 className="count__heading">$2B</h2>
                <p className="count__para">Lifetime Sales Volume</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default About;
