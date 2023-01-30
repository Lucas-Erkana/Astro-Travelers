import React from 'react';
// Routes, Route,
import {
  BrowserRouter as Router, Link,
} from 'react-router-dom';
import Logo from '../images/planet.png';
import './Navbar.css';

const Navbar = () => (
  <Router>
    <div>
      <nav className="navbar">

        <div className="logo">
          <img className="logoImg" src={Logo} alt="logo" />
          <h1 className="logo-text">Space Travelers&apos; Hub</h1>
        </div>
        <div className="ul-list">
          <ul className="ul">
            <li>
              <Link
                style={{ textDecoration: 'none' }}
                className="rockets"
                to="/"
              >
                Rockets
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: 'none' }}
                className="missions"
                to="missions"
              >
                Missions
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: 'none' }}
                className="Dragonss"
                to="Dragons"
              >
                Dragons
              </Link>
            </li>
            <div className="vertical-line" />
            <li>
              <Link
                style={{ textDecoration: 'none' }}
                className="dragons"
                to="profile"
              >
                My Profile
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="horizental-line" />
    </div>
  </Router>
);

export default Navbar;
