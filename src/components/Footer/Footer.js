import React from "react";
import "../../style/footer.css";
import facebookImage from "../../img/facebook.png";
import instagramImage from "../../img/instagram.png";
import whatsAppImage from "../../img/whatsapp.png";
import twitterImage from "../../img/twitter.png";
import Icono from "./Icono";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="group1">
        <div className="box">
          <p>Home</p>
          <p>Cities</p>
          <p>Log In</p>
          <p>Sign Up</p>
        </div>
        <div className="box">
          <h3>MyTinerary</h3>
          <p>
            Contact: <a>MyTinerary@gmail.com</a>
          </p>
          <p>Adress: florida 656- pb 1 - Buenos Aires</p>
        </div>
        <div className="box">
          <div className="social">
            <h3>Follow Us</h3>
            <Icono name={facebookImage} alt="Facebook"></Icono>
            <Icono name={instagramImage} alt="Instagram"></Icono>
            <Icono name={whatsAppImage} alt="Whatsapp"></Icono>
            <Icono name={twitterImage} alt="Twitter"></Icono>
          </div>
        </div>
      </div>
      <div className="group2">
        <h6>MyTinerary © 2022 All rights Reserved</h6>
      </div>
    </footer>
  );
}
