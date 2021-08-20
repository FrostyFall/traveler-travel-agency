import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function TourShowcase({ imgURLs, title, country, city }) {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0); 

  useEffect(() => {
    if (imgURLs) {
      setSlides(() => {
        return (
          imgURLs.map((image, index) => {
            return (
              <div key={index} className={'slide' + ((index === currentSlide) ? ' show' : '')}>
                <img src={image} alt={`${title} View ${index + 1}`} />
              </div>
            )
          })
        )
      })
    }
  }, [imgURLs, title, currentSlide])

  const previousSlide = () => {
    setCurrentSlide(prevState => {
      return (currentSlide === 0) ? slides.length - 1 : prevState - 1;
    })
  }

  const nextSlide = () => {
    setCurrentSlide(prevState => {
      return (currentSlide === slides.length - 1) ? 0 : prevState + 1;
    })
  }

  return (
    <section className="tour-showcase">
      <div className="main-container">
        <div className="images-container">
          {slides ? slides : <div className="loader" />}
        </div>
        {slides &&
          <>
            <div className="slider previous-slider" onClick={previousSlide}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div className="slider next-slider" onClick={nextSlide}>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </>
        }
        <div className="tour-info-container">
          <h2>{country}</h2>
          <h3>{title}, {city}</h3>
        </div>
      </div>
    </section>
  )
}

TourShowcase.defaultProps = {
  title: 'Tour title loading...',
  country: 'Country loading...',
  city: 'City loading...'
};

export default TourShowcase;