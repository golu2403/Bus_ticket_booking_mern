import React from 'react';
import { useNavigate } from 'react-router-dom';
// import './busdetail.css';

const Busdetail = ({ buses }) => {
  const navigate = useNavigate();

  const handleSubmit = async (bus) => {
    try {
      const response = await fetch(`http://localhost:8000/update-bus/${bus.busId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Failed to update available seats:', errorData.message);
        throw new Error('Failed to update available seats');
      }

      const updatedBus = await response.json();
      navigate('/payment', { state: { bus: updatedBus } });
    } catch (error) {
      console.error('Error updating available seats:', error);
    }
  };

  return (
    <div className="container">
      {buses.length === 0 ? (
        <p>No buses found for the specified route.</p>
      ) : (
        <div className="row">
          {buses.map((bus) => (
            <div key={bus._id} className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <div className="card-header">
                  {bus.source} to {bus.destination}
                </div>
                <div className="card-body">
                  <h5 className="card-title">Date: {bus.date}</h5>
                  <p className="card-text">Price: {bus.price}</p>
                  <p className="card-text">Total seats: {bus.totalSeats}</p>
                  <p className="card-text">Seats Available: {bus.availableSeats}</p>
                  <p className="card-text">Bus ID: {bus.busId}</p>
                  <button onClick={() => handleSubmit(bus)} className="btn btn-primary">Book Ticket</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Busdetail;