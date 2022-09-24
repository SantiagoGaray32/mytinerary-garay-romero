import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setItineraries } from "../features/itinerariesSlices";
import { useGetItinerariesByCityIdQuery, useLikeDislikeMutation } from "../features/citiesAPI";
import Activities from "./Activities";
import Comments from "./Comments";
import "../styles/Itinerary.css";
import likeImg from "../img/like.png"
import dislikeImg from "../img/dislike.png"
import PostComment from "./PostComment";

function Itinerary(props) {
  const cityId = props.cityId;
  const dispatch = useDispatch();
  const itineraries = useSelector((state) => state.itineraries.itineraries);
  const user = useSelector(state => state.user.user);
  const { data } = useGetItinerariesByCityIdQuery(cityId);
  const [likeDislike] = useLikeDislikeMutation();
  const [reload,setReload] = useState(true);
  const [image, setImage] = useState('');
  //const [data, setData] = useState ({})
  const [liked, setLiked] = useState(false)
//  const training = setLiked(!liked);

  useEffect(() => {
    if (data && data.success) {
      dispatch(setItineraries(data.response));
    }
  }, [data]);

  const likeItinerary = async (id) => {
    let res = await likeDislike({itineraryId: id, userId: user?.id});
    if(res.data?.success){
      setReload(!reload)
    } else {
      console.log(res.error);
    }
  }

 

  const renderItinerary = (it) => {
    return ( data &&
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
          <div className="itineraryLikes">
            <button onClick={() => likeItinerary(it._id, setLiked(!liked))}   > 
            {/* <img src={ liked && it.likes.includes(user.id) ? `${dislikeImg}` : `${likeImg}` } className='likeButton' alt='like' /> */}
            <img src={liked ?  `${likeImg}` : `${dislikeImg}`} className='likeButton' alt='like' />
          </button>
            <p>{it.likes[0]}</p>
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
