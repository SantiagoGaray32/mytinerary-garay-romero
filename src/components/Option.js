import React from "react";
import "../styles/EditCity.css";

function Option(props) {
  let city = props.city;
  return <option className="OptionSelect">{city.city}</option>;
}
export default Option;
