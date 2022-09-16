import * as jose from "jose";
import { useState, useEffect, useRef } from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { usePostUserSingInMutation } from "../features/citiesAPI";
import { setUser } from "../features/usersSlices";

export default function SingInGoogle() {
  const dispatch = useDispatch();
  const [login] = usePostUserSingInMutation();
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [wantToRedirect, setWantToRedirect] = useState(false);

  const user = useSelector((state) => state.user.user);

  const buttonDiv = useRef(null);
  // console.log(buttonDiv.current)

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "858987294668-ujt6gjb9nmuhec61k7kavpnmva2lunt5.apps.googleusercontent.com",
      callback: handleCredentialResponse,
      context: "signin",
    });
    google.accounts.id.renderButton(
      buttonDiv.current,
      {
        theme: "filled_blue",
        size: "mediun",
        text: "singup_with",
        shape: "circle",
        type: "standard",
      } // customization attributes
    );
  }, []);

  useEffect(() => {
    if (user && wantToRedirect) {
      setShouldRedirect(true);
    }
  }, [user, wantToRedirect]);

  async function handleCredentialResponse(response) {
    let userObject = jose.decodeJwt(response.credential);

    const user = {
      name: userObject.given_name,
      lastName: userObject.family_name,
      email: userObject.email,
      password: userObject.sub,
      photo: userObject.picture,
      country: "Argentina",
      role: "user",
      from: "google",
    };

    login(user).then((res) => {
      if (res.data.success) {
        const loggedUser = res.data.response.user;
        dispatch(setUser(loggedUser));
        localStorage.setItem("useriInfo", JSON.stringify(loggedUser));
        setWantToRedirect(true);
        //window.location.replace("/");
      }
    });
  }

  if (shouldRedirect) {
    return <Navigate replace to={"/"} />;
  }

  return (
    <>
      <div ref={buttonDiv}></div>
    </>
  );
}
