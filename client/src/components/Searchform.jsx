import React, { useState } from 'react';

const Searchform = ({ onSearch }) => {
  const [fromStation, setFromStation] = useState('');
  const [toStation, setToStation] = useState('');
  const [travelDate, setTravelDate] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(fromStation, toStation, travelDate);
  };

  return (
    <div className="search-form">
      <form onSubmit={handleSearch}>
        <div className="row g-3">
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="From Station"
              value={fromStation}
              onChange={(e) => setFromStation(e.target.value)}
            />
          </div>
          <div className="col-md-1 d-flex align-items-center justify-content-center">
            <i className="bi bi-arrow-left-right"></i>
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="To Station"
              value={toStation}
              onChange={(e) => setToStation(e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <input
              type="date"
              className="form-control"
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
            />
          </div>
          <div className="col-md-2">
            <button type="submit" className="btn btn-primary w-100">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Searchform;
