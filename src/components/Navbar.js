import React from "react";
import "../styles/Navbar.css";
import User from "../img/user.png";
import logoMenu from "../img/menu.png";
import { Link } from "react-router-dom";
import UnderConstruction from "../pages/UnderConstruction";
import logoApp from "../img/logoMyT.jpg"

function Navbar() {
  return (
    <div className="navContainer">
      <input type="checkbox" id="btn-menu"></input>
      <label htmlFor="btn-menu">
        <img className="logoMenu" src={logoMenu}></img>
      </label>
      <div className="menu">
        <ul>
          <li id="logoMyT">
            <p><img className="logoApp"  src={logoApp}></img></p>
          </li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/Cities"}>Cities</Link>
          </li>
          <li>
            <Link to={"/NewCity"}>New City</Link>
          </li>
          <li>
            <Link to={"/editCity"}>Edit City</Link>
          </li>
          <li>
            <p>
              <img className="logoUser" src={User}></img>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
