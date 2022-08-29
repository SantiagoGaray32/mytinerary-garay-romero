import { useEffect, useState } from "react";
import paris from "../img/paris.jpg";
import amsterdam from "../img/amsterdam.jpg";
import dubai from "../img/dubai.jpg";
import hong_kong from "../img/hong_kong.jpg";
import las_vegas from "../img/las_vegas.jpg";
import london from "../img/london.jpg";
import montecarlo from "../img/montecarlo.jpg";
import punta_cana from "../img/punta_cana.jpg";
import roma from "../img/roma.jpg";
import sidney from "../img/sidney.jpg";
import tokyo from "../img/tokyo.jpg";
import ibiza from "../img/ibiza.jpg";
import "../styles/Carrousel.css";

function Carousel() {
  const [sectionCarrousel, setSectionCarrousel] = useState(1);

  useEffect(() => {
    let loop = setInterval(() => {
      foward();
    }, 4000);

    return () => {
      clearInterval(loop);
    };
  }, [sectionCarrousel]);

  const renderImg = (listCitys) => {
    return listCitys.map((city) => (
      <div className="slide" key={city.url}>
        <div className="item">
          <h4 className="citiesTitle">{city.title}</h4>
          <img className="carouselImage" src={city.url} />
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

  const listSlides = {
    slide0: renderImg([
      { url: paris, title: "Paris" },
      { url: amsterdam, title: "Amsterdam" },
      { url: dubai, title: "Dubai" },
      { url: hong_kong, title: "Hong Kong" },
    ]),
    slide1: renderImg([
      { url: las_vegas, title: "Las Vegas" },
      { url: london, title: "London" },
      { url: montecarlo, title: "Montecarlo" },
      { url: punta_cana, title: "Punta Cana" },
    ]),
    slide2: renderImg([
      { url: roma, title: "Rome" },
      { url: sidney, title: "Sidney" },
      { url: tokyo, title: "Tokyo" },
      { url: ibiza, title: "Ibiza" },
    ]),
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
