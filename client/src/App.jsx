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
import Protected from './components/Protected';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Redirect based on token presence */}
          <Route path="/" element={<Protected Component={Home} />} />
          <Route path="/payment" element={<Protected Component={Payment} />} />
          <Route path="/admin-dashboard" element={<Protected Component={AdminDashboard} />} />

          {/* Public Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/adminsignup" element={<AdminSignup />} />
          <Route path="/adminsignin" element={<AdminSignin />} />

          {/* Catch-All Redirect */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
