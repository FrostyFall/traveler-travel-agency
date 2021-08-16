import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CountryContext } from '../../../App';
import useFetch from '../../../hooks/useFetch';
import showcaseImage from '../../../assets/images/showcase.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const HomeShowcase = () => {
  const history = useHistory();
  const [data, setData] = useFetch('https://traveler-travel-agency.herokuapp.com/api/v1/locations');
  const { data: response, isFetching, isError } = data;
  const [selected, setSelected] = useState('');
  const { selectedCountry, setSelectedCountry } = useContext(CountryContext);

  const optionChangeHandler = (e) => {
    setSelected(e.currentTarget.value);
  }

  useEffect(() => {
    return () => {
      setSelectedCountry(null);
    }
  }, [])

  useEffect(() => {
    if (response.length !== 0) {
      setSelected(response[0].title)
    }
  }, [data])

  const btnClickHandler = () => {
    setSelectedCountry(selected.replaceAll(' ', '+'));
    history.push('/all-tours')
  }

  return (
    <section className="showcase">
      <div className="main-container" style={{backgroundImage: `url(${showcaseImage})`}}>
        <div className="encouraging-msg">
          <h2>Explore Wonderful Corners<br/>Of The World<br/>With Us!</h2>
        </div>
        <div className="find-tour-container">
          <div className="custom-select">
            <FontAwesomeIcon icon={faChevronDown} />
            <select name="location" id="location" onChange={(e) => optionChangeHandler(e)} value={selected}>
              {!isFetching && !isError &&
                response.map((location) => {
                  return (
                    <option key={location._id} value={location.title}>{location.title}</option>
                  )
                })
              }
            </select>
          </div>
          <button type="button" onClick={btnClickHandler}>Find Tours</button>
        </div>
      </div>
    </section>
  )
}

export default HomeShowcase;