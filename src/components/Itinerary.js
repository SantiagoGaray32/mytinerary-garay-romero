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
    if (data /*&& data.success*/) {
      dispatch(setItineraries(data.response));
    }
  }, [data]);

  const renderItinerary = (it) => {
    return (
      <>
        <div>
          <h4>Itineraries:</h4>
        </div>
        <div className="itineraryDescription">
          <div className="itineraryInfo">
            <p>{it.itinerary}</p>
          </div>
          <div className="itinerary-price-duration">
            <p>Price: ${it.price}</p>
            <p>Duration: ${it.duration}hs.</p>
          </div>
          <div className="itineraryTags">
            {it.tags.map((tag) => (
              <p key={tag}>#{tag}</p>
            ))}
          </div>
          <div className="itineraryUser">
            <p>name of the user who created the itinerary</p>
            <h4>Santiago Garay</h4>
            <h6>User: SantiGaray</h6>
          </div>
        </div>
        <div className="activitiesContainer">
          <Activities itineraryId={it._id} />
        </div>
        <div className="commentsContainer">
          <Comments itineraryId={it._id} />
        </div>
      </>
    );
  };

  return (
    <div className="itinerariesContainer">
      {itineraries.map((it) => renderItinerary(it))}
    </div>
  );
}

export default Itinerary;
