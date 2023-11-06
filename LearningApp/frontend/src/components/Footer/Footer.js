// Footer.js
import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.quickLinks}>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="#">Terms & Conditions</a></li>
        <li><a href="#">Privacy Policy</a></li>
      </ul>
      <div className={styles.socialIcons}>
        <a href="#"><i className={`fab fa-facebook ${styles.icon}`}></i></a>
        <a href="#"><i className={`fab fa-twitter ${styles.icon}`}></i></a>
        <a href="#"><i className={`fab fa-instagram ${styles.icon}`}></i></a>
      </div>
      <p>&copy; 2023 LearningManagement App</p>
    </footer>
  );
}

export default Footer;
