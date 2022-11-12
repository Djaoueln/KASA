import React from "react";
import HeroBanner from "../components/HeroBanner";
import aboutHb from "../assets/aboutHb.avif";
import Collapse from "../components/Collapse";

function About() {
    const collapseTxt = [
        {id:1, intitulé:"Fiabilité", text:"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
         },

        {id:2, intitulé:"Respect", text:"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
        },
        
        {id:3, intitulé:"Service", text:"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
        },
        
        {id:4, intitulé:"Sécurité", text:"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
        }
]
    return (
        <div className="about">
        <div className="about_heroBanner">
             <HeroBanner image={aboutHb} />
             </div>
            <div className="about_collapse">
                {  collapseTxt.map((one, i) => {
                    return (
                    <Collapse intitulé={one.intitulé} text={one.text} key={i} />
                    )
                })    
                }
        </div>

        </div>
    )

}
export default About;
