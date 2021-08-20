import { useEffect, useContext } from 'react';
import { CurrentPageContext } from '../App';
import AllToursShowcase from '../components/allToursPage/allToursShowcase';
import AllToursContainer from '../components/allToursPage/allToursContainer';

function AllTours() {
  const { setCurrentPage } = useContext(CurrentPageContext);

  useEffect(() => {
    setCurrentPage({ 'home': false, 'all-tours': true })
  }, [setCurrentPage])

  return (
    <>
      <AllToursShowcase />
      <AllToursContainer />
    </>
  )
}

export default AllTours;