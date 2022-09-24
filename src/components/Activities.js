import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActivities } from "../features/activitiesSlices";
import { useGetActivitiesByItineraryIdQuery } from "../features/citiesAPI";
import "../styles/Activities.css";



function Activities(props) {
  const id = props.itineraryId;
  const { data } = useGetActivitiesByItineraryIdQuery(id);
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities.activities);

  useEffect(() => {
    if (data && data.success) {
      dispatch(setActivities(data.response));
    }
  }, [data]);

  const render = (activity) => {
    return (
      <div key={activity._id} className="activity-Card">
        <h6>Activity:</h6>
        <p>{activity.name}</p>
      </div>
    );
  };

  return <div className="activityContainer">{activities.map(render)}</div>;
}
export default Activities;
