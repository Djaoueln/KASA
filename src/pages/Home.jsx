import "../styles/Home.scss";
import data from "../data/data.json";
import Thumb from "../components/Thumb";
import Banner from "../components/Banner";
import image from "../assets/Banner.jpg";
import { Link } from "react-router-dom";
import txt from "../data/txtData";

const txtHome = txt.txtHome

const Products =() => {
  return (
    <div className="home">
      <div className="home_banner">
        <Banner title={txtHome} image={image} />
      </div>{""}
    <section className="home_products">
      {data.map((item) => {
        return (
          // 
        <article key={item.id}>
           <Link to={`/logement/${item.id}`}>
             <Thumb image={item.cover} title={item.title} />
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