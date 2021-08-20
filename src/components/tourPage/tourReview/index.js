import getStars from '../../../functions/getStars';

function TourReview({ title, review, score }) {
  return (
    <div className="tour-review">
      <h4>{title}</h4>
      <div className="ratings">{getStars(score)}</div>
      <p>{review}</p>
    </div>
  )
}

export default TourReview;