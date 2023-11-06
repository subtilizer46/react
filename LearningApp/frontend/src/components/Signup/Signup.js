import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import styles from './Signup.module.css';

function Signup() {
  const [username, setUsername] = useState('');  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');  // Default role set to 'student'
  const [error, setError] = useState('');  
  const navigate = useNavigate();  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password, role }),  
      });

      if (!response.ok) {
        const message = await response.text();
        throw new Error(message || 'Error from server');
      }

      const data = await response.json();

      if (data.status === 'success') {
        navigate('/login');  
      } else {
        setError(data.message || 'Failed to signup');
      }
    } catch (error) {
      setError(error.message || 'Something went wrong. Please try again later.');
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>AcademeX Signup</h2>
      {error && <p className={styles.errorMessage}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input 
          className={styles.inputField}
          type="text"
          placeholder="Username" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input 
          className={styles.inputField}
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          className={styles.inputField}
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
        />
        <select 
          className={styles.selectField}
          value={role} 
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="student">Student</option>
          <option value="instructor">Instructor</option>
        </select>
        <button className={styles.signupButton} type="submit">Signup</button>
      </form>
      <div className={styles.footerText}>
        Already have an account? <a href="/login" className={styles.loginLink}>Login here!</a>
      </div>
    </div>
  );
}

export default Signup;
