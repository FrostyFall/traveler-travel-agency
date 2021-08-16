import { useContext, useState } from 'react';
import { QueryContext } from '../allToursContainer';

const PriceFilter = ({ isShown }) => {
  const [fromInput, setFromInput] = useState('$9');
  const [toInput, setToInput] = useState('$199');
  const setQueries = useContext(QueryContext);

  const controlFromInput = (e) => {
    setFromInput(() => {
      if (e.target.value === '') return '$';
      else return e.target.value;
    });
  }

  const controlToInput = (e) => {
    setToInput(() => {
      if (e.target.value === '') return '$';
      else return e.target.value;
    });
  }

  const btnClickHandler = () => {
    const fromPrice = Number.parseInt(fromInput.slice(1), 10);
    const toPrice = Number.parseInt(toInput.slice(1), 10);
    if (fromPrice <= toPrice) {
      setQueries(prevState => ({ ...prevState, minPrice: fromPrice, maxPrice: toPrice }));
    }
  }

  return (
    <div className={`price-filter ${isShown ? 'show' : 'hide'}`}>
      <div className="price-container">
        <div className="from-container">
          <span>From</span>
          <input type="text" value={fromInput} onChange={(e) => controlFromInput(e)} />
        </div>
        <div className="to-container">
          <span>To</span>
          <input type="text" value={toInput} onChange={(e) => controlToInput(e)} />
        </div>
      </div>
      <button type="button" onClick={btnClickHandler}>Apply</button>
    </div>
  )
}

export default PriceFilter;