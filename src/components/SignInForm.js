//darle estilos
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { usePostUserSingInMutation } from "../features/citiesAPI";
import { setUser } from "../features/usersSlices";
import "../styles/SignInForm.css"

export default function SingInForm() {
  const dispatch = useDispatch();
  const [userLogin] = usePostUserSingInMutation();
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [wantToRedirect, setWantToRedirect] = useState(false);
  const [login, setLogin] = useState({
    email: "",
    password: "",
    from: "form",
  });

  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if (user && wantToRedirect) {
      setShouldRedirect(true);
    }
  }, [user, wantToRedirect]);

  const captureData = (event) => {
    const { name, value } = event.target;
    setLogin({ ...login, [name]: value });
  };

  const saveData = (event) => {
    event.preventDefault();

    const userData = {
      email: login.email,
      password: login.password,
      form: login.form,
    };

    userLogin(userData).then((res) => {
      if (res.data) {
        const loggedUser = res.data.response.user;
        dispatch(setUser(loggedUser));
        localStorage.setItem("useriInfo", JSON.stringify(loggedUser));
        setWantToRedirect(true);
        //window.location.replace("/");
      }
    });

    event.target.reset();
  };

  if (shouldRedirect) {
    return <Navigate replace to={"/"} />;
  }

  return (
    <div className="SingInForm-container">
      <form onSubmit={saveData} className="SingInForm-form">
        <p>Sign In</p>
        <input
          onChange={captureData}
          name="email"
          className="SingInForm-input"
          placeholder="Email"
          type="text"
          required
        />
        <input
          onChange={captureData}
          name="password"
          className="SingInForm-input"
          placeholder="Password"
          type="password"
          required
        />
        <button id="SingInFormButton" className="SingInFor-btn">Sign In</button>
      </form>
    </div>
  );
}
