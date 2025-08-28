import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import x from '../images/x.png';
import logo from '../images/logo-light.png';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <img src={logo} alt="Little Lemon" className="footer-logo" />
            <p>Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          </div>
          
          <div className="footer-section">
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/reservations">Reservations</Link></li>
              <li><Link to="/order-online">Order Online</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li>📍 123 Main Street, Chicago, IL</li>
              <li>📞 (555) 123-4567</li>
              <li>✉️ info@littlelemon.com</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Hours</h4>
            <ul>
              <li>Monday - Friday: 11:00 AM - 10:00 PM</li>
              <li>Saturday: 10:00 AM - 11:00 PM</li>
              <li>Sunday: 10:00 AM - 9:00 PM</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Little Lemon Restaurant. All rights reserved.</p>
          <div className="social-links">
            <a href="https://github.com/renzium/project1" aria-label="github"><img alt='github' height={16} width={16} src={github}/></a>
            <a href="https://www.linkedin.com/in/lawrence-ughonu" aria-label="linkedin"><img alt='linkedin' height={16} width={16}  src={linkedin}/></a>
            <a href="https://x.com/renzium1" aria-label="x"><img alt='x'  height={16} width={22} src={x} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
