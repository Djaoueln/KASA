// import React, { useEffect } from "react";
import "../styles/Home.scss";
import data from "../data/data.json";
import Thumbnails from "../components/Thumbnails";
import Herobanner from "../components/HeroBanner";

import image from "../assets/HeroBannerImg.jpg";
import { Link } from "react-router-dom";
import txt from "../data/txtData";

const txtHome = txt.txtHome
const Products =() => {
  return (
    <div className="home">
      <div className="home_banner">
        <Herobanner title={txtHome} image={image} />
      </div>{""}
    <section className="home_products">
      {data.map((item) => {
        return (
        <article key={item.id}>
           <Link to={`/logement/${item.id}`}>
             <Thumbnails image={item.cover} title={item.title} />
            </Link>
        </article>
        );
      })
      }
    </section>
    </div>
  );
};


export default Products;