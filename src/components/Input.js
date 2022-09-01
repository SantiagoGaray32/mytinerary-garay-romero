import React from "react";
import "../styles/Input.css";

function Form() {
  const cityRef = React.useRef();
  const countryRef = React.useRef();
  const photoRef = React.useRef();
  const populationRef = React.useRef();
  const foundationRef = React.useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(cityRef.current.value);
    console.log(countryRef.current.value);
    console.log(photoRef.current.value);
    console.log(populationRef.current.value);
    console.log(foundationRef.current.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="city">City:</label>
        <input type="text" id="city" ref={cityRef}></input>
        <br />
        <label htmlFor="country">Country:</label>
        <input type="text" id="country" ref={countryRef}></input>
        <br />
        <label htmlFor="photo">Photo Url:</label>
        <input type="text" id="photo" ref={photoRef}></input>
        <br />
        <label htmlFor="population">Population:</label>
        <input type="number" id="population" ref={populationRef}></input>
        <br />
        <label htmlFor="foundation">Foundation:</label>
        <input type="number" id="foundation" ref={foundationRef}></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Form;
