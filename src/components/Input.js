import React, { useState } from "react";
import axios from "axios";
import "../styles/Input.css";

function Form() {
  const initialValor = {
    city: "",
    country: "",
    photo: "",
    population: 0,
    foundation: 0,
  };

  const [city, setCity] = useState(initialValor);

  const captureData = (e) => {
    const { name, value } = e.target;
    setCity({ ...city, [name]: value });
  };

  const saveData = async (e) => {
    e.preventDefault();

    const newCity = {
      city: city.city,
      country: city.country,
      photo: city.photo,
      population: city.population,
      foundation: city.foundation,
    };
      console.log(newCity);
      await axios.post("http://localhost:4000/cities/", newCity);

    setCity({ ...initialValor });
  };

  return (
    <div className="NewCityContainer">
      <div className="MainNewCity">
        {/* <Input /> */}
        <form onSubmit={saveData}>
          <input
            type="text"
            className="InputNewCity"
            placeholder="City"
            required
            name="city"
            value={city.city}
            onChange={captureData}
          />
          <input
            type="text"
            className="InputNewCity"
            placeholder="Country"
            required
            name="country"
            value={city.country}
            onChange={captureData}
          />
          <input
            type="text"
            className="InputNewCity"
            placeholder="Photo"
            required
            name="photo"
            value={city.photo}
            onChange={captureData}
          />
          <input
            type="number"
            className="InputNewCity"
            placeholder="Population"
            required
            name="population"
            value={city.population}
            onChange={captureData}
          />
          <input
            type="number"
            className="InputNewCity"
            placeholder="Foundation"
            required
            name="foundation"
            value={city.foundation}
            onChange={captureData}
          />
          <button className="ButtonInput">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
