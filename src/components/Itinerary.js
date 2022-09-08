import React from "react";
import "../styles/Itinerary.css"
import Activities from "./Activities";
import Comments from "./Comments";

function Itinerary ({ children }){
    return(
        <div className="itinerariesContainer">
            <div>
                <h4>Itineraries:</h4>
            </div>
            <div className="itineraryDescription">
                    <div className="itineraryInfo">
                        <p>It is an excellent area with very good gastronomy.</p>
                    </div>
                    <div className="itinerary-price-duration">
                        <p>Price: $40</p>
                        <p>Duration: 3hrs.</p>
                    </div>
                    <div className="itineraryTags">
                        <p>#NewAdventure</p>
                        <p>#enjoying</p>
                        <p>#experience</p>   
                    </div>
                    <div className="itineraryUser">
                        <p>
                            name of the user who created the itinerary
                        </p>
                        <h4>Santiago Garay</h4>
                        <h6>User: SantiGaray</h6>
                    </div>
            </div>
            <Activities/>
            <Comments/>

        </div>
    )
    
    
}

export default Itinerary;