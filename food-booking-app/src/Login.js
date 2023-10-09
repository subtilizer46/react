import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Validate the username and password, and perform authentication logic here.
    // For simplicity, we'll check if the username and password match hardcoded values.
    if (username === 'admin' && password === 'admin') {
      onLogin(true, username); // Pass the username to onLogin
    } else {
      onLogin(false, ''); // Pass an empty string on failed login
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;