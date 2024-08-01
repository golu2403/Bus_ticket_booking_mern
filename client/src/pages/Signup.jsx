import {useState} from 'react';
import './Signup.css'; // Custom CSS for additional styling


const Signup = () => {
 
  const [userinfo,setuserinfo]=useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    age:"",
    DOB: "",
    mobile:""
  });

const [errorMessage, setErrorMessage] = useState('');

  const handleInput = (e) => {
    console.log(e.target.value);
  setuserinfo({ ...userinfo, [e.target.id]: e.target.value.trim() });
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
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id='name' placeholder="Enter your name" onChange={handleInput} required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id='email' placeholder="Enter your email" onChange={handleInput} required  />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id='password' placeholder="Enter your password" onChange={handleInput} required />
              </div>
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm your password" onChange={handleInput} required />
              </div>
              <div className="mb-3">
                <label htmlFor="gender" className="form-label">Gender</label>
                <select className="form-select" id="gender" defaultValue="" required>
                  <option value="" disabled>Select your gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="age" className="form-label">Age</label>
                <input type="number" className="form-control" id="age" placeholder="Enter your age" onChange={handleInput} required />
              </div>
              <div className="mb-3">
                <label htmlFor="dob" className="form-label">Date of Birth</label>
                <input type="date" className="form-control" id="dob" onChange={handleInput} required />
              </div>
              <div className="mb-3">
                <label htmlFor="mobile" className="form-label">Mobile Number</label>
                <input type="tel" className="form-control" id="mobile" placeholder="Enter your mobile number" onChange={handleInput} required />
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
