import React from "react";
import WebsiteLayout from "../layout/WebsiteLayout";
import "../style/newCity.css"

function NewCity (){
    return(
        <WebsiteLayout>
            <div className="newCityContainer">
                <div className="newCityText">
                    <h4>Soon you will be able to add your next destination</h4>
                </div>
            </div>
        </WebsiteLayout>

    )
}

export default NewCity;