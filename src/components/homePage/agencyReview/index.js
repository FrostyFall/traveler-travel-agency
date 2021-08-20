function AgencyReview({ author, country, review }) {
  return (
    <div className="agency-review">
      <p>“{review}”</p>
      <h5>by {author}, <span>{country}</span></h5>
    </div>
  )
}

AgencyReview.defaultProps = {
  author: 'Unknown',
  country: 'Unknown Country',
  review: 'Review'
}

export default AgencyReview;