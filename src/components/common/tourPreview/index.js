import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarFull, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';

const TourPreview = ({ title, country, city, score, fromPrice, imgURL, fullDetails }) => {
  const history = useHistory();

  const getStars = () => {
    const floorScore = Math.floor(score);
    const reminder = score - floorScore;
    let stars = [];
    for(let i = 1; i <= 5; i++) {
      if (i <= floorScore) {
        stars.push(<FontAwesomeIcon icon={faStarFull} key={i} />);
      } else if (i === floorScore + 1) {
        if (reminder > 0.67) {
          stars.push(<FontAwesomeIcon icon={faStarFull} key={i} />);
        } else if (reminder <= 0.67 && reminder >= 0.34) {
          stars.push(<FontAwesomeIcon icon={faStarHalfAlt} key={i} />);
        } else {
          stars.push(<FontAwesomeIcon icon={faStarEmpty} key={i} />);
        }
      } else {
        stars.push(<FontAwesomeIcon icon={faStarEmpty} key={i} />);
      }
    }
    return stars;
  }

  const redirectToTour = (e) => {
    const { tourId } = e.currentTarget.dataset;
    history.push('/tour/' + tourId);
    window.scrollTo(0, 0);
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
              {getStars()}
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