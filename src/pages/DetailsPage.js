import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCity } from "../features/citiesSlices";
import { useGetCitiesByIdQuery } from "../features/citiesAPI";
import LeftArrow from "../img/leftArrow.png";
import Itinerary from "../components/Itinerary";
import "../styles/Details.css";

function DetailsPage() {
  const { id } = useParams(); //Esto siempre retorna como un string, no importa que sea un número.
  const { data } = useGetCitiesByIdQuery(id);
  const dispatch = useDispatch();
  const cityDetail = useSelector((state) => state.cities.city);

  useEffect(() => {
    if (data && data.success) {
      dispatch(setCity(data.response));
    }
  }, [data]);

  return (
    <>
      <div className="detailsContainer">
        <h1>Details</h1>
        <div className="cardDetails">
          <img className="detailsImg" src={cityDetail.photo}></img>
          <div className="detailsText">
            <h3>{cityDetail.city}</h3>

            <p>Country: {cityDetail.country}</p>
            <p>Population: {cityDetail.population} </p>
            <p>Foundation: {new Date(cityDetail.foundation).toDateString()}</p>
          </div>
        </div>

        <Itinerary cityId={id} />

        <div>
          <Link to={"/cities"} onClick={scrollUp}>
            <img className="leftArrow" src={LeftArrow}></img>
          </Link>
        </div>
      </div>
    </>
  );
}
const scrollUp = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default DetailsPage;
