import React from 'react';
import styles from './About.module.css';

function About() {
  return (
    <div className={styles.aboutContainer}>
      <h1>About AcademeX</h1>
      <p>
        AcademeX is a pioneer in the digital education realm, striving to bridge the 
        knowledge gap for learners worldwide. Our platform hosts courses across a myriad 
        of disciplines, ensuring everyone finds their path to enlightenment.
      </p>
      <div className={styles.mission}>
        <h2>Our Mission</h2>
        <p>
          Our mission is to democratize education, making it accessible, affordable, 
          and invaluable for everyone, everywhere. We believe in the transformative power 
          of education and its ability to elevate lives.
        </p>
      </div>
      <div className={styles.vision}>
        <h2>Our Vision</h2>
        <p>
          We envision a world where every individual, irrespective of their background, 
          can have access to top-notch educational resources and unlock their true potential.
        </p>
      </div>
    </div>
  );
}

export default About;
