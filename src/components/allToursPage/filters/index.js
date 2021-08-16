import { useState } from 'react';
import RatingsFilter from '../ratingsFilter';
import PriceFilter from '../priceFilter';
import CountryFilter from '../countryFilter';

const Filters = () => {
  const [shownFilters, setShownFilters] = useState({
    'country': false,
    'ratings': false,
    'price': false
  })

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
        <button onClick={btnClickHandler} className={shownFilters.country ? 'selected' : ''}>Country</button>
        <button onClick={btnClickHandler} className={shownFilters.ratings ? 'selected' : ''}>Ratings</button>
        <button onClick={btnClickHandler} className={shownFilters.price ? 'selected' : ''}>Price</button>
        <CountryFilter isShown={shownFilters.country} />
        <RatingsFilter isShown={shownFilters.ratings} />
        <PriceFilter isShown={shownFilters.price} />
      </div>
    </div>
  )
}

export default Filters;