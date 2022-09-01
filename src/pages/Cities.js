import { useEffect, useState } from "react";
import axios from "axios";
import CityCard from "../components/CityCard";
import "../styles/CitiesPage.css";

function Cities() {
  const [cities, setCities] = useState([]);
  const [filters, setFilters] = useState({
    type: "city",
    name: "",
  });

  useEffect(() => {
    getCities(type, name).then((result) => setCities(result));
    console.log("get cities");
  }, []);

  const { type, name } = filters;

  const getCities = async (type, name) => {
    const result = await axios.get(
      `http://localhost:4000/cities?type=${type}&name=${name}`
    );
    return result.data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //llamado a la api
    const cities = await getCities(type, name);
    //setear resultados
    setCities(cities);
  };

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="citiesContainer">
      <div className="background-cities">
        <div className="search-container">
          <form onSubmit={handleSubmit}>
            <select
              name="type"
              value={type}
              onChange={handleChange}
              defaultValue="city"
            >
              <option value="city">City</option>
              <option value="country">Country</option>
            </select>

            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />

            <button>Buscar</button>
          </form>
        </div>

        <div className="CardContainer">
          <h2>Look for your next adventure</h2>
        </div>
        {cities.map((c) => (
          <CityCard photo={c.photo} city={c.city} />
        ))}
      </div>
    </div>
  );
}

export default Cities;
