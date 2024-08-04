import React from "react";
// import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
    return(
        <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
          <ul className="list-unstyled">
            <li><a href="#" className="text-white">Privacy Policy</a></li>
            <li><a href="#" className="text-white">Terms of Service</a></li>
            <li><a href="#" className="text-white">Contact Us</a></li>
          </ul>
          <div className="social-icons">
            <a href="#" className="text-white me-3"><i className="bi bi-facebook"></i></a>
            <a href="#" className="text-white me-3"><i className="bi bi-twitter"></i></a>
            <a href="#" className="text-white"><i className="bi bi-instagram"></i></a>
          </div>
        </div>
      </footer>
    );
}

export default Footer;