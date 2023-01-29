import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import Rockets from '../pages/Rockets';
import Missions from './missions';
import Dragons from '../pages/Dragon';
import Myprofile from './myprofile';
import Logo from '../images/planet.png';
import styles from './navbar.module.css';

const Navbar = () => (
  <Router>
    <div>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img className={styles.logoImg} src={Logo} alt="logo" />
          <h1 className={styles.logo_text}>Space Travelers&apos; Hub</h1>
        </div>
        <div className={styles.ul_list}>
          <ul className={styles.ul}>
            <li>
              <Link
                style={{ textDecoration: 'none' }}
                className={styles.rockets}
                to="/"
              >
                Rockets
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: 'none' }}
                className={styles.missions}
                to="/Missions"
              >
                Missions
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: 'none' }}
                className={styles.dragonss}
                to="/Dragons"
              >
                Dragons
              </Link>
            </li>
            <li className={styles.dragons_cont}>
              <Link
                style={{ textDecoration: 'none' }}
                className={styles.dragons}
                to="/Profile"
              >
                My Profile
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/Missions" element={<Missions />} />
        <Route path="/Dragons" element={<Dragons />} />
        <Route path="/Profile" element={<Myprofile />} />
      </Routes>
    </div>
  </Router>
);

export default Navbar;
