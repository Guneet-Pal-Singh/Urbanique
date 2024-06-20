import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './login.css'; // Import the CSS file
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [resp, setRes] = useState('');
  const [erro, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8081/customer', { email, password })
      .then(res => { 
        setRes(res.data); 
        setError('');
        // Redirect to home page after 2 seconds if login is successful
        if (res.data === "Login Successful") {
          setTimeout(() => {
            navigate('/'); // Redirect to home page
          }, 2000); // Redirect after 2 seconds
        }
      })
      .catch(err => { 
        setError(err.data); 
        setRes(''); 
      });
  };

  return (
    <div className='login'>
      <div className="login-form-container">
        <div className="company text-center font-bold text-2xl">Urbanique</div>
        <h2 className="login-form-title">Sign in to your account</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button className="login-button" type="submit">Login</button>
        </form>
        <br />
        <h1 className="text-center">{resp}</h1>
        <h1 className="text-red-500">{erro}</h1>
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default LoginForm;
