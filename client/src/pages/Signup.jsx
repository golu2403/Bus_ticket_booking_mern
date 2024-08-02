import { useState } from 'react';
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

  const handleInput = (e) => {
    setUserinfo({ ...userinfo, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form with data:", userinfo);
    
    if (!userinfo.name || !userinfo.email || !userinfo.password || !userinfo.age || !userinfo.mobile || !userinfo.DOB) {
      setErrorMessage('Please fill out all fields.');
      console.log("Form submission failed: Not all fields are filled.");
      return;
    }

    if (userinfo.password !== userinfo.confirmPassword) {
      setErrorMessage('Passwords do not match.');
      console.log("Form submission failed: Passwords do not match.");
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

      if (response.ok) {
        console.log("Signup successful");
        setSuccessMessage('Signup successful');
        setErrorMessage('');
        
        // Optionally redirect to another page
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Signup failed');
        console.log("Signup failed:", errorData.message || 'Signup failed');
      }
    } catch (error) {
      console.error("Error occurred during signup:", error);
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center signup-page">
      <div className="row w-100 no-gutters">
        <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center p-0">
          <img src='/signup_bus.jpg' alt="Bus" className="img-fluid bus-image" />
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
              Already have an account? <a href="/login">Login here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
