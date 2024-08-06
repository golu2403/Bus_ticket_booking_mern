import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignIn = () => {
  const [userinfo, setUserinfo] = useState({
    email: "",
    password: ""
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleInput = (e) => {
    setUserinfo({ ...userinfo, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userinfo.email || !userinfo.password) {
      return setErrorMessage('Please fill out all fields.');
    }
    try {
      const response = await fetch('http://localhost:8000/signin', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userinfo),
      });
      const data = await response.json();
      if (data.valid === 1) {
        localStorage.setItem('token', data.token); // Store the token
        navigate("/");
      } else {
        setErrorMessage("Invalid user credentials");
      }
    } catch (error) {
      console.log(error);
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundImage: "url('https://res.cloudinary.com/globes/image/upload/t_800X392/v1624885267/direct/shutterstock_1653066394%D7%90%D7%A7%D7%9C%D7%99%D7%9D_qgekx3.jpg')", backgroundSize: 'cover', paddingBottom: '100px' }}>
      <div className="card p-4" style={{ maxWidth: '400px', width: '100%', background: 'rgba(255, 255, 255, 0.9)' }}>
        <div className="card-body">
          <h2 className="text-center mb-4">Sign In</h2>
          {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input 
                type="email" 
                className="form-control" 
                id="email" 
                placeholder="Enter your email" 
                onChange={handleInput} 
                value={userinfo.email}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input 
                type="password" 
                className="form-control" 
                id="password" 
                placeholder="Enter your password" 
                onChange={handleInput} 
                value={userinfo.password}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Sign In</button>
          </form>
          <p className="text-center mt-3">
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
