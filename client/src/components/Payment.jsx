import React from 'react';
import { useLocation } from 'react-router-dom';


const Payment = () => {
  const location = useLocation();
  const { bus } = location.state;

  const handlePayment = (e) => {
    e.preventDefault();
    // Payment processing logic here
    alert('Payment successful!');
  };

  return (
    <div className="container">
      <h2 className="mt-4">Payment Details</h2>
      <div className="card mt-4 mb-4 shadow-sm">
        <div className="card-header">
          {bus.source} to {bus.destination}
        </div>
        <div className="card-body">
          <h5 className="card-title">Date: {bus.date}</h5>
          <p className="card-text">Price: {bus.price}</p>
          <p className="card-text">Total Seats: {bus.total_seat}</p>
          <p className="card-text">Seats Available: {bus.available_seat}</p>
          <p className="card-text">Bus ID: {bus.bus_id}</p>
          <form onSubmit={handlePayment}>
            <div className="mb-3">
              <label htmlFor="cardNumber" className="form-label">Card Number</label>
              <input type="text" className="form-control" id="cardNumber" required />
            </div>
            <div className="mb-3">
              <label htmlFor="cardName" className="form-label">Cardholder Name</label>
              <input type="text" className="form-control" id="cardName" required />
            </div>
            <div className="mb-3">
              <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
              <input type="text" className="form-control" id="expiryDate" required />
            </div>
            <div className="mb-3">
              <label htmlFor="cvv" className="form-label">CVV</label>
              <input type="text" className="form-control" id="cvv" required />
            </div>
            <button type="submit" className="btn btn-primary">Pay Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;

