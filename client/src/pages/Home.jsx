import React, { useState } from 'react';
import Searchform from '../components/Searchform';
import Busdetail from '../components/Busdetail';
import API_BASE_URL from '../config'; // Import centralized backend URL
import './home.css';

const Home = () => {
  const [busDetails, setBusDetails] = useState([]);

  const fetchBusDetails = async (fromStation, toStation, travelDate) => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/getbusinfo?source=${fromStation}&destination=${toStation}&date=${travelDate}`
      );

      if (response.ok) {
        const data = await response.json();
        setBusDetails(data);
      } else {
        console.error('Failed to fetch bus details:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching bus details:', error);
    }
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
