import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CurrentPageContext } from '../../../App';

const Header = () => {
  const { currentPage, setCurrentPage } = useContext(CurrentPageContext);

  return (
    <header>
      <div className="main-container">
        <h1 className="logo">Travel<span>er</span></h1>
        <nav>
          <ul>
            <li className={currentPage['home'] ? 'selected': ''}>
              <Link to="/">Home</Link>
            </li>
            <li className={currentPage['all-tours'] ? 'selected': ''}>
              <Link to="/all-tours">All Tours</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;