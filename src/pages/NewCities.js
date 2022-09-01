import React from "react";
import Form from "../components/Input";
import "../styles/NewCity.css";

function NewCity({ children }) {
  return (
    <div className="newCityContainer">
      <div className="form">
        <Form />
      </div>
    </div>
  );
}

export default NewCity;
