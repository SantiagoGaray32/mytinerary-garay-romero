import React from "react";
import "../styles/CityCard.css";
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

// const renderCard = (item) => {
//   return item.map((city) => (
//     <div className="Card" key={city.url}>
//       <img className="cardImg" src={city.url}></img>
//       <div className="cardBody">
//         <h5>{city.title}</h5>
//       </div>
//     </div>
//   ));
// };
// const cities = {
//   allCities: renderCard([
//     { url: paris, title: "Paris" },
//     { url: amsterdam, title: "Amsterdam" },
//     { url: dubai, title: "Dubai" },
//     { url: hong_kong, title: "Hong Kong" },
//     { url: las_vegas, title: "Las Vegas" },
//     { url: london, title: "London" },
//     { url: montecarlo, title: "Montecarlo" },
//     { url: punta_cana, title: "Punta Cana" },
//     { url: roma, title: "Rome" },
//     { url: sidney, title: "Sidney" },
//     { url: tokyo, title: "Tokyo" },
//     { url: ibiza, title: "Ibiza" },
//   ]),
// };

function CityCard(props) {
  return (
    <div className="Card" key={props.photo}>
      <img className="cardImg" src={props.photo}></img>
      <div className="cardBody">
        <h5>{props.city}</h5>
      </div>
    </div>
  );
}
export default CityCard;
