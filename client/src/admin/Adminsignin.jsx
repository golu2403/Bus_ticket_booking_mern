import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './adminsignin.css'; 

const AdminSignin = () => {
  const [adminInfo, setAdminInfo] = useState({
    email: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { id, value } = e.target;
    setAdminInfo((prevAdminInfo) => ({
      ...prevAdminInfo,
      [id]: value.trim()
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = adminInfo;

    if (!email || !password) {
      setErrorMessage('Both fields are required.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/adminsignin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        setErrorMessage('');
        localStorage.setItem('token', data.token); // Store the token
        navigate('/admin-dashboard'); // Redirect to admin dashboard after successful sign-in
      } else {
        setErrorMessage(data.message || 'Sign-in failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Admin Sign In</h2>
          <form onSubmit={handleSubmit}>
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
            <div className="form-group mb-3">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={adminInfo.email}
                onChange={handleInput}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={adminInfo.password}
                onChange={handleInput}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Sign In</button>
          </form>
          <p className="text-center mt-3">
            New to Website? <a href="/adminsignup">Register here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminSignin;
