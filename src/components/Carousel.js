import { useState } from "react";
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
import "../style/carrousel.css";

function Carousel() {
  const [sectionCarrousel, setSectionCarrousel] = useState(1);
  const renderImg = (listCitys) => {
    console.log(listCitys);
    return listCitys.map((city) => (
      <>
        <p>{city.title}</p>
        <img src={city.url} />
      </>
    ));
  };
  const foward = () => {
    if (sectionCarrousel !== 2) {
      setSectionCarrousel(sectionCarrousel + 1);
      console.log(sectionCarrousel);
    }
  };
  const back = () => {
    if (sectionCarrousel !== 0) {
      setSectionCarrousel(sectionCarrousel - 1);
      console.log(sectionCarrousel);
    }
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
      { url: roma, title: "Roma" },
      { url: sidney, title: "Sidney" },
      { url: tokyo, title: "Tokyo" },
      { url: ibiza, title: "Ibiza" },
    ]),
  };

  return (
    <div>
      <button onClick={foward}>{"<"}</button>
      {sectionCarrousel === 0
        ? listSlides.slide0
        : sectionCarrousel === 1
        ? listSlides.slide1
        : listSlides.slide2}
      <button onClick={back}>{">"}</button>
    </div>
  );
}

export default Carousel;
