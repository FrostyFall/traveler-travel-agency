import { useContext, useState } from 'react';
import { QueryContext } from '../allToursContainer';

function PriceFilter({ isShown, filterRef }) {
  const setQueries = useContext(QueryContext);
  const [fromInput, setFromInput] = useState('$9');
  const [toInput, setToInput] = useState('$199');

  const controlFromInput = (e) => {
    setFromInput(() => {
      return (e.target.value === '') ? '$' : e.target.value;
    });
  }

  const controlToInput = (e) => {
    setToInput(() => {
      return (e.target.value === '') ? '$' : e.target.value;
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
    <div className={`price-filter ${isShown ? 'show' : 'hide'}`} ref={filterRef}>
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