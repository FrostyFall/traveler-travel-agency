import { useState } from "react";

const TourBooking = ({ prices }) => {
  const { features: standardFeatures, price: standardPrice } = prices.standard;
  const { features: premiumFeatures, price: premiumPrice } = prices.premium;
  const [nameInput, setNameInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const [emailInput, setEmailInput] = useState('');

  return (
    <section className="tour-booking">
      <div className="main-container">
        <div className="inner-container">
          <h3 className="main-heading">Ready to try it out? Fill the form below</h3>
          <div className="booking-container">
            <div className="booking">
              <div className="options">
                <button className="standard selected">
                  <div className="info">
                    <h4>Standard</h4>
                    <h5>{standardFeatures}</h5>
                  </div>
                  <h4 className="cost">${standardPrice}</h4>
                </button>
                <button className="premium">
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
            <button>Book Tour</button>
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