import React from "react";
import '../styles/Banner.scss';

const Banner = ({ image, title, }) => {
  return (
    <div className="Banner">
      <img src={image} alt="montagne" className="Banner_img" />
      {/*the title is the props title, the title is the text that will be displayed on the banner, the title is in the txtData.js file */}
      <h2 className="Banner_title">{title}</h2>
      <div className="thumb_overlay"></div>
      
    </div>
  );
};

export default Banner;