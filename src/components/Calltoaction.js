import React from "react";
import { Link } from "react-router-dom";
import "../styles/Calltoaction.css";

export default function Calltoaction() {
  return (
    <div className="callContent">
          <div className="callText">
            <h4>Press enter to see your next trip</h4>
          </div>
        <div className="callButton">
          <Link to={"/cities"} className="callToAction">
            Enter
          </Link>
        </div>
    </div>
  );
}
