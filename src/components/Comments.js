import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setComments,
  toggleDropdown,
  createDropdown,
} from "../features/commentsSlices";
import { useGetCommentsByItineraryIdQuery } from "../features/citiesAPI";
import "../styles/Comments.css";

function Comments(props) {
  const id = props.itineraryId;
  const { data } = useGetCommentsByItineraryIdQuery(id);
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.comments);
  const dropdown = useSelector((state) => state.comments.dropdown);

  useEffect(() => {
    dispatch(createDropdown(id));
  }, []);

  useEffect(() => {
    if (data && data.success) {
      const commentByItineraryId = {
        itineraryId: id,
        comments: data.response,
      };
      dispatch(setComments(commentByItineraryId));
    }
  }, [data]);

  const handleOpen = () => {
    dispatch(toggleDropdown(id));
  };

  const render = (comment) => {
    return (
      <div className="commentCard" key={comment._id}>
        <div className="commentDescription">
          <div className="commentUser">
            <h4>
              {comment.user.name} {""} {comment.user.lastname}
            </h4>
          </div>
          <div className="comment-comment">
            <p>{comment.comment}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="CommentsContainer">
      <button id="commentButton" type="button" onClick={handleOpen}>
        {dropdown[id] ? "Close" : ""} Comments
      </button>
      {dropdown[id] && (
        //Short circuit
        <div className="CommentsContainer">{comments[id].map(render)}</div>
      )}
    </div>
  );
}

export default Comments;
