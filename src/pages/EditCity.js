import Input from "../components/Input";
import "../styles/EditCity.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Option from "../components/Option";

function EditCity() {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/cities/")
      .then((response) => setCities(response.data));
  }, []);
  console.log(cities);
  return (
    <div>
      <h1>Edit City</h1>
      <div>
        <select>
          {cities.response?.map((city) => (
            <Option city={city} />
          ))}
        </select>
        <Input className="Input" />
      </div>
    </div>
  );
}
export default EditCity;
