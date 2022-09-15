import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setComments, setDropdown } from "../features/commentsSlices";
import { useGetCommentsByItineraryIdQuery } from "../features/citiesAPI";
import "../styles/Comments.css";


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

//   const [dropdown, setDropdown] = useState(false);

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
            <p>{comment.comment}</p>
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


// EL DROPDOWN ES UN ESTADO PROPIO DE COMMENTS, CORREGIR.