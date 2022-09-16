import { useState } from "react";
import { usePostUserMutation } from "../features/citiesAPI";
import "../styles/SignUp.css";

export default function SingUpForm() {
  const [newUser] = usePostUserMutation();

  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    photo: "",
    country: "",
    role: "user",
    from: "form",
  });

  const captureData = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  // console.log(form)

  const saveData = (event) => {
    event.preventDefault();

    const userData = {
      name: form.name,
      lastName: form.lastName,
      email: form.email,
      password: form.password,
      photo: form.photo,
      country: form.country,
      role: "user",
      from: "form",
    };

    newUser(userData).then((res) => {
      if (res.data.success) {
        window.location.replace("/singin");
      }
    });

    event.target.reset();
  };

  return (
    <div className="Singup-container">
      <form
        className="Singup-form"
        onSubmit={saveData}
        style={{ flexDirection: "column" }} //borrar
      >
        <input
          onChange={captureData}
          name="name"
          type="text"
          className="Singup-input"
          placeholder="Name"
          required
        />
        <input
          onChange={captureData}
          name="lastName"
          type="text"
          className="Singup-input"
          placeholder="LastName"
          required
        />
        <input
          onChange={captureData}
          name="email"
          type="text"
          className="Singup-input"
          placeholder="Mail"
          required
        />
        <input
          onChange={captureData}
          name="password"
          type="password"
          className="Singup-input"
          placeholder="Password"
          required
        />
        <input
          onChange={captureData}
          name="photo"
          type="text"
          className="Singup-input"
          placeholder="Photo URL"
          required
        />
        <input
          onChange={captureData}
          name="country"
          type="text"
          className="Singup-input"
          placeholder="Country"
          required
        />
        <button id="SignUpButtom" className="Singup-btn">Sign Up</button>
      </form>
    </div>
  );
}
