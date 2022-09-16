import React from "react";
import SignInGoogle from "../components/SignInGoogle";
import SignInForm from "../components/SignInForm";
import "../styles/SignUp.css";

export default function SignIn() {
  return (
    <div className="SignUpcontainer">
      <SignInGoogle />
      <SignInForm />
    </div>
  );
}