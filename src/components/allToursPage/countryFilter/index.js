import { useContext, useEffect, useState } from 'react';
import { QueryContext } from '../allToursContainer';
import { CountryContext } from '../../../App';
import useFetch from '../../../hooks/useFetch';

const CountryFilter = ({ isShown }) => {
  const { selectedCountry, setSelectedCountry } = useContext(CountryContext);
  const [checkedLocations, setCheckedLocations] = useState({ 
    'all': true
   });
  const [data, setData] = useFetch('https://traveler-travel-agency.herokuapp.com/api/v1/locations');
  const { data: response, isFetching, isError } = data;
  const [locations, setLocations] = useState([]);
  const setQueries = useContext(QueryContext);

  const checkFilter = (queryStr) => {
    setCheckedLocations(prevState => {
      let newState = {};
      if (queryStr === 'all') {
        for (let location in checkedLocations) {
          if (location !== 'all') newState[location] = false;
        }
      } else {
        newState = { ...prevState, 'all': false }
      }
      newState[queryStr] = !prevState[queryStr];
      return newState;
    });
  }

  const btnClickHandler = () => {
    let query = '';
    for (let location in checkedLocations) {
      if (checkedLocations[location]) {
        query += location.replaceAll(' ', '+') + ',';
      }
    }
    query = query.slice(0, query.length - 1);
    setQueries(prevState => ({ ...prevState, country: (query === 'all') ? '' : query}));
  }

  useEffect(() => {
    setCheckedLocations(prevState => {
      let newLocs = { 'all': true };
      response.forEach(location => {
        newLocs[location.title] = false
      })
      if (selectedCountry) {
        for (let location in newLocs) {
          newLocs[location] = false;
        }
        newLocs[selectedCountry.replaceAll('+', ' ')] = true;
      }
      return newLocs;
    })
  }, [data])

  useEffect(() => {
    setLocations(() => {
      return response.map(location => {
        return (
          <label className="country-row" key={location._id}>
            <input type="checkbox" value={location.title} onChange={() => checkFilter(location.title)}
            checked={checkedLocations[location.title]} />
            <span>{location.title}</span>
          </label>
        )
      })
    })
  }, [checkedLocations])

  return (
    <div className={`country-filter ${isShown ? 'show' : 'hide'}`}>
      <div className="countries-container">
        <label className="country-row">
          <input type="checkbox" value="all" onChange={() => checkFilter('all')}
          checked={checkedLocations['all']} />
          <span>All Countries</span>
        </label>
        {locations}
        {/* {!isFetching && !isError && 
          response.map(location => {
            return (
              <label className="country-row" key={location._id}>
                <input type="checkbox" value={location.title} onChange={() => checkFilter(location.title)}
                checked={checkedLocations[location.title]} />
                <span>{location.title}</span>
              </label>
            )
          })
        } */}
      </div>
      <button type="button" onClick={btnClickHandler}>Apply</button>
    </div>
  )
}

export default CountryFilter;