import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useAuth } from '../AuthContext/AuthContext'; 

function Navbar() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        AcademeX
      </div>

      <ul className={styles.leftNavList}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <ul className={styles.rightNavList}>
        {isLoggedIn ? (
          <>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li>
              <button className={styles.logoutButton} onClick={() => setIsLoggedIn(false)}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
