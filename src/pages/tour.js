import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CurrentPageContext } from '../App';
import useFetch from "../hooks/useFetch";
import TourShowcase from "../components/tourPage/tourShowcase";
import TourExperience from "../components/tourPage/tourExperience";
import TourReviews from "../components/tourPage/tourReviews";
import TourBooking from "../components/tourPage/tourBooking";

const TourPage = () => {
  const { tourId } = useParams();
  const [data, setData] = useFetch(`https://traveler-travel-agency.herokuapp.com/api/v1/all-tours/${tourId}`);
  const { data: response, isFetching, isError } = data;
  const { title, city, country, experience, imgURLs, prices, reviews, isFound } = response;
  const { currentPage, setCurrentPage } = useContext(CurrentPageContext);

  useEffect(() => {
    setCurrentPage({ 'home': false, 'all-tours': false })
  }, [])
  
  useEffect(() => {
    console.log(response)
  }, [data])
  
  return (
    <main>
      <TourShowcase imgURLs={imgURLs} title={title} country={country} city={city} />
      <TourExperience experience={experience} />
      <TourReviews reviews={reviews} />
      <TourBooking prices={prices} />
    </main>
  )
}

export default TourPage;