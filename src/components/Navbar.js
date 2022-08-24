import React from "react";
import "../style/navbar.css"
import logo from "../img/3.png"
import User from "../img/user.png"
function Navbar (){
    return (
        <div className="navContainer">
            <div>
                <p><img className="navbarLogo" src={logo}></img></p>
            </div>
            <div className="navbar-navbar">
                <a href="#">Home</a>
                <a href="#">Cities</a>    
            </div>
            <div>
                <p><img className="navbarAvatar" src={User}></img></p>
            </div>
        </div>
     )
}

export default Navbar