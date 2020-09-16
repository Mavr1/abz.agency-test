import React from 'react';
import styles from './styles.module.scss';

const ButtonMobile = ({ title, invert }) => {
  return (
    <button
      className={invert ? styles.buttonMobileInvert : styles.buttonMobile}
    >
      {title}
    </button>
  );
};

export default ButtonMobile;
