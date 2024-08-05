import React from 'react';

const Busdetail = ({ buses }) => {
  return (
    <div className="container mt-5">
      <h2>Available Buses</h2>
      <div className="row">
        {buses.length > 0 ? (
          buses.map((bus, index) => (
            <div className="col-md-4" key={index}>
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">{bus.busName}</h5>
                  <p className="card-text">
                    From: {bus.source} <br />
                    To: {bus.destination} <br />
                    Departure: {bus.departureTime} <br />
                    Arrival: {bus.arrivalTime} <br />
                    Price: ₹{bus.ticketPrice}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No buses found for the selected route and date.</p>
        )}
      </div>
    </div>
  );
};

export default Busdetail;
