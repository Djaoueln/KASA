import React from "react";
import '../styles/Thumb.scss';

const Thumb = ({ image, title }) => {
  return (
    <div className="thumb">
      <img src={image} alt="" className="thumb_imgCart" />
        <div className="thumb_overlayCart"></div>
      <h2 className="thumb_title">{title}</h2>
    </div>
  );
};

export default Thumb;