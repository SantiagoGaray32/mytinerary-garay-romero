import React from "react";

import fondo from "../img/fondo-hero.png";

//todo componente produce html
//componente funcionales
//componentes clases
export default function Hero() {
  return (
    <div className="Hero-image">
      <h1 className="Hero-title">MyTinerary</h1>
      <img src={fondo}></img>
      <a href="#" className="Hero-anchor"></a>
    </div>
  );
}
