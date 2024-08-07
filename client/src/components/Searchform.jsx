import React, { useState } from 'react';
import './searchform.css'; // Import the CSS file for styling

const Searchform = ({ onSearch }) => {
  const [fromStation, setFromStation] = useState('');
  const [toStation, setToStation] = useState('');
  const [travelDate, setTravelDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(fromStation, toStation, travelDate);
  };





  return (
    <form onSubmit={handleSubmit} className="search-form">
      <div className="form-group">
        <label>From:</label>
        <input
          type="text"
          value={fromStation}
          onChange={(e) => setFromStation(e.target.value)}
          required
          className="form-control"
          placeholder="Enter source station"
        />
      </div>
      <div className="form-group">
        <label>To:</label>
        <input
          type="text"
          value={toStation}
          onChange={(e) => setToStation(e.target.value)}
          required
          className="form-control"
          placeholder="Enter destination station"
        />
      </div>
      <div className="form-group">
        <label>Travel Date:</label>
        <input
          type="date"
          value={travelDate}
          onChange={(e) => setTravelDate(e.target.value)}
          required
          className="form-control"
        />
      </div>
      <button type="submit" className="search-button">Search Bus</button>
    </form>
  );
};

export default Searchform;
