import "../styles/CitiesPage.css"
import CityCard from "../components/CityCard";

function Cities({ children }) {
   
  return(

                  <div className="citiesContainer">  
                        <div className="background-cities">
                              <CityCard /> 
                        </div>
                  </div>
    
    
    )
    
}

export default Cities;
