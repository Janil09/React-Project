import React, { useState } from 'react';
import './LoginScreen.css';

function LoginScreen({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add authentication logic here
    onLogin();
  };

  return (
    <div className="loginScreen">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
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
    </div>
  );
}

export default LoginScreen;







