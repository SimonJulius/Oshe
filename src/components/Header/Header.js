import React from 'react';
import styles from './header.module.scss';
import Logo from 'assets/images/logo.png';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={Logo} alt="logo" />
      </div>
    </div>
  );
};

export default Header;
