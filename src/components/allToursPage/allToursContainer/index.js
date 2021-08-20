import React, { useContext, useEffect, useState } from 'react';
import { CountryContext } from '../../../App';
import TourPreview from '../../common/tourPreview';
import Filters from '../filters';
import fetchTourPreviews from '../../../functions/fetchTourPreviews';

export const QueryContext = React.createContext();

function AllToursContainer() {
  const { selectedCountry } = useContext(CountryContext);
  const [queries, setQueries] = useState({ minPrice: null, maxPrice: null, scores: null, country: (selectedCountry ? selectedCountry : null) });
  const [data, setData] = useState({ 
    data: { retrievedDocs: 0, documentsCount: 0, docs: [] }, 
    isFetching: false, 
    isError: false 
  });
  const [skipCount, setSkipCount] = useState(0);
  const [totalDocuments, setTotalDocuments] = useState(0);
  const [totalRetrievedDocs, setTotalRetrievedDocs] = useState(0);
  const [showMore, setShowMore] = useState(true);

  useEffect(() => {
    fetchTourPreviews(`https://traveler-travel-agency.herokuapp.com/api/v1/all-tours-previews`, queries, setData);
    setSkipCount(0);
    setTotalRetrievedDocs(0);
  }, [queries])

  useEffect(() => {
    (totalRetrievedDocs < totalDocuments) ? setShowMore(true) : setShowMore(false);
  }, [totalRetrievedDocs, totalDocuments])

  useEffect(() => {
    if (!data.isFetching && !data.isError && data.data.docs.length !== 0) {
      const { documentsCount, retrievedDocs } = data.data;

      setTotalDocuments(documentsCount);
      setTotalRetrievedDocs(prevState => prevState + retrievedDocs);
    } else {
      setTotalRetrievedDocs(0);
      setShowMore(false);
    }
  }, [data])

  const showMoreHandler = () => {
    fetchTourPreviews(`https://traveler-travel-agency.herokuapp.com/api/v1/all-tours-previews?skip=${skipCount + 6}`, queries, setData, true);
    setSkipCount(prevState => prevState + 6);
  };

  return (
    <section className="all-tours-content-container">
      <div className="main-container">
        <div className="all-tours-container">
          <div className="all-tours-info">
            <h3 className="main-heading">All Tours</h3>
            <QueryContext.Provider value={setQueries}>
              <Filters />
            </QueryContext.Provider>
          </div>
          <div className={(data.data.docs && (data.data.docs.length < 3) ? 'all-tours few' : 'all-tours')}>
            {data.data.docs && data.data.docs.map(tour => {
              const { title, country, city, score, fromPrice, imgURL, fullDetails } = tour;
              const props = {
                title, country, city, score, fromPrice, imgURL, fullDetails
              }
              return <TourPreview {...props} key={tour._id}></TourPreview>
            })}
          </div>
          {showMore && <button type="button" onClick={showMoreHandler}>Show More</button>}
        </div>
      </div>
    </section>
  )
}

export default AllToursContainer;