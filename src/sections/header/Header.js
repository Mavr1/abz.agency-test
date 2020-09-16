import React from 'react';
import BurgerButton from '../../components/burgerButton/BurgerButton';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <header>
      <div className={[styles.headerContainer, 'container'].join(' ')}>
        <div className={styles.logoWrapper}>
          <img
            className={styles.logo}
            src={require('../../assets/favicon-32x32.png')}
            alt={'company logo testtask'}
          />
          <p className={styles.companyName}>testtask</p>
        </div>
        <BurgerButton />
      </div>
    </header>
  );
};

export default Header;
