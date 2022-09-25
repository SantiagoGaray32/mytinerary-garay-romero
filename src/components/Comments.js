import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setComments,
  toggleDropdown,
  createDropdown,
} from "../features/commentsSlices";
import { useDeleteCommentsMutation, useEditCommentsMutation, useGetCommentByUserQuery, useGetCommentsByItineraryIdQuery } from "../features/citiesAPI";
import "../styles/Comments.css";

function Comments(props) {
  const id = props.itineraryId;
  const { data } = useGetCommentsByItineraryIdQuery(id);
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.comments);
  const dropdown = useSelector((state) => state.comments.dropdown);
  // const reload = props.reload
  // const [show,setShow] = useState(false);
  // const userLoggin = useSelector((state) => state.user)
  // const {data : commentsByUser, isError} = useGetCommentByUserQuery(userLoggin.id)
  // const myComments = commentsByUser?.response
  // const [deleteComment] = useDeleteCommentsMutation()
  // const [commentsItinerary, setMyCommentsItinerary] = useState(null)

  // useEffect(() => {
  //   getAllCommentsBYTinearies()
  // }, [reload])

  // async function getAllCommentsBYTinearies(){
  //   let res = await data(id)
  //   if(res.data?.response) {
  //     setMyCommentsItinerary(res.data?.response)
  //   }else {
  //     setMyCommentsItinerary(null)
  //   }
  // }

  // function showComment() {
  //   if(show) {
  //     setShow(false);
  //   }else {
  //     setShow(true)
  //   }
  // }

  // function handleDeleteComment(e){
  //   deleteComment(e.target.id)
  //   .then((res) => {
  //     if (res.error) {
  //       let dataError = res.error;
  //       let dataMessage = dataError.data;
  //     }else {
  //       let dataResponse = res.data;
  //       let dataSuccess = dataResponse.message;
  //       reload()
  //     }
  //   })
  //   .catch((error) => console.log(error))
  // }

  // let commentField = useRef()
  // const [editComment] = useEditCommentsMutation()
  // const [edit, setEdit] = useState(false)
  // const handleEditComment = (e) => {
  //   e.preventDefault();
  //   let idComment = e.target.id;
  //   let commentEdit = {
  //     id: idComment,
  //     comment: commentField.current.value,
  //   }

  //   editMyComment(commentUpdate)
  //   .then((res) => {
  //     if(res.error){
  //       let dataError = res.error;
  //       let datamessage = dataError.data
  //     }else {
  //       let dataResponse = res.data;
  //       let dataSuccess = dataResponse.message;
  //     }
  //   })
  //   .catch((error)=> console.log(error));

  //   setEdit(false);
  //   reload()
  // };

  // function handleUpdateEditButton(){
  //   setEdit(true)
  // }

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
              {comment.user.name} {comment.user.lastname}
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
