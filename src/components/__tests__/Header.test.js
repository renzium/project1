import React from 'react';
import { render, screen, fireEvent } from '../../test-utils';
import Header from '../Header';

describe('Header Component', () => {
  test('renders logo and navigation links', () => {
    render(<Header />);
    
    // Check if logo is present
    const logo = screen.getByAltText('Little Lemon');
    expect(logo).toBeInTheDocument();
    
    // Check if navigation links are present
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Menu')).toBeInTheDocument();
    expect(screen.getByText('Reservations')).toBeInTheDocument();
    expect(screen.getByText('Order Online')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  test('navigation links have correct href attributes', () => {
    render(<Header />);
    
    const homeLink = screen.getByText('Home').closest('a');
    const aboutLink = screen.getByText('About').closest('a');
    const menuLink = screen.getByText('Menu').closest('a');
    const reservationsLink = screen.getByText('Reservations').closest('a');
    const orderOnlineLink = screen.getByText('Order Online').closest('a');
    const loginLink = screen.getByText('Login').closest('a');
    
    expect(homeLink).toHaveAttribute('href', '/');
    expect(aboutLink).toHaveAttribute('href', '/about');
    expect(menuLink).toHaveAttribute('href', '/menu');
    expect(reservationsLink).toHaveAttribute('href', '/reservations');
    expect(orderOnlineLink).toHaveAttribute('href', '/order-online');
    expect(loginLink).toHaveAttribute('href', '/login');
  });

  test('mobile menu toggle works correctly', () => {
    render(<Header />);
    
    // Mobile menu button should be present
    const menuButton = screen.getByLabelText('Toggle menu');
    expect(menuButton).toBeInTheDocument();
    
    // Initially, mobile menu should be closed
    const mobileMenu = screen.getByRole('navigation');
    expect(mobileMenu).not.toHaveClass('nav-open');
    
    // Click menu button to open
    fireEvent.click(menuButton);
    expect(mobileMenu).toHaveClass('nav-open');
    
    // Click again to close
    fireEvent.click(menuButton);
    expect(mobileMenu).not.toHaveClass('nav-open');
  });

  test('mobile menu shows navigation links', () => {
    render(<Header />);
    
    const menuButton = screen.getByLabelText('Toggle menu');
    fireEvent.click(menuButton);
    
    // All navigation links should be visible in mobile menu
    expect(screen.getByText('Home')).toBeVisible();
    expect(screen.getByText('About')).toBeVisible();
    expect(screen.getByText('Menu')).toBeVisible();
    expect(screen.getByText('Reservations')).toBeVisible();
    expect(screen.getByText('Order Online')).toBeVisible();
    expect(screen.getByText('Login')).toBeVisible();
  });

  test('header has correct styling classes', () => {
    render(<Header />);
    
    const header = screen.getByRole('banner');
    expect(header).toHaveClass('header');
    
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('nav');
  });

  test('logo image has correct attributes', () => {
    render(<Header />);
    
    const logo = screen.getByAltText('Little Lemon');
    expect(logo).toHaveAttribute('src', 'logo.jpg');
    
    // The logo class is on the Link wrapper, not the img
    const logoLink = logo.closest('a');
    expect(logoLink).toHaveClass('logo');
  });
});
