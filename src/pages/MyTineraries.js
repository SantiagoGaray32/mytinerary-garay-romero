import "../styles/MyTineraries.css"
import Itinerary from "../components/Itinerary";

    //aca irian los itinerarios segun el usuario logeado, hay que crear el componente myTinearies
 
function MyTineraries (){
    return (
        <>
            <h2>MyTineraries</h2>
            <div className="myTinerariesContainer"></div>
            {/* aca iria el nuevo componente MyTineraries, donde se mostraria los itinerarios por usuario loggeado */}
        </>
    )
}
export default MyTineraries