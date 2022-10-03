import React from "react";
import EditProfile from "../components/EditProfile";
import "../styles/EditProfile.css"

export default function EditProfilePage() {
  return (
    <div className="editProfilecontainer">
        <h2>Edit your Profile</h2>
       <div className="editProfileFormContainer">
           <EditProfile/>
        </div> 
    </div>
  );
}







  
