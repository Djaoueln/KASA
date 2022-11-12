import React from "react";
import '../styles/Rating.scss';
import star from '../assets/star.svg';
import star_grey from '../assets/star_grey.svg';


function Rating(props) {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < props.rating) {
        stars.push(<img src={star} alt="star" key={i} className="star" />);
        } else {
        stars.push(<img src={star_grey} alt="star" key={i} className="star inactive" />);
        }
    }
    return <div className="rating">
        <div className="rating_stars">{stars}</div>
        </div>;
    }

export default Rating;
