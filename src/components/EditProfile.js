import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEditUserMutation, } from "../features/citiesAPI";
import { 
  resetNewUserFormData,
  setNewUserFormData,
  setUser
} from "../features/usersSlices";
import "../styles/EditProfile.css"


const formInputs = [
  { name: "name", type: "text" },
  { name: "lastName", type: "text" },
  { name: "email", type: "text" },
  { name: "password", type: "text", },
  { name: "photo", type: "text" },
  { name: "country", type: "text" },
];



export default function EditProfile(props) {
const { role } = props;
const formData = useSelector((state) => state.user.newUserFormData);
const dispatch = useDispatch(setUser);
const [editUser] = useEditUserMutation();


const handleChange = (e) => {
  const {name, value} = e.target;
  dispatch(setNewUserFormData({...formData, [name]: value}));
};


const renderInputs = ({type, name}) => (
  <input
  key={`input-${type}=${name}`}
      type={type}
      value={formData[name]}
      name={name}
      placeholder={name.toUpperCase()}
      onChange={handleChange}
      required
  />
);

const handleSubmit = async (e) => {
  e.preventDefault();

  const newUser = {
    name: formData.name,
    lastName: formData.lastName,
    email: formData.email,
    password: formData.password,
    photo: formData.photo,
    country: formData.country,
    role: role,
    from: "form",
  }

  try {
    await editUser(newUser);
  } catch (error) {
    console.log(error);
  } finally{
    dispatch(resetNewUserFormData())
  }
};
return (
  <form id="formEditUser" onSubmit={handleSubmit}>
    {formInputs.map((input) => renderInputs(input))}
    <button className="ButtonInput">Submit</button>
  </form>
);
}