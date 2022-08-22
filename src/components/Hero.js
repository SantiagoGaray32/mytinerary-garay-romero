import React from "react";
import "../style/hero.css";
import fondo from "../img/background2.jpg";

//todo componente produce html
//componente funcionales
//componentes clases
export default function Hero() {
  return (
    <div className="Hero-image">
      {/* <h1 className="Hero-title">MyTinerary</h1> */}
      <img className="Hero-img" src={fondo}></img>
      <h2>
        Find your perfect trip, designed by insiders who know and love their
        cities!
      </h2>
    </div>
  );
}
