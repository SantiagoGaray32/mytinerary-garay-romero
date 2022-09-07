import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useGetAllCitiesQuery } from "../features/citiesAPI";
import { setCities } from "../features/citiesSlices";
import Carousel from "./Carousel";

function CarouselWrapper() {
  const slides = useSelector((state) => state.cities.cities);
  const dispatch = useDispatch();

  const { data } = useGetAllCitiesQuery();

  useEffect(() => {
    if (data) {
      dispatch(setCities(data));
    }
  }, [data]);

  return <Carousel slides={slides} />;
}
export default CarouselWrapper;
