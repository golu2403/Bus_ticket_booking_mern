import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// import './ticket.css';

const Ticket = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bus } = location.state;
  const userName = localStorage.getItem('name');

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="container">
      <h2 className="mt-4">Your Ticket</h2>
      <div className="card mt-4 mb-4 shadow-sm">
      <div className="card-header">
          Ticket Confirmation for {userName} 
        </div>
        <div className="card-body">
          <h5 className="card-title">Journey Details</h5>
          <p className="card-text"><strong>From:</strong> {bus.source}</p>
          <p className="card-text"><strong>To:</strong> {bus.destination}</p>
          <p className="card-text"><strong>Date:</strong> {bus.date}</p>
          <p className="card-text"><strong>Bus ID:</strong> {bus.busId}</p>
          <p className="card-text"><strong>Price:</strong> ₹{bus.price}</p>
          <p className="card-text"><strong>Seats Reserved:</strong> {bus.totalSeats - bus.availableSeats}</p>

          <div className="alert alert-success mt-4" role="alert">
            Payment successful! Your seat(s) have been confirmed.
          </div>

          <div className="mt-4">
            <button onClick={handleGoHome} className="btn btn-primary">Go to Home</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
