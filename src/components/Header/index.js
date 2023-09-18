// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-card">
    <div className="logo-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo-img"
      />
      <p className="logo-text">Wave</p>
    </div>
    <div className="nav-link-card">
      <li className="nav-link">
        <Link className="link" to="/">
          Home
        </Link>
      </li>
      <li className="nav-link">
        <Link className="link" to="/about">
          About
        </Link>
      </li>
      <li className="nav-link">
        <Link className="link" to="/contact">
          Contact
        </Link>
      </li>
    </div>
  </div>
)

export default Header
