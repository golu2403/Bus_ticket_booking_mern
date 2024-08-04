import React from "react";

import './Footer.css'; // Import your custom CSS

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container text-center text-white">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        <ul className="list-unstyled d-flex justify-content-center mb-3">
          <li className="mx-2"><a href="#" className="text-white">Privacy Policy</a></li>
          <li className="mx-2"><a href="#" className="text-white">Terms of Service</a></li>
          <li className="mx-2"><a href="#" className="text-white">Contact Us</a></li>
        </ul>
        <div className="social-icons">
          <a href="#" className="text-white me-3"><i className="bi bi-facebook"></i></a>
          <a href="#" className="text-white me-3"><i className="bi bi-twitter"></i></a>
          <a href="#" className="text-white me-3"><i className="bi bi-instagram"></i></a>
          <a href="#" className="text-white"><i className="bi bi-linkedin"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
