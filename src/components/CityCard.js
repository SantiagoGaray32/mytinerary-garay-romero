import React from "react";
import { Link, generatePath } from "react-router-dom";
import "../styles/CityCard.css";
import "../styles/Carrousel.css";

function CityCard(props) {
  return (
    <div className="Card" key={props.photo}>
      <img className="cardImg" src={props.photo}></img>
      <div className="cardBody">
        <h5>{props.city}</h5>
        <div className="cityCardButton">
          <Link
            className="cardButton"
            to={generatePath("/details/:id", { id: props.id })}
          >
            More
          </Link>
        </div>
      </div>
    </div>
  );
}
export default CityCard;
