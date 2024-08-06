// Busdetail.jsx
import React from 'react';
import './busdetail.css'; // Optional: for styling

const Busdetail = ({ buses }) => {
  return (
    <div className="bus-detail">
      {buses.length > 0 ? (
        <ul>
          {buses.map(bus => (
            <li key={bus.id} className="bus-item">
              <h2>Bus from {bus.fromStation} to {bus.toStation}</h2>
              <p>Date: {bus.travelDate}</p>
              <p>Departure Time: {bus.departureTime}</p>
              <p>Arrival Time: {bus.arrivalTime}</p>
              <p>Price: {bus.price}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No buses found for the selected criteria.</p>
      )}
    </div>
  );
};

export default Busdetail;
