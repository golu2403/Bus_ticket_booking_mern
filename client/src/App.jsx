import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Payment from './components/Payment';
import AdminSignup from './admin/Adminsignup';
import AdminSignin from './admin/Adminsignin';
import AdminDashboard from './pages/AdminDashboard';
import Ticket from './components/Ticket';


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          
          <Route path="/" element={<Home/>} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="/admin-dashboard" element={<AdminDashboard/>} />

          
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/adminsignup" element={<AdminSignup />} />
          <Route path="/adminsignin" element={<AdminSignin />} />

        
        </Routes>
      </BrowserRouter>
    </div>
  );
}