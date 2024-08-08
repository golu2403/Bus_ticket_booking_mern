import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from './components/Navbar';

import Home from "./pages/Home";
import About from "./pages/About"
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Payment from './components/Payment';
import AdminSignup from './admin/Adminsignup';
import AdminSignin from './admin/Adminsignin';
import AdminDashboard from './pages/AdminDashboard';

export default function App() {
  return (
    <div>
        <BrowserRouter>
        
       <Navbar />
        <Routes>
        <Route path="/" element={<Home />}></Route> 
        <Route path="/about" element={<About />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/adminsignup" element={<AdminSignup />}></Route>
        <Route path="/adminsignin" element={<AdminSignin />}></Route>
        <Route path="/admin-dashboard" element={<AdminDashboard />}></Route>
        </Routes>
       
      </BrowserRouter>
   
         
    </div>
  )
}

