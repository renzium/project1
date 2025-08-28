import React, { useState } from 'react';
import './Reservations.css';

const Reservations = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    specialRequests: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Reservation submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        occasion: '',
        specialRequests: ''
      });
    }, 3000);
  };

  const timeSlots = [
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
    '2:00 PM', '2:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
    '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'
  ];

  const occasions = [
    'Birthday',
    'Anniversary',
    'Business Dinner',
    'Date Night',
    'Family Celebration',
    'Just Because'
  ];

  if (isSubmitted) {
    return (
      <div className="reservations-page">
        <div className="success-message">
          <div className="container">
            <h1>Reservation Confirmed!</h1>
            <p>Thank you for choosing Little Lemon. We've received your reservation request and will confirm it shortly via email.</p>
            <p>We look forward to serving you!</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="reservations-page">
      {/* Hero Section */}
      <section className="reservations-hero">
        <div className="container">
          <div className="reservations-hero-content">
            <h1>Make a Reservation</h1>
            <p>Join us for an unforgettable Mediterranean dining experience</p>
          </div>
        </div>
      </section>

      {/* Reservation Form Section */}
      <section className="section">
        <div className="container">
          <div className="reservations-content">
            <div className="reservation-form-container">
              <h2>Book Your Table</h2>
              <p className="form-subtitle">Reservations are held for 15 minutes past the reserved time.</p>
              
              <form onSubmit={handleSubmit} className="reservation-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="date">Date *</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="time">Time *</label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="guests">Number of Guests *</label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="occasion">Occasion</label>
                    <select
                      id="occasion"
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleChange}
                    >
                      <option value="">Select an occasion</option>
                      {occasions.map(occasion => (
                        <option key={occasion} value={occasion}>{occasion}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="specialRequests">Special Requests</label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Any dietary restrictions, allergies, or special requests..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                  Confirm Reservation
                </button>
              </form>
            </div>

            <div className="reservation-info">
              <div className="info-card">
                <h3>Restaurant Hours</h3>
                <div className="hours-list">
                  <div className="hours-item">
                    <span className="day">Monday - Friday</span>
                    <span className="time">11:00 AM - 10:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span className="day">Saturday</span>
                    <span className="time">10:00 AM - 11:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span className="day">Sunday</span>
                    <span className="time">10:00 AM - 9:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="info-card">
                <h3>Contact Information</h3>
                <div className="contact-info">
                  <p>📍 123 Main Street, Chicago, IL 60601</p>
                  <p>📞 (555) 123-4567</p>
                  <p>✉️ reservations@littlelemon.com</p>
                </div>
              </div>

              <div className="info-card">
                <h3>Reservation Policy</h3>
                <ul className="policy-list">
                  <li>Reservations are held for 15 minutes</li>
                  <li>Large parties (8+ guests) require 24-hour notice</li>
                  <li>Cancellations must be made 2 hours in advance</li>
                  <li>Dress code is smart casual</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container text-center">
          <h2>Questions About Your Reservation?</h2>
          <p className="mb-4">Our team is here to help make your dining experience perfect.</p>
          <div className="cta-buttons">
            <a href="tel:(555) 123-4567" className="btn btn-primary">Call Us</a>
            <a href="mailto:reservations@littlelemon.com" className="btn btn-secondary">Email Us</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservations;
