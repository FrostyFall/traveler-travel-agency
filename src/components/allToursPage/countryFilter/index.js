import { useContext, useEffect, useState } from "react";
import { QueryContext } from "../allToursContainer";
import { CountryContext } from "../../../App";
import useFetch from "../../../hooks/useFetch";

function CountryFilter({ isShown, filterRef }) {
  const setQueries = useContext(QueryContext);
  const { selectedCountry } = useContext(CountryContext);
  const [checkedLocations, setCheckedLocations] = useState({ all: true });
  const { data } = useFetch(
    "https://traveler-travel-agency.herokuapp.com/api/v1/locations"
  );

  useEffect(() => {
    if (!data.isFetching && !data.isError) {
      setCheckedLocations(() => {
        let newLocs = { all: true };

        data.data.forEach((location) => (newLocs[location.title] = false));
        if (selectedCountry) {
          for (let location in newLocs) newLocs[location] = false;
          newLocs[selectedCountry.replaceAll("+", " ")] = true;
        }

        return newLocs;
      });
    }
  }, [data, selectedCountry]);

  const checkFilter = (queryStr) => {
    setCheckedLocations((prevState) => {
      let newState = {};

      newState = { ...prevState, all: false };
      newState[queryStr] = !prevState[queryStr];
      if (Object.values(newState).every((val) => !val)) {
        newState = { ...newState, all: true };
      }

      return newState;
    });
  };

  const resetCheckedLocations = () => {
    setCheckedLocations(() => {
      let newState = {};

      for (let location in checkedLocations) {
        if (location !== "all") newState[location] = false;
      }
      newState["all"] = true;

      return newState;
    });
  };

  const btnClickHandler = () => {
    let query = "";

    for (let location in checkedLocations) {
      if (checkedLocations[location]) {
        query += location.replaceAll(" ", "+") + ",";
      }
    }
    query = query.slice(0, query.length - 1);

    setQueries((prevState) => ({
      ...prevState,
      country: query === "all" ? "" : query,
    }));
  };

  return (
    <div
      className={`country-filter ${isShown ? "show" : "hide"}`}
      ref={filterRef}
    >
      <div className='countries-container'>
        <label className='country-row'>
          <input
            type='checkbox'
            value='all'
            onChange={() => resetCheckedLocations()}
            checked={checkedLocations["all"]}
          />
          <span>All Countries</span>
        </label>
        {Object.keys(checkedLocations).length - 1 === data.data.length &&
          data.data.map((location) => {
            return (
              <label className='country-row' key={location.id}>
                <input
                  type='checkbox'
                  value={location.title}
                  onChange={() => checkFilter(location.title)}
                  checked={checkedLocations[location.title]}
                />
                <span>{location.title}</span>
              </label>
            );
          })}
      </div>
      <button type='button' onClick={btnClickHandler}>
        Apply
      </button>
    </div>
  );
}

export default CountryFilter;
