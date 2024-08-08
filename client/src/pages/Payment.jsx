import React from 'react';
import { useLocation } from 'react-router-dom';
import QRCode from 'qrcode.react';


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
          <p className="card-text">Starting Point: {bus.source}</p>
          <p className="card-text">Destination : {bus.destination}</p>
          <p className="card-text">Total Seats: {bus.totalSeats}</p>
          <p className="card-text">Seats Available: {bus.availableSeats}</p>
          <p className="card-text">Bus ID: {bus.busId}</p>
          <p className="card-text">QR Code for Payment:</p>
          <pre>             <QRCode value="7355512127@axl" /></pre>
        </div>
      </div>
    </div>
  );
};

export default Payment;

