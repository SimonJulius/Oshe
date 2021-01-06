import React from 'react';
import { Link } from 'react-router-dom';

import styles from './header.module.scss';
import Logo from 'assets/images/logo.png';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className={styles.menu}>
        <ul>
          <li>
            <Link to="/registration">Register</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
