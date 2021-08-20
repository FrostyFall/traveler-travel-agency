import { useEffect, useContext } from 'react';
import { CurrentPageContext } from '../App';
import HomeShowcase from '../components/homePage/homeShowcase';
import AboutUs from '../components/homePage/aboutUs';
import MostPopTours from '../components/homePage/mostPopTours';
import AgencyReviews from '../components/homePage/agencyReviews';
import Images from '../components/homePage/images';

function HomePage() {
  const { setCurrentPage } = useContext(CurrentPageContext);

  useEffect(() => {
    setCurrentPage({ 'home': true, 'all-tours': false })
  }, [setCurrentPage])
  
  return (
    <>
      <HomeShowcase />
      <AboutUs />
      <MostPopTours />
      <AgencyReviews />
      <Images />
    </>
  )
}

export default HomePage;