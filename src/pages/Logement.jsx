import React from "react";
import Slideshow from "../components/Slideshow.jsx";
import "../styles/Logement.scss";
import data from "../data/data.json";
import { useParams } from "react-router-dom";
import Error from "./Error";
import Collapse from "../components/Collapse";
import Tag from "../components/Tag";
import Rating from "../components/Rating";


function Logement() {
  //  useParams hook to get the id of the clicked logement
  const { id } = useParams(true);
    //  find the data to get the logement with the same id
  const logement = data.find((item) => item.id === id);

    //  if the id is not found, return the error page
    if (!logement) {
      return <Error />;
    }
    return (
        // the logement page
        <div className="logement">
            {/* SlideShow component key is the id of the logement, pictures is the array of pictures of the logement */}
            <div className="logement_banner" key={id}>  
               <Slideshow pictures={logement.pictures}/>
            </div>
                {/* the logement details */}
                <div className="logement_content">
                    <div className="logement_content_left">
                        <h1 className="logement_content_left_title">{logement.title}</h1>
                        <p className="logement_content_left_location">{logement.location}</p>
                           <div className="logement_content_left_tags">
                              {/* tag.map is used to display the tags */}
                              {logement.tags.map((tags, index) => (
                              <Tag text={tags} key={index}/>))}
                       </div>
                    </div>
                    <div className="logement_review">
                        <div className="logement_review_host_info">
                           <p className="logement_review_host_info_name">
                           {/* the host name is the first name and the last name, separated by a space */}
                           {logement.host.name.split(" ")[0]}<br/>{logement.host.name.split(" ")[1]}</p>
                           <img src={logement.host.picture} alt="" />
                        </div>
                        {/* rating component, the rating is the average of the ratings */}
                        <Rating rating={logement.rating} />
                    </div>
                </div>
                <div className="logement_collapse">
                    <Collapse intitulé="Description" text={logement.description} />
                    <Collapse intitulé={"Equipements"}
                         // the equipments are displayed in a list, the map method is used to display the list
                           text={logement.equipments.map((equipment, index) => (
                                <li key={index}>{equipment}</li>))}/>
                </div>
        </div>
    );  
}

export default Logement;



 