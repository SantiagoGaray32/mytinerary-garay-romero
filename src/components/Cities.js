// import React from "react";
import WebsiteLayout from "../layout/WebsiteLayout";
import "../style/citiesPage.css"
import CityCard from "./CityCard";

function Cities({ children }) {
  return(
    <WebsiteLayout>
                  <div className="citiesContainer">  
                        <div className="background-cities">
                              <CityCard /> 
                        </div>
                  </div>
    </WebsiteLayout>
    
    )
    
}

export default Cities;
