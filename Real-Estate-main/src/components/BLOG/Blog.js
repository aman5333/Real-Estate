import React, { useEffect } from 'react'
import "./Blog.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Blog = () => {
  useEffect(()=>{
    AOS.init({duration: "1000"});
  },[]);
  return (
    <>
      <div className="blog__main">
        <div className="blog__title">Real Estate Blog</div>
      </div>
      <div className="blog__blog">
        <div className="blog__blog1">
          <div className="blog__side__pics1" data-aos="zoom-in">
            <img
              src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
              alt="somethign went wrong"
            ></img>
          </div>
          <div className="blog__side__pics2" data-aos="slide-left">
            <img
              src="https://w0.peakpx.com/wallpaper/31/188/HD-wallpaper-living-room-furniture-home-interior.jpg"
              alt="something went wrong"
            ></img>
          </div>
          <div className="blog__side__pics3" data-aos="slide-right">
            <img
              src="https://w0.peakpx.com/wallpaper/891/398/HD-wallpaper-living-room-home-furniture-interior-thumbnail.jpg"
              alt="something went wrong"
            ></img>
          </div>
          <div className="blog__side__pics4" data-aos="slide-left">
            <img
              src="https://w0.peakpx.com/wallpaper/815/316/HD-wallpaper-bookcase-sofa-living-room-watch-thumbnail.jpg"
              alt="something went wrong"
            ></img>
          </div>
          <div className="blog__center__pic">
            <img
              src="https://a-static.besthdwallpaper.com/fine-home-interior-living-room-picture-wallpaper-2304x768-83859_103.jpg"
              alt="something went wrong"
            ></img>
          </div>
        </div>
        <div className="blog__blog2">
          <div className="blog__side__pics5" data-aos="zoom-in">
            <img
              src="https://w0.peakpx.com/wallpaper/333/786/HD-wallpaper-villa-architecture-colorful-house-grass-home-to-u-beautiful-lights-modern-chairs-beauty-chair-reflection-luxury-night-lovely-houses-colors-design-trees-pool-water-cool-peaceful.jpg"
              alt="something went wrong"
            ></img>
          </div>
          <div className="blog__side__pics6" data-aos="slide-left">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/310/368/899/sofa-interior-pillow-library-wallpaper-preview.jpg"
              alt="something went wrong"
            ></img>
          </div>
          <div className="blog__side__pics7" data-aos="slide-right">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/784/492/948/design-house-style-villa-wallpaper-preview.jpg"
              alt="something went wrong"
            ></img>
          </div>
          <div className="blog__side__pics8" data-aos="slide-left">
            <img
              src="https://w0.peakpx.com/wallpaper/481/22/HD-wallpaper-beautiful-home-interior-with-water-view-design-architecture-homes-interiors.jpg"
              alt="something went srong"
            ></img>
          </div>
          <div className="blog__center__pic2">
            <img
              src="https://wallpaper.forfun.com/fetch/4a/4a92c14ccb93bf785786924d40ef28cf.jpeg"
              alt="somethign went wrong"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
