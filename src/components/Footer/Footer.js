import React from "react";
import "../../styles/Footer.css";
import facebookImage from "../../img/facebook.png";
import instagramImage from "../../img/instagram.png";
import whatsAppImage from "../../img/whatsapp.png";
import twitterImage from "../../img/twitter.png";
import arrow from "../../img/flechaSbg1.png";
import Icon from "./Icon";
import { Link } from "react-router-dom";

export default function Footer() {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer id="footer">
      <div className="group1">
        <div className="box" id="footerNav">
          <div className="foterNav-Nav">
            <Link to={"/"}>Home</Link>
          </div>
          <div className="foterNav-Nav">
            <Link to={"/cities"}>Cities</Link>
          </div>
          <div className="foterNav-Nav">
            <Link to={"/NewCity"}>NewCity</Link>
          </div>
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
          <Link to={scrollUp} onClick={scrollUp}><img className="arrow" src={arrow}></img></Link>
        </div>
      </div>
      <div className="group2">
        <h6>MyTinerary © All rights Reserved {new Date().getFullYear()}</h6>
      </div>
    </footer>
  );
}
