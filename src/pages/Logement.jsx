import React from "react";
import SlideShow from "../components/Slideshow";
import "../styles/Logement.scss";
import data from "../data/data.json";
import { useParams } from "react-router-dom";
import Error from "./Error";
import Collapse from "../components/Collapse";
import Tag from "../components/Tag";



function Logement() {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);
  window.scrollTo(0, 0);
    if (!logement) {
      return <Error />;
    }
  const pictures = logement.pictures.map((picture, index) =>
      <img src={picture} alt="" key={index} />
    );
    return (
        <div className="logement">
               <SlideShow>
                    {pictures}
                </SlideShow>
                <div className="logement_text">
                    <div className="logement_titleAndLocation ">
                    <h1>{logement.title}</h1>
                    <h2>{logement.location}</h2>
                    <div className="logement_tag">
                        {logement.tags.map((tags, index) => (
                        <Tag text={tags} key={index}/>
                        ))}
                    </div>
                    </div>
                <div className="review"></div>
                <div className="host">
                    <span>{logement.host.name.split("")[0]}<br/>{logement.host.name.split("")[1]} </span>
                    <img src={logement.host.picture} alt="" />
                </div>
                <div className="stars">
                {[1, 2, 3, 4, 5].map((star) => {
                    const ratingValue = star;
                    return (
                        <label>
                            <input type="radio" name="rating" value={ratingValue} />
                            {/* <FaStar className="star" color={ratingValue <= (logement.rating) ? "#ffc107" : "#e4e5e9"} size={20} /> */}
                        </label>
                    );
                })}
                </div>
                </div> 
                <div className="collapse">
                    <Collapse intitulé="Description" text={logement.description} />
                    <Collapse intitulé={"Equipements"}
                         text={logement.equipments.map((equipment, index) => (
                                <li key={index}>{equipment}</li>
                            ))}
                            
                    />
                    </div>
        </div>

    );  
}

export default Logement;