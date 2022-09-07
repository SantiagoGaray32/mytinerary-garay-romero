import { useSelector, useDispatch } from "react-redux";
import {
  setNewCityFormData,
  resetNewCityFormData,
} from "../features/citiesSlices";
import { useGetPostNewCityMutation } from "../features/citiesAPI";
import axios from "axios";
import "../styles/Input.css";

const formInputs = [
  { name: "city", type: "text" },
  { name: "country", type: "text" },
  { name: "photo", type: "text" },
  { name: "population", type: "number", min: 1000, max: 100000000 },
  { name: "foundation", type: "date" },
];

function Form() {
  //city, country, photo, population, foundation
  const formData = useSelector((state) => state.cities.newCityFormData);
  const dispatch = useDispatch();
  const [getPostNewCity] = useGetPostNewCityMutation();
  console.log("formData", formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setNewCityFormData({ ...formData, [name]: value }));
  };

  const renderInputs = ({ type, name, min, max }) => (
    <input
      key={`input-${type}=${name}`}
      type={type}
      value={formData[name]}
      name={name}
      placeholder={name.toUpperCase()}
      onChange={handleChange}
      min={min ?? undefined}
      max={max ?? undefined}
      required
    />
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newCity = {
      city: formData.city,
      country: formData.country,
      photo: formData.photo,
      population: formData.population,
      foundation: formData.foundation,
    };

    try {
      await getPostNewCity(newCity);
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(resetNewCityFormData());
    }
  };

  return (
    <form id="formNewCity" onSubmit={handleSubmit}>
      {formInputs.map((input) => renderInputs(input))}
      <button className="ButtonInput">Submit</button>
    </form>
  );
}

export default Form;
