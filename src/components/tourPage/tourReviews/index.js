import TourReview from "../tourReview";

const TourReviews = ({ reviews }) => {
  return (
    <section className="tour-reviews">
      <div className="main-container">
        <h3 className="main-heading">What Our Clients Say About It</h3>
        <div className="tour-reviews-container">
          {reviews && reviews.map(singleReview => {
            return <TourReview {...singleReview} />
          })}
        </div>
      </div>
    </section>
  )
}

TourReviews.defaultProps = {
  reviews: [
    { title: 'Loading...', review: 'Loading...', score: 0 },
    { title: 'Loading...', review: 'Loading...', score: 0 },
    { title: 'Loading...', review: 'Loading...', score: 0 }
  ]
}

export default TourReviews;