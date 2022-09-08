import React from "react"
import "../styles/Comments.css"
import {useState} from "react"

function Comments(){

    let comments = [
        {
            message: "wooow the activities are incredible, I'm going to keep saving because inflation is killing me and I do them",
            user: {
                name:"Keith",
                lastname:"Richards",
                photo:"",
                mail: "Krichards@rollingStone.com"
            }
        },
        {
            message:"How good are the activities, I already have a destination for my next vacation",
            user:{
                name:"Brian",
                lastname:"Johnson",
                photo:"",
                mail: "HighwaytoHell@acdc.com"
            }
        }
    ]

    const [dropdown, setDropdown] = useState(false)
    const handleOpen = () => {

        dropdown ?
        setDropdown(false) : setDropdown(true)
    }

    const render = (comments) => {
        return(
            <div className="commentCard">
               <div className="commentDescription">
                    <div className="commentUser">
                        <h4>{comments.user.name} {""} {comments.user.lastname}</h4>
                    </div>
                    <div className="comment-comment">
                        <p>{comments.message}</p>
                    </div>
                </div> 
            </div>
        )
    }

    return(
        <div className="CommentsContainer">
            <button id="commentButton" type="button"  onClick={handleOpen}> {dropdown? "Close ":""} Comments </button>
            {dropdown ? 
            <div className="CommentsContainer">
                {comments.map(render)}
            </div>
            :null    
        }
        </div>
    )
}

export default Comments;