import React from "react";
import { Link } from "react-router-dom";
import "../style/calltoaction.css";

export default function Calltoaction() {
  return (
    <div className="Callto-image">
      <Link to={"/cities"} className="callToAction">
        Enter
      </Link>
      <img src=""></img>
    </div>
  );
}
