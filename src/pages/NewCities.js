import React from "react";
import Form from "../components/Input";
import "../styles/NewCity.css";

function NewCity({ children }) {
  return (
    <div className="newCityContainer">
        <h1>Create your next destination</h1>
      <div className="formContainerNewCity">
        <Form />
      </div>
    </div>
  );
}

export default NewCity;
