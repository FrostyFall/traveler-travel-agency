import React, { useState } from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/common/header';
import Footer from './components/common/footer';
import Notification from './components/common/notification';
import HomePage from './pages/home.js';
import AllToursPage from './pages/allTours';
import TourPage from './pages/tour';

export const CurrentPageContext = React.createContext();
export const CountryContext = React.createContext();
export const NotificationContext = React.createContext();

const App = () => {
  const [currentPage, setCurrentPage] = useState({ 'home': false, 'all-tours': false });
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [notification, setNotification] = useState({});

  return (
    <>
      <Router>
        <CurrentPageContext.Provider value={{currentPage, setCurrentPage}}>
          <NotificationContext.Provider value={setNotification}>
            <Header />
            <Switch>
              <CountryContext.Provider value={{selectedCountry, setSelectedCountry}}>
                <Route exact path='/' component={HomePage} />
                <Route path='/all-tours' component={AllToursPage} />
                <Route path="/tour/:tourId" component={TourPage} />
              </CountryContext.Provider>
            </Switch>
            <Footer />
            <Notification {...notification} />
          </NotificationContext.Provider>
        </CurrentPageContext.Provider>
      </Router>
    </>
  );
}

export default App;
