  import React, {useState} from "react";
  import '../styles/SlideShow.scss';
  import arrowBack from "../assets/arrowBack.svg";
    import arrowForward from "../assets/arrowForward.svg";

  function Slideshow ({ pictures}) {
   //  the state of the slideshow is the index of the picture displayed 
   const [current, setCurrent] = useState(0);

    //  the length of the pictures array
    const length = pictures.length;

    //  the next picture function length -1 because the index start at 0
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
   //  the previous picture function length -1 because the index start at 0 
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
        console.log(current);
    };

    //  if there is no picture, return null, else return the slideshow
    if (!Array.isArray(pictures) || pictures.length <= 0) {
        return null;
    }

     return (
          <section className="slider">
             {/* pictures.map to display the pictures in the array */}
            {pictures.map((picture, index) => {
                    return (
                      // if the index of the picture is the same as the index of the state current, display the picture, else display none
                        <div className={index === current ? "slide active" : "slide"} key={index}>
                          {/* if there is no picture, return null, else return the picture */}
                            {index === current && (
                              // the picture is in the pictures array
                                <img src={picture} alt="house" className="slide_image"/>
                                )}    
                        </div>
                    )
             })}  
               {/* the picture displayed is the picture with the index of the state current, the picture is in the pictures array  */}
                <div className="slider_container">
                  {/* // arrow_back onClick to go to the previous picture prevSlide function */}
                <img src={arrowBack} alt="" className="arrow_back" onClick={prevSlide} />
                  {/* arrow_forward onClick to go to the next picture nextSlide function */}
                <img src={arrowForward} alt="" className="arrow_forward" onClick={nextSlide}/>
                </div>
                <div className="slider_counter">
                  {/* number of pictures displayed */}
                  <p>{current + 1}/{pictures.length}</p>
                </div>

               
                
          </section>
     )
  }
  export default Slideshow;

