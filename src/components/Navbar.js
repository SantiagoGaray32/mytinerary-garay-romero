import React from "react";
import "../styles/Navbar.css";
import User from "../img/user.png";
import logoMenu from "../img/menu.png";
import { Link } from "react-router-dom";
import UnderConstruction from "../pages/UnderConstruction";
import logoApp from "../img/logoMyT.jpg"
import {useState} from "react"

function Navbar() {

  const [open, setOpen] = useState(false)
  const handleOpen = () => {
      open ?
          setOpen(false)
          : setOpen(true)
  }

//   <div>
//   <Link to={"/cities"} onClick={scrollUp}>
//     <img className="leftArrow" src={LeftArrow}></img>
//   </Link>
// </div>

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
        </ul>
      </div>
      <div>
      <input type="checkbox" id="btn-menu-user"></input>
      <label htmlFor="btn-menu-user">
        <img className="logoUser" src={User}></img>
      </label>
      <div className="menuUser">
        <ul>
        <li>
            <Link to={"/SignIn"}>Sign In</Link>
        </li>
        <li>
           <Link to={"/auth/signup" }>Sign Up</Link>
        </li>
        </ul>

        </div>   
      </div>
   
    </div>
  );
}

export default Navbar;


// menu del usuario