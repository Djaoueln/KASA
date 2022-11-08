import React from "react";
import '../styles/Rating.scss';


function Rating(props) {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < props.rating) {
        stars.push(<i className="fa-solid fa-star red" key={i}></i>);
        } else {
        stars.push(<i className="fa-solid fa-star grey" key={i}></i>);
        }
    }
    
    return <div className="rating">
        <div className="rating_stars">{stars}</div>
        </div>;
    }

export default Rating;
