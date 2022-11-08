import React from "react";
import SlideShow from "../components/SlideShow";
import "../styles/Logement.scss";
import data from "../data/data.json";
import { useParams } from "react-router-dom";
import Error from "./Error";
import Collapse from "../components/Collapse";
import Tag from "../components/Tag";
import Rating from "../components/Rating";



function Logement() {
  const { id } = useParams(true);
  const logement = data.find((item) => item.id === id);
  window.scrollTo(0, 0);
    if (!logement) {
      return <Error />;
    }
    return (
        <div className="logement">
            <div className="logement_banner" key={id}>
               <SlideShow pictures={logement.pictures} />
            </div>
                <div className="logement_content">
                    <div className="logement_titleAndLocation ">
                    <h1 className="logement_title">{logement.title}</h1>
                    <h2 className="logement_location">{logement.location}</h2>
                    <div className="logement_tag">
                        {logement.tags.map((tags, index) => (
                        <Tag text={tags} key={index}/>
                        ))}
                    </div>
                    </div>
                <div className="logement_review"></div>
                <div className="host">
                    <span>{logement.host.name.split("")[0]}<br/>{logement.host.name.split("")[1]} </span>
                    <img src={logement.host.picture} alt="" />
                </div>
                 <Rating rating={logement.rating} />
                </div> 
                <div className="logement_collapse">
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