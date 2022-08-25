import React from "react";
import "../../style/footer.css";
import facebookImage from "../../img/facebook.png";
import instagramImage from "../../img/instagram.png";
import whatsAppImage from "../../img/whatsapp.png";
import twitterImage from "../../img/twitter.png";
import arrow from "../../img/flechaSbg1.png";
import Icon from "./Icon";

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
            <Icon name={facebookImage} alt="Facebook"></Icon>
            <Icon name={instagramImage} alt="Instagram"></Icon>
            <Icon name={whatsAppImage} alt="Whatsapp"></Icon>
            <Icon name={twitterImage} alt="Twitter"></Icon>
          </div>
        </div>
        <div className="box arrow">
          <div>
            <Icon name={arrow} alt="Facebook"></Icon>
          </div>
        </div>
      </div>
      <div className="group2">
        <h6>MyTinerary © 2022 All rights Reserved</h6>
      </div>
    </footer>
  );
}
