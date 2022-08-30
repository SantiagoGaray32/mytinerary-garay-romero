import React from "react";
import "../styles/NewCity.css"
import Form from "../components/Input";

function NewCity ({ children }){
    return(
       
            <div className="newCityContainer">
                <div className="form">
                    <Form />
                </div>
            </div>
        

    )
}

export default NewCity;