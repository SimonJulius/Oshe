import React from 'react';

import styles from './directory.module.scss';

const Directory = () => {
  return (
    <div className={styles.directory}>
      <div className={styles.wrapper}>
        <div className={styles.women}>
          <a>Women Fashion</a>
        </div>
        <div className={styles.men}>
          <a>Men Fashion</a>
        </div>
      </div>
    </div>
  );
};

export default Directory;
