import React from "react";
import "../styles/Details.css";
import Amsterdam from "../img/amsterdam.jpg";
import LeftArrow from "../img/leftArrow.png";
import { Link } from "react-router-dom";

function Details() {
  return (
    <>
      <div className="detailsContainer">
        <h1>Details</h1>
        <div className="cardDetails">
          <img className="detailsImg" src={Amsterdam}></img>
          <div className="detailsText">
            <h3>Amsterdam</h3>

            <p>Country: Netherlands</p>
            <p>Population: 873.338 </p>
            <p>Foundation:10-27-1275</p>
          </div>
        </div>

        <div>
          <Link to={"/cities"} onClick={scrollUp}>
            <img className="leftArrow" src={LeftArrow}></img>
          </Link>
        </div>
      </div>
    </>
  );
}
const scrollUp = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default Details;
