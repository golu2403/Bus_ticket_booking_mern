import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; // Custom CSS for additional styling

const Signup = () => {
  const [userinfo, setUserinfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    DOB: "",
    mobile: ""
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { id, value } = e.target;
    setUserinfo((prevUserinfo) => ({
      ...prevUserinfo,
      [id]: id === 'DOB' ? value : value.trim()
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userinfo.name || !userinfo.email || !userinfo.password || !userinfo.age || !userinfo.mobile || !userinfo.DOB) {
      setErrorMessage('Please fill out all fields.');
      return;
    }

    if (userinfo.password !== userinfo.confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/signup', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userinfo),
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
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center signup-page">
      <div className="row w-100 no-gutters">
        <div className="col-md-5 d-none d-md-flex align-items-center justify-content-center p-0">
          <img src='/logo.jpg' alt="Bus" className="img-fluid bus-image" />
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center p-5">
          <div className="signup-form-container p-5 rounded shadow">
            <h2 className="text-center mb-4">Sign Up</h2>
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
            {successMessage && <div className="alert alert-success">{successMessage}</div>}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id='name' placeholder="Enter your name" onChange={handleInput} value={userinfo.name} />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id='email' placeholder="Enter your email" onChange={handleInput} value={userinfo.email} />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id='password' placeholder="Enter your password" onChange={handleInput} value={userinfo.password} />
              </div>
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm your password" onChange={handleInput} value={userinfo.confirmPassword} />
              </div>
              <div className="mb-3">
                <label htmlFor="age" className="form-label">Age</label>
                <input type="number" className="form-control" id="age" placeholder="Enter your age" onChange={handleInput} value={userinfo.age} />
              </div>
              <div className="mb-3">
                <label htmlFor="DOB" className="form-label">Date of Birth</label>
                <input type="date" className="form-control" id="DOB" onChange={handleInput} value={userinfo.DOB} />
              </div>
              <div className="mb-3">
                <label htmlFor="mobile" className="form-label">Mobile Number</label>
                <input type="tel" className="form-control" id="mobile" placeholder="Enter your mobile number" onChange={handleInput} value={userinfo.mobile} />
              </div>
              <button type="submit" className="btn btn-primary w-100">Sign Up</button>
            </form>
            <p className="text-center mt-3">
              Already have an account? <a href="/signin">Login here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
