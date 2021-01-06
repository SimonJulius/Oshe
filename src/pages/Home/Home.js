import React from 'react';

import Directory from 'components/Directory';
import styles from './home.module.scss';
const Home = () => {
  return (
    <section className={styles.home}>
      <Directory />
    </section>
  );
};

export default Home;
