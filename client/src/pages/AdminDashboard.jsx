import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const AdminDashboard = () => {
  const [busDetails, setBusDetails] = useState({
    source: '',
    destination: '',
    price: '',
    availableSeats: '',
    totalSeats: '',
    date: '',
    busId: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { id, value } = e.target;
    setBusDetails((prevBusDetails) => ({
      ...prevBusDetails,
      [id]: value.trim()
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { source, destination, price, availableSeats, totalSeats, date, busId } = busDetails;

    if (!source || !destination || !price || !availableSeats || !totalSeats || !date || !busId) {
      setErrorMessage('All fields are required.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/api/busdetail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(busDetails),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccessMessage('Bus details added successfully.');
        setErrorMessage('');
        setBusDetails({
          source: '',
          destination: '',
          price: '',
          availableSeats: '',
          totalSeats: '',
          date: '',
          busId: ''
        });
      } else {
        setErrorMessage(data.message || 'Failed to add bus details.');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Admin Dashboard</h2>
      <div className="row">
        <div className="col-md-12">
          <h3 className="text-center mb-4">Add Bus Details</h3>
          <form onSubmit={handleSubmit}>
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
            {successMessage && <div className="alert alert-success">{successMessage}</div>}
            <div className="form-group mb-3">
              <label htmlFor="source">Source</label>
              <input
                type="text"
                className="form-control"
                id="source"
                placeholder="Enter source"
                value={busDetails.source}
                onChange={handleInput}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="destination">Destination</label>
              <input
                type="text"
                className="form-control"
                id="destination"
                placeholder="Enter destination"
                value={busDetails.destination}
                onChange={handleInput}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                className="form-control"
                id="price"
                placeholder="Enter price"
                value={busDetails.price}
                onChange={handleInput}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="availableSeats">Available Seats</label>
              <input
                type="number"
                className="form-control"
                id="availableSeats"
                placeholder="Enter available seats"
                value={busDetails.availableSeats}
                onChange={handleInput}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="totalSeats">Total Seats</label>
              <input
                type="number"
                className="form-control"
                id="totalSeats"
                placeholder="Enter total seats"
                value={busDetails.totalSeats}
                onChange={handleInput}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                className="form-control"
                id="date"
                placeholder="Enter date"
                value={busDetails.date}
                onChange={handleInput}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="busId">Bus ID</label>
              <input
                type="text"
                className="form-control"
                id="busId"
                placeholder="Enter bus ID"
                value={busDetails.busId}
                onChange={handleInput}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Add Bus</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
