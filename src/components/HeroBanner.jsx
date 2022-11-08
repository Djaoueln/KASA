import React from "react";
import '../styles/HeroBanner.scss';

const Herobanner = ({ image, title, }) => {
  return (
    <div className="heroBanner">
      <img src={image} alt="montagne" className="heroBanner_img" />
      <h2 className="heroBanner_title">{title}</h2>
      <div className="thumb_overlay"></div>
      
    </div>
  );
};

export default Herobanner;