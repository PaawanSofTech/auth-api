// src/components/Button.js

import React from 'react';
import styles from '../styles/globals.scss'; // Adjust the path as per your project structure

const Button = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
