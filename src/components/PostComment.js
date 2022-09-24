import React, { useRef, useState } from "react";
import { useCreateCommentMutation } from "../features/citiesAPI"

function PostComment(props) {
    const commentField = useRef();

    let userID = props.userID;
    let photo = props.userPhoto;
    let itinerary = props.itineraryId;
    let userRole = props.userRole;
    let name = props.Name;

    let reload = props.reload 

    const [show, setShow] = useState(false)
    const [createNewComment] = useCreateCommentMutation()

    function handleNewComment(e){
        e.preventDefault()
        let newComment = {
            user: userID,
            itinerary: itinerary,
            comment: commentField.current.value
        }
    createNewComment(newComment)
    .then((res)=> {
        if (res.error) {
            let dataError = res.error;
            let dataMessage = dataError.data;
        } else {
            let dataResponse = res.data;
            let dataSuccess = dataResponse.message
            let singupForm = document.querySelector("#formNewComment");
            singupForm.reset();
        }
        reload()
    })
    .catch((error) => {
        console.log(error);
    });
}
function showComment(){
    if(show){
        setShow(false)
    }else {
        setShow(true)
    }
}

return(
    <>
        <div className="postCommentContainer">
            <div className="commentDiv">
                <button className="postCommentButton" onClick={showComment}>Writes Comment {" "}
                </button>
                <div>
                    {show? (
                        <>
                        <div className="commentFormContainer">
                            <div className="postComment">
                                <div className="commentUser">
                                    <img src={photo} alt={name}/>
                                    <h5>{name}</h5>
                                </div>
                                <form id="formNewComment" className="commentForm" onSubmit={handleNewComment}>
                                    <label htmlFor="commentMessage">
                                        <input id="commentMessage" type="text" placeholder="Post your comment..." ref={commentField}/>
                                    </label>
                                    <input className="submitComment" type="submit" value="Submit"/>
                                </form>
                            </div>
                        </div>

                    </>
                    ): null}
                </div>
            </div>
        </div>
    </>
);
}
export default PostComment;