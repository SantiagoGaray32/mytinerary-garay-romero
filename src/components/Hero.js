import React from "react";
import "../style/hero.css";
import fondo from "../img/background2.jpg";

//todo componente produce html
//componente funcionales
//componentes clases
export default function Hero() {
  return (
    <div className="Hero-image">
      <div className="heroContent">
        <h3 className="heroText">
          Find your perfect trip, designed by insiders who know and love their
          cities!
        </h3>
      </div>
    </div>
  );
}
