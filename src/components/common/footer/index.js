import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="links main-container">
          <div className="social">
            <h3>Social</h3>
            <ul>
              <li className="facebook-icon">
                <a href="https://facebook.com" target="_blank">
                  <FontAwesomeIcon icon={faFacebookSquare} />
                </a>
              </li>
              <li className="twitter-icon">
                <a href="https://twitter.com" target="_blank">
                  <FontAwesomeIcon icon={faTwitterSquare} />
                </a>
              </li>
            </ul>
          </div>
          <div className="contacts">
            <h3>Contacts</h3>
            <ul>
              <li>info@agency.travel</li>
              <li>(+1) 222-555-32</li>
              <li>(+1) 222-555-32</li>
            </ul>
          </div>
          <div className="company">
            <h3>Company</h3>
            <ul>
              <li>
                <Link to="/#about-us">About Us</Link>
              </li>
              <li>
                <Link to="/#most-popular-tours">Most Popular Tours</Link>
              </li>
              <li>
                <Link to="/#agency-reviews">Agency Reviews</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <h2>Copyright &copy; TravelAgency 2021</h2>
        </div>
      </div>
    </footer>
  )
}

export default Footer;