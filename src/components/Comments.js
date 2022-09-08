import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setComments, setDropdown } from "../features/commentsSlices";
import { useGetCommentsByItineraryIdQuery } from "../features/citiesAPI";
import "../styles/Comments.css";

// let comments = [
//   {
//     message:
//       "wooow the activities are incredible, I'm going to keep saving because inflation is killing me and I do them",
//     user: {
//       name: "Keith",
//       lastname: "Richards",
//       photo: "",
//       mail: "Krichards@rollingStone.com",
//     },
//   },
//   {
//     message:
//       "How good are the activities, I already have a destination for my next vacation",
//     user: {
//       name: "Brian",
//       lastname: "Johnson",
//       photo: "",
//       mail: "HighwaytoHell@acdc.com",
//     },
//   },
// ];

function Comments(props) {
  const id = props.itineraryId;
  const { data } = useGetCommentsByItineraryIdQuery(id);
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.comments);
  const dropdown = useSelector((state) => state.comments.dropdown);

  useEffect(() => {
    if (data && data.success) {
      dispatch(setComments(data.response));
    }
  }, [data]);

  const handleOpen = () => {
    dispatch(setDropdown(!dropdown));
  };

  const render = (comment) => {
    return (
      <div className="commentCard">
        <div className="commentDescription">
          <div className="commentUser">
            <h4>
              {comment.user.name} {""} {comment.user.lastname}
            </h4>
          </div>
          <div className="comment-comment">
            <p>{comment.message}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="CommentsContainer">
      <button id="commentButton" type="button" onClick={handleOpen}>
        {dropdown ? "Close " : ""} Comments{" "}
      </button>
      {dropdown ? (
        <div className="CommentsContainer">{comments.map(render)}</div>
      ) : null}
    </div>
  );
}

export default Comments;
