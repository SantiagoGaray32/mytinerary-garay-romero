import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../features/usersSlices";
import "../styles/Navbar.css";
import User from "../img/user.png";
import logoMenu from "../img/menu.png";

import logoApp from "../img/logoMyT.jpg";

function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleSignOut = () => {
    dispatch(signOut());
    localStorage.removeItem("useriInfo");
  };


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
      <nav className="menu">
        <ul>
          <li id="logoMyT">
            <p>
              <Link to={"/"}>
                <img className="logoApp" src={logoApp}></img>
              </Link>
            </p>
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
          {user?.id && ( //short circuit => user.logged && mostra esto | ternario => user.logged ? mostra esto : sino esto
            <li>
              <Link to={"/newitinerary"}>My itineraries</Link>
            </li>
          )}
        </ul>
      </nav>

      <div className="profile-photo">
        <label htmlFor="btn-menu-user">
          <img className="logoUser" src={User} onClick={handleOpen}></img>
        </label>
        {open && (
          <div className="menuUser">
            <ul>
              {user?.id ? (
                <li>
                  <button onClick={handleSignOut}>Sign Out</button>
                </li>
              ) : (
                <>
                  <li>
                    <Link to={"/SignIn"}>Sign In</Link>
                  </li>
                  <li>
                    <Link to={"/auth/signup"}>Sign Up</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}

      </div>
    </div>
  );
}

export default Navbar;

// menu del usuario
