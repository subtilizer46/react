import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import { useAuth } from '../AuthContext/AuthContext';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');  // Default role set to 'student'
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password,
          role
        })
      });

      const data = await response.json();

      if (data.status === 'success') {
        setIsLoggedIn(true);
        navigate('/courses');  // Redirect to courses after successful login
        setError('');
      } else {
        setError(data.message || 'Invalid credentials');
      }
    } catch (err) {
      setError('Something went wrong. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.loginHeader}>AcademeX Login</h2>
      {error && <p className={styles.errorMessage}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className={styles.loginField}>
          <label className={styles.loginLabel}>Role:</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className={styles.loginInput}
          >
            <option value="student">Student</option>
            <option value="instructor">Instructor</option>
          </select>
        </div>
        <div className={styles.loginField}>
          <label className={styles.loginLabel}>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={styles.loginInput}
            placeholder="Enter your username"
          />
        </div>
        <div className={styles.loginField}>
          <label className={styles.loginLabel}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.loginInput}
            placeholder="Enter your password"
          />
        </div>
        <div className={styles.loginField}>
          <button type="submit" className={styles.loginButton} disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </div>
      </form>
      <div className={styles.footerText}>
        New here? <a href="/signup" className={styles.signupLink}>Sign up now!</a>
      </div>
    </div>
  );
}

export default Login;
