import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from './logo.jpg'; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo" onClick={closeMenu}>
            <img src={logo} alt="Little Lemon" />
          </Link>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li>
                <Link 
                  to="/" 
                  className={isActive('/') ? 'active' : ''} 
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={isActive('/about') ? 'active' : ''} 
                  onClick={closeMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/menu" 
                  className={isActive('/menu') ? 'active' : ''} 
                  onClick={closeMenu}
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link 
                  to="/reservations" 
                  className={isActive('/reservations') ? 'active' : ''} 
                  onClick={closeMenu}
                >
                  Reservations
                </Link>
              </li>
              <li>
                <Link 
                  to="/order-online" 
                  className={isActive('/order-online') ? 'active' : ''} 
                  onClick={closeMenu}
                >
                  Order Online
                </Link>
              </li>
              <li>
                <Link 
                  to="/login" 
                  className={isActive('/login') ? 'active' : ''} 
                  onClick={closeMenu}
                >
                  Login
                </Link>
              </li>
            </ul>
          </nav>
          
          <button 
            className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
