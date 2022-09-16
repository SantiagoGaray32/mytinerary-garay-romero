import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setItineraries } from "../features/itinerariesSlices";
import { useGetItinerariesByCityIdQuery } from "../features/citiesAPI";
import Activities from "./Activities";
import Comments from "./Comments";
import "../styles/Itinerary.css";

function Itinerary(props) {
  const cityId = props.cityId;
  const dispatch = useDispatch();
  const itineraries = useSelector((state) => state.itineraries.itineraries);
  const { data } = useGetItinerariesByCityIdQuery(cityId);

  useEffect(() => {
    if (data && data.success) {
      dispatch(setItineraries(data.response));
    }
  }, [data]);

  const renderItinerary = (it) => {
    return (
      <div className="itineraryContainer" key={it._id}>
        <div>
          <h4>Itinerary:<p>{it.itinerary}</p></h4>
        </div>
        <div className="itineraryDescription">
          <div className="itineraryInfo">
            <h5>Itinerary information:</h5>
            <p>Price: ${it.price}</p>
            <p>Duration: {it.duration}min.</p>
          </div>
          <div className="itineraryTags">
            {it.tags.map((tag) => (
              <p key={tag}>{tag}</p>
            ))}
          </div>
        </div>
        <div className="activitiesContainer">
          <Activities itineraryId={it._id} />
        </div>
        <div className="commentsContainer">
          <Comments itineraryId={it._id} />
        </div>
      </div>
    );
  };
  return (
    <div className="itinerariesContainer">
      {itineraries.map((it) => renderItinerary(it))}
    </div>
  );
}

export default Itinerary;
