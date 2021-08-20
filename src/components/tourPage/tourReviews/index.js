import TourReview from "../tourReview";

function TourReviews({ reviews }) {
  return (
    <section className="tour-reviews">
      <div className="main-container">
        <h3 className="main-heading">What Visitors Say About It</h3>
        <div className="tour-reviews-container">
          {reviews.map((singleReview, index) => {
            return <TourReview {...singleReview} key={index} />
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