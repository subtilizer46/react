import React from 'react';
import { Helmet } from 'react-helmet';
import styles from './HeroSection.module.css';

function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
      </Helmet>
      <br /><br /><br /><br/><br/>
      <div className={styles.home_page}>
        {/* Hero Section */}
        <div className={styles.hero}>
          <div className={styles.hero_overlay}>
            <h1>Welcome to the AcademeX</h1>
            <p>Enhance your skills with our top courses</p>
            <a href="/courses" className={styles.customLink}>Explore Courses</a>
          </div>
        </div>

        {/* Course Cards */}
        <section id="courses" className={styles.course_section}>
          <div className={styles.course_card}>
            <h3>Python</h3>
            <p>Simplicity, Elegance, and Versatility</p>
          </div>
          <div className={styles.course_card}>
            <h3>ReactJS</h3>
            <p>Building User Interfaces, Where Components Come to Life</p>
          </div>
          <div className={styles.course_card}>
            <h3>Web3</h3>
            <p>Building the Web for a Beautiful Experience</p>
          </div>
        </section><br/><br/><br/>
      </div>
    </section>
  );
}

export default HeroSection;