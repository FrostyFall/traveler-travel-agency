import { useContext, useState } from 'react';
import { QueryContext } from '../allToursContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const RatingsFilter = ({ isShown }) => {
  const [checkedScores, setCheckedScores] = useState({ 
    '12345': true,
    '5': false,
    '4': false,
    '3': false,
    '2': false,
    '1': false
   });
  const setQueries = useContext(QueryContext);

  const checkFilter = (queryStr) => {
    setCheckedScores(prevState => {
      let newState = {};
      (queryStr === '12345') ? newState = {
        '5': false,
        '4': false,
        '3': false,
        '2': false,
        '1': false
       } : newState = { ...prevState, '12345': false };
      newState[queryStr] = !prevState[queryStr];
      return newState;
    });
  }

  const btnClickHandler = () => {
    let query = '';
    for (let score in checkedScores) {
      if (checkedScores[score]) {
        query += score;
      }
    }
    setQueries(prevState => ({ ...prevState, scores: query}));
  }

  return (
    <div className={`ratings-filter ${isShown ? 'show' : 'hide'}`}>
      <label className="ratings-row">
        <input type="checkbox" value="12345" onChange={() => checkFilter('12345')} checked={checkedScores['12345']}/>
        <span>All Ratings</span>
      </label>
      <label className="ratings-row">
        <input type="checkbox" value="5" onChange={() => checkFilter('5')} checked={checkedScores['5']}/>
        <span>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </span>
      </label>
      <label className="ratings-row">
        <input type="checkbox" value="4" onChange={() => checkFilter('4')} checked={checkedScores['4']}/>
        <span>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </span>
      </label>
      <label className="ratings-row">
        <input type="checkbox" value="3" onChange={() => checkFilter('3')} checked={checkedScores['3']}/>
        <span>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </span>
      </label>
      <label className="ratings-row">
        <input type="checkbox" value="2" onChange={() => checkFilter('2')} checked={checkedScores['2']}/>
        <span>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </span>
      </label>
      <label className="ratings-row">
        <input type="checkbox" value="1" onChange={() => checkFilter('1')} checked={checkedScores['1']}/>
        <span>
          <FontAwesomeIcon icon={faStar} />
        </span>
      </label>
      <button type="button" onClick={btnClickHandler}>Apply</button>
    </div>
  )
}

export default RatingsFilter;