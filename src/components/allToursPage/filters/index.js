import { useRef, useState, useEffect } from 'react';
import RatingsFilter from '../ratingsFilter';
import PriceFilter from '../priceFilter';
import CountryFilter from '../countryFilter';

function Filters() {
  const [shownFilters, setShownFilters] = useState({
    'country': false,
    'ratings': false,
    'price': false
  })
  const countryBtnRef = useRef(null);
  const ratingsBtnRef = useRef(null);
  const priceBtnRef = useRef(null);
  const countryFilterRef = useRef(null);
  const ratingsFilterRef = useRef(null);
  const priceFilterRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (countryFilterRef.current.classList.contains('show')) {
        if (!countryFilterRef.current.contains(event.target) && countryBtnRef.current !== event.target) {
          setShownFilters({
            'country': false,
            'ratings': false,
            'price': false
          })
        }
      }
      if (ratingsFilterRef.current.classList.contains('show')) {
        if (!ratingsFilterRef.current.contains(event.target) && ratingsBtnRef.current !== event.target) {
          setShownFilters({
            'country': false,
            'ratings': false,
            'price': false
          })
        }
      }
      if (priceFilterRef.current.classList.contains('show')) {
        if (!priceFilterRef.current.contains(event.target) && priceBtnRef.current !== event.target) {
          setShownFilters({
            'country': false,
            'ratings': false,
            'price': false
          })
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const btnClickHandler = (e) => {
    switch(e.currentTarget.textContent) {
      case 'Country': {
        setShownFilters(prevState => ({ country: !prevState.country, ratings: false, price: false }))
        break;
      }
      case 'Ratings': {
        setShownFilters(prevState => ({ country: false, ratings: !prevState.ratings, price: false }))
        break;
      }
      case 'Price': {
        setShownFilters(prevState => ({ country: false, ratings: false, price: !prevState.price }))
        break;
      }
      default: {
        break;
      }
    }
  }

  return (
    <div className="filters">
      <h4>Filters</h4>
      <div className="filters-container">
        <button ref={countryBtnRef} onClick={btnClickHandler} className={shownFilters.country ? 'selected' : ''}>Country</button>
        <button ref={ratingsBtnRef} onClick={btnClickHandler} className={shownFilters.ratings ? 'selected' : ''}>Ratings</button>
        <button ref={priceBtnRef} onClick={btnClickHandler} className={shownFilters.price ? 'selected' : ''}>Price</button>
        <CountryFilter isShown={shownFilters.country} filterRef={countryFilterRef}/>
        <RatingsFilter isShown={shownFilters.ratings} filterRef={ratingsFilterRef}/>
        <PriceFilter isShown={shownFilters.price} filterRef={priceFilterRef}/>
      </div>
    </div>
  )
}

export default Filters;