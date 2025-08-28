import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [isLogin, setIsLogin] = useState(true);
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
    // Here you would typically handle authentication with your backend
    console.log(`${isLogin ? 'Login' : 'Signup'} submitted:`, formData);
    setIsSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        email: '',
        password: ''
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="login-page">
        <div className="success-message">
          <div className="container">
            <h1>{isLogin ? 'Welcome Back!' : 'Account Created!'}</h1>
            <p>{isLogin ? 'You have successfully logged in to your account.' : 'Your account has been created successfully.'}</p>
            <p>You can now access your personalized features.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="login-page">
      {/* Hero Section */}
      <section className="login-hero">
        <div className="container">
          <div className="login-hero-content">
            <h1>{isLogin ? 'Welcome Back' : 'Join Us'}</h1>
            <p>{isLogin ? 'Sign in to your account to continue' : 'Create an account to get started'}</p>
          </div>
        </div>
      </section>

      {/* Login/Signup Form Section */}
      <section className="section">
        <div className="container">
          <div className="auth-container">
            <div className="auth-form-container">
              <div className="auth-tabs">
                <button
                  className={`auth-tab ${isLogin ? 'active' : ''}`}
                  onClick={() => setIsLogin(true)}
                >
                  Sign In
                </button>
                <button
                  className={`auth-tab ${!isLogin ? 'active' : ''}`}
                  onClick={() => setIsLogin(false)}
                >
                  Sign Up
                </button>
              </div>

              <form onSubmit={handleSubmit} className="auth-form">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password *</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    placeholder="Enter your password"
                    minLength="6"
                  />
                </div>

                {isLogin && (
                  <div className="form-options">
                    <label className="checkbox-label">
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                      Remember me
                    </label>
                    <Link to="/forgot-password" className="forgot-password">
                      Forgot Password?
                    </Link>
                  </div>
                )}

                <button type="submit" className="btn btn-primary submit-btn">
                  {isLogin ? 'Sign In' : 'Create Account'}
                </button>
              </form>

              {isLogin && (
                <div className="social-login">
                  <p className="divider">Or continue with</p>
                  <div className="social-buttons">
                    <button className="btn btn-social google-btn">
                      <span>🔍</span> Google
                    </button>
                    <button className="btn btn-social facebook-btn">
                      <span>📘</span> Facebook
                    </button>
                  </div>
                </div>
              )}

              <div className="auth-footer">
                <p>
                  {isLogin ? "Don't have an account? " : "Already have an account? "}
                  <button
                    className="toggle-auth"
                    onClick={() => setIsLogin(!isLogin)}
                  >
                    {isLogin ? 'Sign up here' : 'Sign in here'}
                  </button>
                </p>
              </div>
            </div>

            <div className="auth-info">
              <div className="info-card">
                <h3>Why Create an Account?</h3>
                <ul className="benefits-list">
                  <li>Save your favorite orders</li>
                  <li>Track your order history</li>
                  <li>Earn loyalty points</li>
                  <li>Get exclusive offers</li>
                  <li>Faster checkout process</li>
                </ul>
              </div>

              <div className="info-card">
                <h3>Account Benefits</h3>
                <div className="benefit-item">
                  <span className="benefit-icon">🎯</span>
                  <div>
                    <h4>Personalized Experience</h4>
                    <p>Get recommendations based on your preferences</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">💎</span>
                  <div>
                    <h4>Loyalty Program</h4>
                    <p>Earn points with every order</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">📱</span>
                  <div>
                    <h4>Mobile App Access</h4>
                    <p>Order on the go with our mobile app</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container text-center">
          <h2>Ready to Get Started?</h2>
          <p className="mb-4">Join thousands of satisfied customers who love our Mediterranean cuisine.</p>
          <div className="cta-buttons">
            <Link to="/menu" className="btn btn-primary">Explore Our Menu</Link>
            <Link to="/reservations" className="btn btn-secondary">Make a Reservation</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
