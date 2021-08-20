import { useHistory } from 'react-router-dom';
import getStars from '../../../functions/getStars';

function TourPreview({ title, city, score, fromPrice, imgURL, fullDetails }) {
  const history = useHistory();

  const redirectToTour = (e) => {
    const { tourId } = e.currentTarget.dataset;
    
    history.push('/tour/' + tourId);
    window.scrollTo(0,0);
  }

  return (
    <div className="tour" data-tour-id={fullDetails} onClick={redirectToTour}>
      <div className="tour-image">
        <img src={imgURL} alt="Tour" />
      </div>
      <div className="tour-info">
        <div className="general-info">
          <h4 className="tour-name">{title},<br/>{city}</h4>
          <div className="ratings-container">
            <div className="ratings">
              {getStars(score)}
            </div>
            <span className="score">{score}</span>
          </div>
        </div>
        <div className="cost-info">
          <h4>from</h4>
          <span className="cost">${fromPrice}</span>
        </div>
      </div>
    </div>
  )
}

export default TourPreview;