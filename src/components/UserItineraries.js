import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useGetAllItinerariesByUserIdQuery } from "../features/citiesAPI";
import { setItineraries } from "../features/usersSlices";

const UserItineraries = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const itineraries = useSelector((state) => state.user.itineraries);
  console.log("user from slice", user);
  console.log("itineraries", itineraries);
  const { data } = useGetAllItinerariesByUserIdQuery(user.id);

  useEffect(() => {
    console.log("data itineraries", data);
    if (data && data.success) {
      dispatch(setItineraries(data.response));
    }
  }, [data]);

  const showItinerary = (item) => {
    return (
      <div className="mytinerary-description" key={item?._id}>
        <div className="mytinerary-content">
          <h3>{item?.itinerary}</h3>
          {/* <img src={item?.city.photo} alt="photo" /> */}
          <div className="mytinerary-country">
            {/* <h3>{item?.city.country}</h3> */}
            {/* <p>{item?.city.city}</p> */}
          </div>
          <div className="mytinerary-duration">
            <p>Duration: {item?.duration} hours</p>
            <p>Price: ${item?.price}</p>
            <p>Likes: {item?.likes[0] /*Esto dbería ser un número*/}</p>
            {item?.tags.map((tag) => {
              <p key={tag}>{tag}</p>;
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {itineraries.length > 0 ? (
        <>
          <div className="mytinerary-container">
            <h1>My Tineraries</h1>
            <img className="mytinerary-img" src={user?.photo} alt="photo" />
            <div className="mytinerary-user">
              <div className="mytinerary-profile">
                <h3>{user?.name}</h3>
                <h3>{user?.mail}</h3>
              </div>
            </div>
          </div>
          <div className="mytinerary-general">
            {itineraries.map(showItinerary)}
          </div>
        </>
      ) : (
        <h2>No hay nada</h2>
      )}
    </>
  );
};

export default UserItineraries;