// Searchform.jsx
import React, { useState } from 'react';
import './searchform.css'; // Optional: for styling

const Searchform = ({ onSearch }) => {
  const [fromStation, setFromStation] = useState('');
  const [toStation, setToStation] = useState('');
  const [travelDate, setTravelDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (fromStation && toStation && travelDate) {
      onSearch(fromStation, toStation, travelDate);
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <div>
        <label htmlFor="fromStation">From:</label>
        <input
          type="text"
          id="fromStation"
          value={fromStation}
          onChange={(e) => setFromStation(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="toStation">To:</label>
        <input
          type="text"
          id="toStation"
          value={toStation}
          onChange={(e) => setToStation(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="travelDate">Date:</label>
        <input
          type="date"
          id="travelDate"
          value={travelDate}
          onChange={(e) => setTravelDate(e.target.value)}
          required
        />
      </div>
      <button type="submit">Search</button>
    </form>
  );
};

export default Searchform;
