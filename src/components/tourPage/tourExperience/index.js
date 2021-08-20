function TourExperience({ experience }) {
  return (
    <section className="tour-experience">
      <div className="main-container">
        <div className="experience-details">
          <h3 className="main-heading">What You Will Experience</h3>
          <p>{experience.text}</p>
        </div>
        <div className="image-container">
          {experience.imgURL ? <img src={experience.imgURL} alt="Experience" /> : <div className="experience-loader"></div>}
        </div>
      </div>
    </section>
  )
}

TourExperience.defaultProps = {
  experience: { text: 'Loading...' }
}

export default TourExperience;