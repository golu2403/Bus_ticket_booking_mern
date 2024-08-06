import React, { useState } from 'react';
import Searchform from '../components/Searchform';
import Busdetail from '../components/Busdetail.jsx';
import './home.css';

const Home = () => {
  const [busDetails, setBusDetails] = useState([]);

  // Static data representing bus details
  const staticBusData = [
    {
      id: 1,
      fromStation: 'Station A',
      toStation: 'Station B',
      travelDate: '2024-08-10',
      departureTime: '08:00 AM',
      arrivalTime: '10:00 AM',
      price: '$30'
    },
    {
      id: 2,
      fromStation: 'Station A',
      toStation: 'Station B',
      travelDate: '2024-08-10',
      departureTime: '12:00 PM',
      arrivalTime: '02:00 PM',
      price: '$35'
    },
    
  ];

  const fetchBusDetails = (fromStation, toStation, travelDate) => {
    // Filter static data based on search criteria
    const filteredBuses = staticBusData.filter(
      bus =>
        bus.fromStation === fromStation &&
        bus.toStation === toStation &&
        bus.travelDate === travelDate
    );
    setBusDetails(filteredBuses);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content container">
          <h1>Book Bus Tickets</h1>
          <Searchform onSearch={fetchBusDetails} />
        </div>
      </div>

      {/* Bus Details Section */}
      <Busdetail buses={busDetails} />
    </div>
  );
};

export default Home;
