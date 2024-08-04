import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignIn = () => {
  const [userinfo, setUserinfo] = useState({
    email: "",
    password: ""
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleInput = (e) => {
    setUserinfo({ ...userinfo, [e.target.id]: e.target.value });
    setErrorMessage(''); // Clear error message on new input
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userinfo.email || !userinfo.password) {
      return setErrorMessage('Please fill out all fields.');
    }
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:8000/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userinfo),
      });
      const data = await response.json();
      setLoading(false);
      if (data.valid === 1) {
        navigate("/");
      } else {
        setErrorMessage(data.message || "Invalid user credentials");
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/d/dc/Millennium_Depot_1.jpg')", backgroundSize: 'cover' }}>
      <div className="card p-4" style={{ maxWidth: '400px', width: '100%', background: 'rgba(255, 255, 255, 0.9)' }}>
        <div className="card-body">
          <h2 className="text-center mb-4">Sign In</h2>
          {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className={`form-control ${errorMessage && !userinfo.email ? 'is-invalid' : ''}`}
                id="email"
                placeholder="Enter your email"
                onChange={handleInput}
                value={userinfo.email}
              />
              {!userinfo.email && errorMessage && <div className="invalid-feedback">Email is required.</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className={`form-control ${errorMessage && !userinfo.password ? 'is-invalid' : ''}`}
                id="password"
                placeholder="Enter your password"
                onChange={handleInput}
                value={userinfo.password}
              />
              {!userinfo.password && errorMessage && <div className="invalid-feedback">Password is required.</div>}
            </div>
            <button type="submit" className="btn btn-primary w-100" disabled={loading}>
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>
         
          <p className="text-center">
            Don't have an account? <a href='/signup'>Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
