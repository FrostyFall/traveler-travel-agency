import { useEffect, useContext } from 'react';
import { CurrentPageContext } from '../App';
import HomeShowcase from '../components/homePage/homeShowcase';
import AboutUs from '../components/homePage/aboutUs';
import MostPopTours from '../components/homePage/mostPopTours';
import AgencyReviews from '../components/homePage/agencyReviews';
import Images from '../components/homePage/images';

const HomePage = () => {
  const { currentPage, setCurrentPage } = useContext(CurrentPageContext);

  useEffect(() => {
    setCurrentPage({ 'home': true, 'all-tours': false })
  }, [])
  
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