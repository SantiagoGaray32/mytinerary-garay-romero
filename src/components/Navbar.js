import React from "react";
import "../style/navbar.css"
import logo from "../img/3.png"
import User from "../img/user.png"
import logoMenu from "../img/menu.png"
function Navbar (){
    return (
        <div className="navContainer">
           <input type="checkbox" id="btn-menu"></input>
           <label for="btn-menu"><img className="logoMenu" src={logoMenu}></img></label> 
            <div className="menu">
                <ul>
                    <li><a href="">Cities</a></li>
                    <li><a href="">New City</a></li>
                    <li><a href="">Under Construction</a></li>
                    <li><a><img className="logoUser" src={User}></img></a></li>
                </ul>
            </div>
        
        
        </div>

        
     )
}

export default Navbar