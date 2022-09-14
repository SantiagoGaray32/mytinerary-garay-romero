import { useEffect, useState } from "react";
import "../styles/Carrousel.css";

const listSlides = {};

function Carousel(props) {
  const [sectionCarrousel, setSectionCarrousel] = useState(1);

  useEffect(() => {
    splitResult(props.slides);
  }, [props.slides]);

  useEffect(() => {
    let loop = setInterval(() => {
      foward();
    }, 4000);

    return () => {
      clearInterval(loop);
    };
  }, [sectionCarrousel]);

  const splitResult = (result) => {
    listSlides.slide0 = renderImg(result.slice(0, 4));
    listSlides.slide1 = renderImg(result.slice(4, 8));
    listSlides.slide2 = renderImg(result.slice(8, 12));
  };

  const renderImg = (listCitys) => {
    return listCitys.map((city) => (
      <div className="slide" key={city.photo}>
        <div className="item">
          <h4 className="citiesTitle">{city.city}</h4>
          <img className="carouselImage" src={city.photo} />
        </div>
      </div>
    ));
  };

  const foward = () => {
    setSectionCarrousel(sectionCarrousel >= 2 ? 0 : sectionCarrousel + 1);
  };

  const back = () => {
    setSectionCarrousel(sectionCarrousel <= 0 ? 2 : sectionCarrousel - 1);
  };

  return (
    <div>
      <div className="carouselTitle">
        <h2>Popular MYtineraries</h2>
      </div>

      <div className="carousel-content">
        <div className="buttonFoward">
          <button className="buttonSlide" onClick={back}>
            {"<"}
          </button>
        </div>
        <div className="slideContents">
          {sectionCarrousel === 0
            ? listSlides.slide0
            : sectionCarrousel === 1
            ? listSlides.slide1
            : listSlides.slide2}
        </div>

        <div className="buttonBack">
          <button className="buttonSlide" onClick={foward}>
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
