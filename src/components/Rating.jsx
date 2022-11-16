import React from "react";
import '../styles/Rating.scss';
import star from '../assets/star.svg';
import star_grey from '../assets/star_grey.svg';

// the rating component
function Rating(props) {
    // the rating is the props rating, stars is an array of 5 stars
    const stars = [];
    // for loop to push the stars in the stars array
    for (let i = 0; i < 5; i++) {
        // if the rating is higher than the index of the star, push the star, else push the grey star
        if (i < props.rating) {
        // the star is in the star array, the index of the star is the index of the loop
        stars.push(<img src={star} alt="star" key={i} className="star" />);
        } 
        // else push the grey star in the stars array, the index of the star is the index of the loop
        else {
        stars.push(<img src={star_grey} alt="star" key={i} className="star inactive" />);
        }
    }
    //  return the stars array
    return <div className="rating">
        <div className="rating_stars">{stars}</div>
        </div>;
    }

export default Rating;
