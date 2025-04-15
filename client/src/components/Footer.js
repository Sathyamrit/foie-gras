import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Foie-Gras</h3>
            <p>Experience authentic flavors and elegant dining at our premier restaurant. We offer a comfortable atmosphere with exceptional service.</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/reservations">Reservations</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <ul className="contact-info">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <p>123 Gourmet Street, Culinary District, City</p>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <p>(123) 456-7890</p>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <p>info@gustorestaurant.com</p>
              </li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Hours</h3>
            <ul className="hours">
              <li><span>Monday - Friday:</span> 12:00 PM - 10:00 PM</li>
              <li><span>Saturday:</span> 11:00 AM - 11:00 PM</li>
              <li><span>Sunday:</span> 11:00 AM - 9:00 PM</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Gusto Restaurant. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;