import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import About from "./pages/About"
import Signup from './pages/Signup';
import Signin from './pages/Signin';
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
        </Routes>
      </BrowserRouter>
   
         
    </div>
  )
}

