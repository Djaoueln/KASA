import React from "react";
import '../styles/HeroBanner.scss';

const Herobanner = ({ image, title, }) => {
  return (
    <div className="thumb_HeroBanner">
      <img src={image} alt="montagne" ></img>
      <h2 className="thumb_titleBanner">{title}</h2>
      <div className="thumb_overlay"></div>
      
    </div>
  );
};

export default Herobanner;