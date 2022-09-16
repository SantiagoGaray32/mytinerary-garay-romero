import React from "react";
import SignInGoogle from "../components/SignInGoogle";
import SignInForm from "../components/SignInForm";
import "../styles/SignIn.css";

export default function SignIn() {
  return (
    <div className="SignIncontainer">
        <h2>Sign In</h2>
       <div className="SignInFromContainer">
            <SignInForm />
            <SignInGoogle />
        </div> 
    </div>
  );
}