  import React, {useState} from "react";
//   import data from "../data/data.json"
  import '../styles/SlideShow.scss';
  import arrowBack from "../assets/arrowBack.svg";
    import arrowForward from "../assets/arrowForward.svg";

  function Slideshow ({ pictures}) {

   const [current, setCurrent] = useState(0);
    const length = pictures.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };


    if (!Array.isArray(pictures) || pictures.length <= 0) {
        return null;
    }


     return (
          <section className="slider">
                <div className="slider__container">
               <img src={arrowBack} alt="" className="arrow_back" onClick={prevSlide} />
                <img src={arrowForward} alt="" className="arrow_forward" onClick={nextSlide}/>
                </div>
             {pictures.map((slide, index) => {
                    return (
                        <div className={index === current ? "slide active" : "slide"} key={index}>
                            {index === current && (
                                <img src={slide} alt="house" className="slide_image"/>
                                )}    
                        </div>
                    )
            
             })}  
          </section>
     )
  }
  export default Slideshow;

