const TourShowcase = ({ imgURLs, title, country, city }) => {
  return (
    <section className="tour-showcase">
      <div className="main-container">
        <div className="images-container">
          {imgURLs ? <img src={imgURLs[0]} alt="Grand Canyon View" /> : <div className="loader"></div>}
        </div>
        <div className="tour-info-container">
          <h2>{country}</h2>
          <h3>{title}, {city}</h3>
        </div>
      </div>
    </section>
  )
}

TourShowcase.defaultProps = {
  title: 'Loading...',
  country: 'Loading...',
  city: 'Loading...'
};

export default TourShowcase;