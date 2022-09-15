import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setNameFilter, setCities } from "../features/citiesSlices";
import { useGetCityByNameAndTypeQuery } from "../features/citiesAPI";
import CityCard from "../components/CityCard";
import "../styles/CitiesPage.css";

function Cities() {
  const nameFilter = useSelector((state) => state.cities.nameFilter);
  const cities = useSelector((state) => state.cities.cities);
  const dispatch = useDispatch();

  const { data } = useGetCityByNameAndTypeQuery({
    type: "city",
    name: nameFilter,
  });

  useEffect(() => {
    if (data) {
      console.log("data", data);
      dispatch(setCities(data));
    }
  }, [data]);

  const handleChange = (e) => {
    dispatch(setNameFilter(e.target.value));
  };

  return (
    <div className="citiesContainer">
      <div className="background-cities">
        <div className="search-container">
          <form>
            <p>Search city: </p>

            <input
              type="text"
              name="city"
              value={nameFilter}
              onChange={handleChange}
            />

            <button id="buttonSearch">Search</button>
          </form>
        </div>

        <div className="CardContainer">
          <h2>Look for your next adventure</h2>
          {cities.map((c) => (
            <CityCard
              key={`city-card-${c.photo}-${c.city}`}
              id={c._id}
              photo={c.photo}
              city={c.city}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cities;
