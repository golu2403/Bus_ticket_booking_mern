import React from 'react';
import './busdetail.css';

const Busdetail = ({ buses }) => {
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
                  <p className="card-text">Total-seats: {bus.total_seat}</p>
                  <p className="card-text">Seats Available: {bus.available_seat}</p>
                  <p className="card-text">Bus-name: {bus.bus_name}</p>
                  <button className="btn btn-primary">Book Ticket</button>
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

