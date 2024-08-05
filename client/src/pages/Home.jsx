import React, { useState } from 'react';
import axios from 'axios';
import Searchform from '../components/Searchform';
import Busdetail from '../components/Busdetail.jsx';
import './home.css';

const Home = () => {
  const [busDetails, setBusDetails] = useState([]);

  const fetchBusDetails = async (fromStation, toStation, travelDate) => {
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    const apiUrl = `https://api.abhibus.com/v1/search?source=${fromStation}&destination=${toStation}&journeyDate=${travelDate}&apiKey=${apiKey}`;

    try {
      const response = await axios.get(apiUrl);
      setBusDetails(response.data.buses);
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
