import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const notRickroll = () => {
    window.location.replace('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }

  return (
    <footer>
      <div className="footer-container">
        <div className="links main-container">
          <div className="social">
            <h3>Social</h3>
            <ul>
              <li className="facebook-icon">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faFacebookSquare} />
                </a>
              </li>
              <li className="twitter-icon">
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
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
                <span onClick={notRickroll}>About Us</span>
              </li>
              <li>
                <span onClick={notRickroll}>Most Popular Tours</span>
              </li>
              <li>
                <span onClick={notRickroll}>Agency Reviews</span>
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