import React, { useEffect } from "react";
import * as jose from "jose";
import { useRef } from "react";
import { usePostUserMutation } from "../features/citiesAPI";

function SignUpGoogle() {
  let [newUser] = usePostUserMutation(); //de esta forma deberiamos consumir la api para editar un usuario

  const buttonDiv = useRef(null);
  console.log(buttonDiv.current);

  async function handleCredentialResponse(response) {
    let userObject = jose.decodeJwt(response.credential);

    let data = {
      name: userObject.name,
      lastName: userObject.family_name,
      photo: userObject.picture,
      email: userObject.email,
      password: userObject.sub,
      country: "Argentina",
      role: "user",
      from: "google",
    };
    newUser(data);
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "1030440234524-b8lcop2mman5ic228k5m5tbe33u551j1.apps.googleusercontent.com",
      callback: handleCredentialResponse,
      context: "signup",
    });
    google.accounts.id.renderButton(
      buttonDiv.current,
      { theme: "outline", size: "medium", text: "signup_with" } // customization attributes
    );
  }, []);

  return (
    <div>
      <div ref={buttonDiv}></div>
    </div>
  );
}

export default SignUpGoogle;

// para SignIn (iniciar sesion) seria lo mismo pero mandamos la password, el from, y el name. (o lo que necesitemos)
