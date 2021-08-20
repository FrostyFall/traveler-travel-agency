import { useContext, useEffect, useState, useRef } from "react";
import { NotificationContext } from "../../../App";
import validateInputs from '../../../functions/validateInputs';
import axios from 'axios';

function TourBooking({ prices }) {
  const { features: standardFeatures, price: standardPrice } = prices.standard;
  const { features: premiumFeatures, price: premiumPrice } = prices.premium;
  const [plans, setPlans] = useState({ standard: true, premium: false });
  const [nameInput, setNameInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const setNotification = useContext(NotificationContext);
  const [isDelayExpired, setIsDelayExpired] = useState(true);
  const delayId = useRef(null);

  useEffect(() => {
    return () => {
      clearTimeout(delayId.current);
    } 
  }, [])

  const optionClickHandler = (e) => {
    if (e.currentTarget.classList.contains('standard')) {
      setPlans({ standard: true, premium: false })
    } else {
      setPlans({ standard: false, premium: true })
    }
  }

  const bookTour = async () => {
    if (isDelayExpired) {
      const validated = validateInputs(nameInput, phoneInput, emailInput);

      if (!validated.name || !validated.phone || !validated.email) {
        setNotification({ 
          isShown: true,
          status: 'error',
          msgTitle: 'Validation failed',
          msg: (!validated.name) ? 'Name is incorrect. Name should only contain characters.'
          : (!validated.phone) ? 'Phone is incorrect. Use pattern +XXXX(1-4) YYYY(1-4) ZZZNNNN.'
          : 'Email address is incorrect.'
        })
      } else {
        setIsDelayExpired(false);
        const id = setTimeout(() => setIsDelayExpired(true), 10000);
        delayId.current = id;
        try {
          await axios.post('https://traveler-travel-agency.herokuapp.com/api/v1/bookTour', {
            fullName: nameInput,
            phone: phoneInput,
            email: emailInput,
            plan: (plans.standard ? 'standard' : 'premium')
          })
          setNotification({ 
            isShown: true,
            status: 'success',
            msgTitle: 'Booking successful',
            msg: 'Tour has been booked! Check your email for more details.'
          })
          setPlans({ standard: true, premium: false });
          setNameInput('');
          setPhoneInput('');
          setEmailInput('');
        } catch(err) {
          setNotification({ 
            isShown: true,
            status: 'error',
            msgTitle: 'Booking failed',
            msg: 'Something went wrong. Try again sometime!'
          })
        }
      }
    } else {
      setNotification({ 
        isShown: true,
        status: 'warning',
        msgTitle: 'Cannot send another request',
        msg: 'You\'ve sent request recently. Try again sometime!'
      })
    }
  }

  return (
    <section className="tour-booking">
      <div className="main-container">
        <div className="inner-container">
          <h3 className="main-heading">Ready to try it out? Fill the form below</h3>
          <div className="booking-container">
            <div className="booking">
              <div className="options">
                <button className={'standard' + (plans.standard ? ' selected' : '')}
                onClick={(e) => optionClickHandler(e)}>
                  <div className="info">
                    <h4>Standard</h4>
                    <h5>{standardFeatures}</h5>
                  </div>
                  <h4 className="cost">${standardPrice}</h4>
                </button>
                <button className={'premium' + (plans.premium ? ' selected' : '')}
                onClick={(e) => optionClickHandler(e)}>
                  <div className="info">
                    <h4>Premium</h4>
                    <h5>{premiumFeatures}</h5>
                  </div>
                  <h4 className="cost">${premiumPrice}</h4>
                </button>
              </div>
              <form>
                <input type="text" placeholder="Full Name" value={nameInput} onChange={(e) => setNameInput(e.target.value)} />
                <input type="text" placeholder="Phone Number" value={phoneInput} onChange={(e) => setPhoneInput(e.target.value)} />
                <input type="email" placeholder="Email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} />
              </form>
            </div>
            <button type="button" onClick={bookTour}>Book Tour</button>
          </div>
        </div>
      </div>
    </section>
  )
}

TourBooking.defaultProps = {
  prices: {
    standard: {
      features: 'Loading...',
      price: '0'
    },
    premium: {
      features: 'Loading...',
      price: '0'
    }
  }
}

export default TourBooking;