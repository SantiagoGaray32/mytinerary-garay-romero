import React from "react";
import SignUpGoogle from "../components/SignUpGoogle";
import SignUpForm from "../components/SignUpForm";
import "../styles/SignUp.css";

export default function SignUp() {
  return (
    <div className="SignUpcontainer">
      <SignUpGoogle />
      <SignUpForm />
    </div>
  );
}

//aca deberiamos incluir  un form con los inputs necesarios para generar un usuario o directamente generar un componente y colocarlo debajo de google signup
