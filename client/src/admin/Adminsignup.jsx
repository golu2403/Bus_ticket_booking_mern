import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './adminsignup.css'; // Import your custom CSS for additional styles

const AdminSignup = () => {
  const [adminInfo, setAdminInfo] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
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

    const { username, email, password, confirmPassword, phone } = adminInfo;

    if (!username || !email || !password || !confirmPassword || !phone) {
      setErrorMessage('All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/adminsignup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(adminInfo),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccessMessage('Signup successful');
        setErrorMessage('');
        localStorage.setItem('token', data.token); // Store the token
        navigate('/signin');
      } else {
        setErrorMessage(data.message || 'Signup failed');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img 
            src="https://www.vrlbus.in/VRLVijayanandTravels/gallery/images/site/Bengaluru%20Vita.png?d=1.1" 
            alt="Admin Signup" 
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2 className="text-center mb-4">Admin Signup</h2>
          <form onSubmit={handleSubmit}>
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
            {successMessage && <div className="alert alert-success">{successMessage}</div>}
            <div className="form-group mb-3">
              <label htmlFor="username">Username</label>
              <input 
                type="text" 
                className="form-control" 
                id="username" 
                placeholder="Enter username" 
                value={adminInfo.username} 
                onChange={handleInput} 
              />
            </div>
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
            <div className="form-group mb-3">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input 
                type="password" 
                className="form-control" 
                id="confirmPassword" 
                placeholder="Confirm Password" 
                value={adminInfo.confirmPassword} 
                onChange={handleInput} 
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="phone">Phone Number</label>
              <input 
                type="tel" 
                className="form-control" 
                id="phone" 
                placeholder="Enter phone number" 
                value={adminInfo.phone} 
                onChange={handleInput} 
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
          </form>
          <p className="text-center mt-3">
            Already have an account? <a href="/adminsignin">Login here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminSignup;
