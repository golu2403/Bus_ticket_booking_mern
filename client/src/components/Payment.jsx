import React, { useState,useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import QRCode from 'qrcode.react';
// import './payment.css';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bus } = location.state;
  

  // State to hold the payment ID input and error message
  const [paymentId, setPaymentId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const name = localStorage.getItem('name');
    if (name) {
      setUserName(name);
    } else {
      
      console.warn('User not found in localStorage');
    }
  }, []);





  const handlePayment = (e) => {
    e.preventDefault();

    if (!paymentId) {
      setErrorMessage('Payment ID is required.');
      return;
    }

    
    alert('Payment successful!');
    
    // Redirect to the ticket section
    navigate('/ticket', { state: { bus } });
  };

  return (
    <div className="container">
      <h2 className="mt-4">Payment Details</h2>
      <div className="card mt-4 mb-4 shadow-sm">
      <div className="card-header">
          {userName ? `Hello, ${userName}!` : 'Payment Details'} {bus.source} to {bus.destination}
        </div>
        <div className="card-body">
          <div className="bus-info">
            <h5 className="card-title">Journey Details</h5>
            <p className="card-text">Date: {bus.date}</p>
            <p className="card-text">Price: ₹{bus.price}</p>
            <p className="card-text">Starting Point: {bus.source}</p>
            <p className="card-text">Destination: {bus.destination}</p>
            <p className="card-text">Total Seats: {bus.totalSeats}</p>
            <p className="card-text">Seats Available: {bus.availableSeats}</p>
            <p className="card-text">Bus ID: {bus.busId}</p>
          </div>

          <div className="qr-section text-center">
            <p className="card-text">Scan the QR Code to Make Payment:</p>
            <QRCode value={bus.UPI_ID} size={150} />
          </div>

          <form onSubmit={handlePayment} className="mt-4">
            <div className="mb-3">
              <label htmlFor="paymentId" className="form-label">Enter Payment ID</label>
              <input
                type="text"
                className="form-control"
                id="paymentId"
                placeholder="Enter your Payment ID"
                value={paymentId}
                onChange={(e) => setPaymentId(e.target.value)}
                required
              />
              {errorMessage && <small className="text-danger">{errorMessage}</small>}
            </div>
            <button type="submit" className="btn btn-primary">Confirm Payment</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
