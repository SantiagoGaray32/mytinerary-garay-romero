import { useEffect, useState } from "react";
import Carousel from "./Carousel";
import axios from "axios";


function CarouselWrapper (){

   const [slides, setSlides] = useState([]); 

    useEffect(() => {
        getCities().then(result => setSlides(result));
    },[]);

    const getCities = async () => {
        const result = await axios.get(
          `http://localhost:4000/cities`
        );
        return result.data;
      };

      return (<Carousel slides={slides}/>)

}
export default CarouselWrapper;