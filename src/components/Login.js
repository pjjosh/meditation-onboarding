// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// TODO: Import Firebase authentication methods from 'firebase/auth'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // TODO: Implement login functionality with Firebase
  const handleLogin = (e) => {
    e.preventDefault();
    
    // TODO: Replace this with Firebase login logic
    if (email === 'test@example.com' && password === 'password') {
      navigate('/home');
    } else {
      console.error('Invalid login credentials');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {/* TODO: Add styling to this form using App.css */}
    </div>
  );
}

export default Login;
