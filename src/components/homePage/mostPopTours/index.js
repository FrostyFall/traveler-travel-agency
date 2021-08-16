import { Link } from 'react-router-dom';
import useFetch from "../../../hooks/useFetch";
import TourPreview from '../../common/tourPreview';

const MostPopTours = () => {
  const [data, setData] = useFetch('https://traveler-travel-agency.herokuapp.com/api/v1/popular-tours-previews');
  const { data: response, isFetching, isError } = data;

  return (
    <section className="most-popular-tours" id="most-popular-tours">
      <div className="main-container">
        <div className="info-container">
          <h3 className="main-heading">Our Most Popular Tours</h3>
          <Link to="/all-tours">Show More</Link>
        </div>
        <div className="tours">
          {!isFetching && !isError &&
            response.map(tour => {
              const { title, country, city, score, fromPrice, imgURL, fullDetails } = tour;
              const props = {
                title, country, city, score, fromPrice, imgURL, fullDetails
              }
              return <TourPreview {...props} key={tour._id}></TourPreview>
            })
          }
        </div>
      </div>
    </section>
  )
}

export default MostPopTours;